import React, { Component } from 'react';
import axios from 'axios'
import store from '../store'
import { Link } from 'react-router'


import NavBar from "./NavBar"


//Campus component displays list of students at a campus
//Add student to campus? 

export default class Campus extends Component {

    constuctor(props) {
        this.state = store.getState()
    }


    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <h1>{this.state && this.state.selectedCampus.name} Campus</h1>
                <ul>Students
                {this.state && this.state.students.map(student => {
                    return student.campusId === this.state.selectedCampus.id ?
                    <Link  key = {student.id} to={`/students/${student.id}`}> <li>{student.name}</li> </Link> : null
                })}
                </ul>


            </div>
        )
    }
}