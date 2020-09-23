import React from 'react';
import { Button } from 'react-bootstrap';
import './LoginDetail.css'

const SignInWithOthers = (props) => {
    return (
        <div>
            <div className="form-divider text-center">
                <p>Or</p>
            </div>
            <div className="thirdParty">
                <Button variant="light" onClick={props.google}>
                    <span>
                        <img src={require("../../travel-images/Icon/google.png")} style={{ maxWidth: "30px" }} alt="" />
                    </span>
                    <span>Continue with Google</span>
                </Button>

                <Button variant="light" onClick={props.facebook}>
                    <span>
                        <img src={require("../../travel-images/Icon/fb.png")} style={{ maxWidth: "30px" }} alt="" />
                    </span>
                    <span>Continue with Facebook</span>
                </Button>
            </div>
        </div>
    );
};

export default SignInWithOthers;