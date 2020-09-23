import { Link } from '@material-ui/core';
import React from 'react';

const SignInForm = (props) => {
    const { toggleForm, validation, submit, errors } = props;
    return (
        <div className="toggol-form">
            <h3>Sign in</h3>

            <form onSubmit={submit}>
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

                <div className="form-group forgot-pass">
                    <div className="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="rememberUser" />
                        <label htmlFor="rememberUser" className="custom-control-label"> Remember me</label>
                    </div><br/>
                    <Link to="/">Forget Password</Link>
                </div>
                <button type="submit" className="btn btn-warning tg-primary btn-block">Sign In</button>
            </form>
            <div className="registered">
                Don’t have an account?
                <Link className="btn btn-logintoggle" onClick={toggleForm}>
                    Create an account
				</Link>
            </div>
        </div>
    );
};

export default SignInForm;