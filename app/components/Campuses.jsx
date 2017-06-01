
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


    handleSubmit(event) {
        event.preventDefault();
        var newCampus = event.target.campus.value;
        var newImage = event.target.image.value;
        // should be in redux file -- KH
        axios.post(`/api/campuses/newcampus`, { name: newCampus, imgSrc: newImage })
            .then(res => {
                console.log(res.data)
                this.state.campuses.push(res.data);
                this.setState({ campuses: this.state.campuses })
                var element1 = document.querySelector('#input1'); // get these off of the event -- KH
                element1.value = '';
                var element2 = document.querySelector('#input2');
                element2.value = '';

            })

    }

    handleClick(event) {
        const campusId = event.target.value
        axios.delete(`/api/campuses/${campusId}`) // should be in redux file -- KH
            .then(res => {
                const campuses = this.state.campuses.filter(campus => {
                    return campus.id != campusId
                })
                this.setState({ campuses: campuses })
            })


    }

    render() {
        return (
            <div className='background'>
                <NavBar />

                <ul>
                    {this.state.campuses.map((campus, idx) =>
                        <div id="images" key={idx}>
                            <Link to={`/campuses/${campus.id}`}>
                                <li>{campus.name}</li>
                                <li>
                                    <img src={campus.imgSrc} alt="planet image"/>
                                    </li>
                            </Link>
                            <button value={campus.id} onClick={this.handleClick}>
                                DELETE
                        </button>
                        </div>
                    )}
                </ul>

                <form id="form" onSubmit={this.handleSubmit}>
                    <div className="title"> Add New Campus </div>
                    <div>
                    <label> Campus Name: </label>
                    <input name='campus' id='input1' onChange={this.handleChange} />
                    </div>
                    <div>
                    <label> Image URL: </label>
                    <input name='image' id='input2' onChange={this.handleChange} placeholder="Optional"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


