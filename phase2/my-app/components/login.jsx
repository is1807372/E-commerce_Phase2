import React from 'react';
import 'login.css'; // Import CSS file

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-overlay"></div>
            <div className="login-container active">
                <img className="login-image" src="path_to_your_image" alt="Login" />
                <div className="info">
                    <p>Login</p>
                    <input className="login-input" type="text" id="username" name="username" placeholder="Username" />
                    <input className="login-input" type="password" id="password" name="password" placeholder="Password" />
                    <button className="login-button">Login</button>
                    <p id="login-error"></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
