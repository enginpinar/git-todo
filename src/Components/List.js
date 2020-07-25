import React, {Component} from 'react';
import Navbar from "./Navbar";
import { data } from '../Utils/data';
import swal from 'sweetalert';
import { Link} from "react-router-dom";


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            description : '',
            descriptionField : false,
            theList : {}
        }
        this.onChange   = this.onChange.bind(this);
        this.showDescField   = this.showDescField.bind(this);
        this.onSubmit   = this.onSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.checkFunc = this.checkFunc.bind(this);
    }



    showDescField(e){
        e.preventDefault(); e.stopPropagation();
        this.setState(prevState => ({ descriptionField: !prevState.descriptionField }));
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkFunc(index){
       console.log(index);
        let theList = [...this.state.theList];
        let item = {...theList[index]};
        item.isChecked = !item.isChecked;
        theList[index] = item;
        this.setState({theList},
            () => {
                if(localStorage.getItem('item_list')){
                    localStorage.removeItem('item_list')
                }
                localStorage.setItem('item_list',JSON.stringify(this.state.theList));
            });
    }

    onSubmit(e){
        e.preventDefault();
        let formData = { id: (data.length + 1), title: this.state.title, description: this.state.description, isChecked: false};
        let x =  [ ...this.state.theList,formData]
        console.log(x)
        this.setState({
            theList : x
        },() => {
            if(localStorage.getItem('item_list')){
                localStorage.removeItem('item_list')
            }
            localStorage.setItem('item_list',JSON.stringify(this.state.theList));
        })
        console.log(this.state.theList)
    }

    removeItem(e){
        e.preventDefault(); e.stopPropagation();
        let index = parseInt(e.currentTarget.getAttribute('id'));
        swal({
            title: "Are you sure?",
            text: "You will remove this list element!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("The list element has been removed!", {
                        icon: "success",
                    }).then(() => {
                        let array = [...this.state.theList]; // make a separate copy of the array
                        if (index !== -1) {
                            array.splice(index, 1);
                            this.setState({theList: array},() => {
                                if(localStorage.getItem('item_list')){
                                    localStorage.removeItem('item_list')
                                }
                                localStorage.setItem('item_list',JSON.stringify(this.state.theList));
                            });
                        }
                    });
                } else {
                    swal("The list element has not removed!");
                }
            });

    }

    componentDidMount() {
        if(!localStorage.getItem('item_list')){
            this.setState({
                theList : data
            },() => {
                localStorage.setItem('item_list',JSON.stringify(this.state.theList));
            });
        }else{
            this.setState({
                theList : JSON.parse(localStorage.getItem('item_list'))
            })
        }

    }

    render() {
        let listEls = {}
        let awaitingEls = '';
        if(this.state.theList[0]){
            listEls = this.state.theList.map(( project, index ) => {
                return(
                    <div className="form-check" key={index}>
                        <label className={"check-container "+(project.isChecked ? 'selected' : null)}>
                            <Link to={`/list/${project.id}`} className="text">{project.title}</Link>
                            <span className="elId"> 000{project.id} </span>
                            <span className="checkmark" onClick={() => this.checkFunc(index)} />
                            <span className="delete" onClick={this.removeItem} id={index}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                  <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                </svg>
                            </span>
                        </label>
                    </div>
                )
            })
            awaitingEls = Object.values(this.state.theList).filter(list => !list.isChecked).length;
        }

        return (
            <>
                <Navbar />
                <form onSubmit={this.onSubmit}>
                    <div className="login-wrapper bg-white shadow-md addNew">
                        <div className="form-group">
                            <input type="text"
                                   className="form-control shadow-none"
                                   placeholder="What needs to be done?"
                                   aria-label="title"
                                   onChange={this.onChange}
                                   name="title"
                                   value={this.state.title}
                                   aria-describedby="basic-addon1" />
                            <span className="addNew-btn" onClick={this.showDescField}>
                            { this.state.descriptionField ?
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                    <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                </svg>
                                :
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                                    <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                                </svg>
                            }
                        </span>
                        </div>
                        <div className={"form-group "+(this.state.descriptionField ? 'show' : 'hide')  }>
                            <textarea className="form-control shadow-none"
                                      placeholder="Type your description"
                                      name="description"
                                      onChange={this.onChange}
                                      value={this.state.description}
                                      rows="3" />
                        </div>
                    </div>
                    <div className="btn-container text-center">
                        <button className="btn btn-default btn-add shadow-md">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                                <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                            </svg>
                        </button>
                    </div>
                </form>
                <div className="list-wrapper bg-white shadow-md">
                    <div className="check-wrapper listing-style">
                        {this.state.theList[0] ? listEls : null}
                    </div>
                </div>
                <div className="sub-bar bg-white shadow-md">
                    <div className="row">
                        <div className="col leftSide"> todo <span className="text">{awaitingEls}</span> items left  </div>
                        <div className="col-7 text-center">
                            <label className="label"> All </label>
                            <label className="label active"> Active </label>
                            <label className="label"> Completed </label>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default List;