import React from "react";
import './Signup.css';

const Signup = () => {
    return(
        <div className="signup">
            <div className="signuup_wpaper">
                <div className="signup_text">
                    <h1 className="signup_title">Want tips & tricks to optimize your flow?</h1>
                    <p className="signup_p">Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="signup_form">
                    <form>
                        <div className="dis">
                             <input placeholder="Enter email" type="text" name='Email' className="Inp"></input>
                        <button class="btn_form" type="submit" > Notify Me </button>
                        </div>
                       
                        <p>We care bout the protection of your data. Read our</p>
                        <p className="Green_text">Privacy Policy.</p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Signup;