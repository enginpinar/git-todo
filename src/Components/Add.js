import React, {Component} from 'react';
import Navbar from "./Navbar";

class Login extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="login-wrapper bg-white shadow-md addNew">
                    <div className="form-group">
                        <input type="text"
                               className="form-control shadow-none"
                               placeholder="What needs to be done?"
                               aria-label="username"
                               aria-describedby="basic-addon1" />
                        <span className="addNew-btn">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                              <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                            </svg>
                        </span>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control shadow-none" id="exampleFormControlTextarea1" rows="3" />
                    </div>
                </div>
                <div className="btn-container text-center">
                    <button type="button" className="btn btn-default btn-add shadow-md">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                            <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                        </svg>
                    </button>
                </div>
            </>
        );
    }
}

export default Login;