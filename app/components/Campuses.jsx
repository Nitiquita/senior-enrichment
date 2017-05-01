
import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import axios from 'axios'
import { browserHistory } from "react-router"

import NavBar from './NavBar';
import Students from './Students'
import store from '../store'
import { addCampus } from '../redux'

export default class Campuses extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({
            campus: value
        })

    }


    newCampus(campus) {
        return dispatch => {
            axios.post('/api/campuses/new', { campus })
                .then(res => {
                    dispatch(addCampus(res.data))
                }, () => {
                    browserHistory.push(`campuses/${campus.id}`)
                })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.newCampus({campus: event.target.value})
    }

    render() {
        return <div>
            <div >
                <ul>
                    {this.state.campuses.map((campus, idx) =>
                        <Link key={idx} to={`/campuses/${campus.id}`}>
                            <li >{campus.name}
                                <img src={`images/${campus.name}.jpeg`} />
                            </li>
                        </Link>
                    )}
                </ul>
            </div>

            <form>
                Add New Campus
            <label> Campus Name: </label>
                <input onChange={this.handleChange} />
                <button onSubmit={this.handleSubmit}>Submit</button>
            </form>
        </div>
    }
}


