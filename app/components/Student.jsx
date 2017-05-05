import React, { Component } from 'react';
import store from '../store'
import { Link } from 'react-router'

import NavBar from "./NavBar"

export default class Student extends Component {
    constructor() {
        super()
        this.state = store.getState()
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

    handleClick() {
        
    }


    render() {
        const selectedStudent = this.state.selectedStudent
        console.log(selectedStudent)
        return (
            <div>
               <NavBar/> 
                <ul>
                    <li>{this.state && this.state.selectedStudent.name}</li>
                    <li>{this.state && this.state.selectedStudent.email}</li> 
                    <li>Attends {this.state && this.state.campuses.map(campus => {
                        return campus.id === this.state.selectedStudent.campusId ? <Link key={campus.id} to={`/campuses/${campus.id}`}> {campus.name} </Link>: null
                    })} Campus</li>
                </ul>
                <Link to={`/students/${selectedStudent.id}/editstudent`}> <button onClick={this.handleClick}> Edit Student </button> </Link> 
            </div>


        )
    }
}