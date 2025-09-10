import React, { useState } from 'react';
import './App.css'; // Import the stylesheet

function App() {
    // useState hook to manage which form is active.
    // 'isSignUp' will be true if the sign-up form should be shown, false otherwise.
    const [isSignUp, setIsSignUp] = useState(false);

    // Handler function to switch to the Sign Up form
    const showSignUp = () => {
        setIsSignUp(true);
    };

    // Handler function to switch to the Sign In form
    const showSignIn = () => {
        setIsSignUp(false);
    };

    return (
        <div className="container">
            {/* Conditional Rendering: Show Sign Up form if isSignUp is true */}
            {isSignUp ? (
                <form id="signUpForm" className="form">
                    <h1>Create Account</h1>
                    <div className="input-group">
                        <label htmlFor="signUpName">Full Name</label>
                        <input type="text" id="signUpName" placeholder="Enter your full name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="signUpEmail">Email</label>
                        <input type="email" id="signUpEmail" placeholder="Enter your email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="signUpPassword">Password</label>
                        <input type="password" id="signUpPassword" placeholder="Create a password" required />
                    </div>
                    <button type="submit">Sign Up</button>
                    <p className="toggle-text">
                        Already have an account? <span onClick={showSignIn} className="toggle-link">Sign In</span>
                    </p>
                </form>
            ) : (
                // Otherwise, show the Sign In form
                <form id="signInForm" className="form">
                    <h1>Sign In</h1>
                    <div className="input-group">
                        <label htmlFor="signInEmail">Email</label>
                        <input type="email" id="signInEmail" placeholder="Enter your email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="signInPassword">Password</label>
                        <input type="password" id="signInPassword" placeholder="Enter your password" required />
                    </div>
                    <button type="submit">Sign In</button>
                    <p className="toggle-text">
                        Don't have an account? <span onClick={showSignUp} className="toggle-link">Sign Up</span>
                    </p>
                </form>
            )}
        </div>
    );
}

export default App;