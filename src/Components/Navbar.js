import React, {Component} from 'react';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : ''
        }
    }

    componentDidMount() {
        localStorage.getItem('user') ? this.setState({ username: JSON.parse(localStorage.getItem('user')).username}) : this.setState({ username: 'username'});
    }


    render() {

        return (
            <div className="navbar-top p-3">
                {this.state.username}
                <span>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                </span>
            </div>
        );
    }
}

export default Navbar;