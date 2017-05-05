
import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import axios from 'axios'
import { browserHistory } from "react-router"

import NavBar from './NavBar';
import Students from './Students'
import store from '../store'
import { addCampus, getCampuses, fetchCampuses } from '../redux'

export default class Campuses extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ value: event.target.value });
    }



    handleSubmit(event) {
        event.preventDefault();
        const newCampus = this.state.value
        axios.post(`/api/campuses/newcampus`, { name: newCampus })
            .then(res => {
                this.state.campuses.push(res.data);
                this.setState({ campuses: this.state.campuses })
            })
        
    }

    handleClick(event) {
        const campusId = event.target.value
        axios.delete(`/api/campuses/${campusId}`)
            .then(res => {
                const campuses = this.state.campuses.filter(campus => {
                    return campus.id != campusId
                })
                this.setState({ campuses: campuses })
            })


    }

    render() {
        return <div>
        <NavBar/> 

            <div >
                <ul>
                    {this.state.campuses.map((campus, idx) =>
                        <div key={idx}>
                            <Link to={`/campuses/${campus.id}`}>
                                <li>{campus.name}
                                
                                    <img src={`images/${campus.name}.jpeg`} />
                                </li>
                            </Link>
                            <button value={campus.id} onClick={this.handleClick}>
                                DELETE
                        </button>
                        </div>
                    )}
                </ul>
            </div>

            <form onSubmit={this.handleSubmit}>
                <div> Add New Campus </div> 
                <label> Campus Name: </label>
                <input onChange={this.handleChange} />
                <button>Submit</button>
            </form>

        </div>
    }
}


