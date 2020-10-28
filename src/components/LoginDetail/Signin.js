import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import SignInWithOthers from './SignInWithOthers';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';



const Signin = () => {
    const [newUser, setNewUser] = useState(false)
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    // console.log(signedInUser);

    const [currentUser, setCurrentUser] = useState({
        isSignedIn: false,
        email: "",
        password: "",
        error: "",
        success: false
    });

    const handleFormToggle = () => {
        setNewUser(!newUser);
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedUser = {
                    isSignedIn: true,
                    email: email,
                    name: displayName
                };
                setCurrentUser(signedUser);
                setSignedInUser(signedUser);
                history.replace(from)
            })
            .catch(error => {
                const newUser = { ...currentUser };
                newUser.error = error.message;
                // newUser.success = false;
                setSignedInUser(newUser);
                console.error(error);
            })
    };


    const handleFacebookSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedUser = {
                    isSignedIn: true,
                    email: email,
                    name: displayName
                };
                setCurrentUser(signedUser);
                setSignedInUser(signedUser);
                history.replace(from)
            })
            .catch(error => {
                const newUser = { ...currentUser };
                newUser.error = error.message;
                newUser.success = false;
                setSignedInUser(newUser);
                console.error(error);
            })
    };

    const [anotherUser, setAnotherUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    let pas1, pas2;
    const handleFormValidation = (e) => {
        let isFieldValid = true;
        const errors = { ...anotherUser };

        if (e.target.name === "name") {
            isFieldValid = e.target.value.length > 3;
            if (!isFieldValid) {
                errors[e.target.name] = "Name is not valid"
                setAnotherUser(errors);
            }
            else {
                errors[e.target.name] = "";
                setAnotherUser(errors);
            }
        }
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            if (!isFieldValid) {
                errors[e.target.name] = "Email not valid";
                setAnotherUser(errors);
            }
            else {
                errors[e.target.name] = "";
                setAnotherUser(errors);
            }
        }

        if (e.target.name === "password" || e.target.name === "confirmPassword") {
            const isPasswordValid = e.target.value.length > 5;
            const passwordHasNumber = /\d{2}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;

            if (e.target.name === "password") {
                pas1 = e.target.value;
                if (!isFieldValid) {
                    errors[e.target.name] = "Password not valid";
                    setAnotherUser(errors);
                }
                else {
                    errors[e.target.name] = "";
                    setAnotherUser(errors);
                }
            }
            if (e.target.name === "confirmPassword") {
                pas2 = e.target.value;
                if (!isFieldValid && pas1 !== pas2) {
                    errors[e.target.name] = "Password not matched";
                    setAnotherUser(errors);
                }
                else {
                    errors[e.target.name] = ""
                    setAnotherUser(errors);
                }
            }
        }

        if (isFieldValid) {
            const user = { ...currentUser };
            user[e.target.name] = e.target.value;
            setCurrentUser(user);
        }
    }

    const handleCreateNewUser = (e) => {
        e.preventDefault();
        if (!currentUser.email && !currentUser.password) {
            const errors = { ...anotherUser };
            errors.name = "Please Use a valid name";
            errors.email = "Please Use a valid email"
            errors.password = "Please Use a valid password";
            errors.confirmPassword = "Password not matched";
            setAnotherUser(errors);
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(currentUser.email, currentUser.password)
                .then(res => {
                    const { displayName, email } = res.user;
                    const newUser = {
                        name: displayName,
                        email: email,
                        success: true,
                        error: ""
                    };
                    setCurrentUser(newUser);
                    setSignedInUser(newUser);
                    history.replace(from);
                    verifyEmail();
                })
                .catch(error => {
                    const newUser = { ...currentUser };
                    newUser.error = error.message;
                    newUser.success = false;
                    setSignedInUser(newUser);
                    console.error(error.message);
                })
        }
    };

    const verifyEmail = () => {
        var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function () { })
            .catch(function (error) {
                console.log(error);
            });
    };



    const handleSignedIn = (e) => {
        e.preventDefault();
        if (!currentUser.email && !currentUser.password) {
            const errors = { ...anotherUser };
            errors.email = "Please Use a valid email";
            errors.password = "Please Use a valid";
            setAnotherUser(errors);
        }
        else {
            firebase.auth().signInWithEmailAndPassword(currentUser.email, currentUser.password)
                .then(res => {
                    const { displayName, email } = res.user;
                    const signedUser = {
                        isSignedIn: true,
                        email: email,
                        name: displayName,
                        success: true,
                        error: ""
                    };
                    setCurrentUser(signedUser);
                    setSignedInUser(signedUser);
                    history.replace(from);
                })
                .catch(error => {
                    const newUser = { ...currentUser };
                    newUser.error = error.message;
                    newUser.success = false;
                    setSignedInUser(newUser);
                    console.error(error.message);
                })
        }
    }

    return (
        <section className="signinAndup text-center">
            <div className="container">
                {currentUser.success && (<div className="alert alert-success" role="alert"> User {!newUser ? "logged in" : "registered"} successfully
                </div>)}
                {signedInUser.error && (<div className="alert alert-danger" role="alert">
                    {signedInUser.error}
                </div>)}
                {
                    newUser ? (
                        <SignUpForm toggleForm={handleFormToggle} validation={handleFormValidation} submit={handleCreateNewUser} errors={anotherUser}></SignUpForm>
                    ) : (
                            <SignInForm toggleForm={handleFormToggle} validation={handleFormValidation} submit={handleSignedIn} errors={anotherUser}></SignInForm>
                        )}


                <SignInWithOthers google={handleGoogleSignIn} facebook={handleFacebookSignIn}></SignInWithOthers>
            </div>
        </section>
    );
};

export default Signin;