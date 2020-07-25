import React, {Component} from 'react';
import Navbar from "./Navbar";
import { data } from '../Utils/data';
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description : ''
        }
    }

    componentDidMount() {
        let elId = parseInt(this.props.match.params.id);
        let elementDetails = '';
        let theList = '';
        if(localStorage.getItem('item_list')){
            theList = JSON.parse(localStorage.getItem('item_list'));
            let index = theList.findIndex(p => p.id === elId);
            elementDetails = theList[index];
            console.log(elementDetails,index)
        }else{
            elementDetails = data[parseInt(elId - 1)];
        }
        this.setState({
            title: elementDetails.title,
            description: elementDetails.description
        })
    }


    render() {
        return (
            <>
                <Navbar />
                <div className="login-wrapper bg-white shadow-md addNew singlePage">
                    <div className="form-group">
                        <div className="form-control">
                            {this.state.title}
                        </div>
                    </div>
                    <div className="form-group">
                        <p>
                            {this.state.description}
                        </p>
                    </div>
                </div>
                <div className="btn-container text-center">
                    <Link to="/list" className="btn btn-default btn-back shadow-md">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-left"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </Link>
                </div>
            </>
        );
    }
}

export default Login;