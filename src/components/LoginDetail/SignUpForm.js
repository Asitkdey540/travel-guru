import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = (props) => {

    const { toggleForm, validation, submit, errors } = props;

    return (
        <div className="toggol-form">
            <h3>Create a new account</h3>
            
            <form onSubmit={submit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name"
                        name="name"
                        onBlur={validation} />
                    {errors.name.length > 0 && <p className="err-msg">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email"
                        name="email"
                        onBlur={validation} />
                    {errors.email.length > 0 && <p className="err-msg">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password"
                        name="password"
                        onBlur={validation} />
                    {errors.password.length > 0 && <p className="err-msg">{errors.password}</p>}
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Confirm Password"
                        name="confirmPassword"
                        onBlur={validation} />
                    {errors.confirmPassword.length > 0 && <p className="err-msg">{errors.confirmPassword}</p>}
                </div>

                <button type="submit" className="btn btn-warning tg-primary btn-block">Create an account</button>
            </form>
            <div><p>Already have an account?</p>
                <Link onClick={toggleForm}>Sign in</Link>
            </div>
        </div>
    );
};

export default SignUpForm;