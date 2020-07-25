import React, {Component} from 'react';
import { connect } from 'react-redux';
import { LoginFunc } from '../Actions/LoginAct'
import {Link} from "react-router-dom";
import swal from 'sweetalert';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({ errors: {}, isLoading: false});
        //this.props.LoginFunc(this.state).then((data) => { console.log(data+' asd') }, (err) => { console.log(err)})
        console.log(this.props.LoginFunc(this.state))
        if(this.props.LoginFunc(this.state).user){
            let user = this.props.LoginFunc(this.state).user;
            console.log(user)
            if(localStorage.getItem('user')){
                localStorage.removeItem('user')
            }
            localStorage.setItem('user', JSON.stringify(user))
            swal("Success!", "Login has been success", "success").then( () => {
                this.props.history.push('/list')
            });
        }else{
            swal("Error!", "Your username or password wrong! ", "error");
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="login-wrapper bg-white shadow-md">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text"
                               onChange={this.onChange}
                               className="form-control shadow-none"
                               placeholder="username"
                               aria-label="username"
                               name="username"
                               value={this.state.username}
                               aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon2">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-key" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd"
                                d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                          <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </span>
                        </div>
                        <input type="password"
                               onChange={this.onChange}
                               value={this.state.password}
                               name="password"
                               className="form-control shadow-none"
                               placeholder="password"
                               aria-label="password"
                               aria-describedby="basic-addon2" />
                    </div>
                </div>
                <div className="check-wrapper mt-3">
                    <div className="row m-0">
                        <div className="col">
                            <div className="form-check">
                                <label className="check-container">beni hatırla
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                        <div className="col text-right">
                            <Link to="/"> şifremi unuttum </Link>
                        </div>
                    </div>
                </div>
                <div className="btn-container text-center mt-3">
                    <button className="btn btn-default btn-login shadow-md"> LOGIN </button>
                </div>
            </form>
        );
    }
}

export default connect(null, { LoginFunc })(Login);