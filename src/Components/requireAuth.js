import React, {Component} from 'react';
import { connect } from "react-redux";


export default function (ComposedComponent) {
    class Authenticate extends Component {

        UNSAFE_componentWillMount() {
            if(!localStorage.getItem('user') && this.props.location !== '/login'){
                this.props.history.push('/login');
                return false;
            }else if(localStorage.getItem('user') && this.props.location.pathname === '/'){
                this.props.history.push('/list');
                return false;
            }
        }


        render() {
            return (
                <ComposedComponent {...this.props} history={this.props.history} />
            );
        }
    }


    return connect(null)(Authenticate);
}
