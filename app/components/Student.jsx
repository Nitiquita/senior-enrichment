import React, { Component } from 'react';
import store from '../store'
import { Link } from 'react-router'

import NavBar from "./NavBar"

export default class Student extends Component {
    constructor() {
        super()
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
        const selectedStudent = this.state.selectedStudent
        return (
            <div className='background'>
                <NavBar />
                <table>
                    <tbody>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>CAMPUS</th>
                        </tr>
                        <tr>
                            <td>{this.state && this.state.selectedStudent.name}</td>
                            <td>{this.state && this.state.selectedStudent.email}</td>
                            <td>{this.state && this.state.campuses.map(campus => {
                                return campus.id === this.state.selectedStudent.campusId ? <Link key={campus.id} to={`/campuses/${campus.id}`}> {campus.name} </Link> : null
                            })}</td>
                        </tr>
                        <Link to={`/students/${selectedStudent.id}/editstudent`}> <button id='button' onClick={this.handleClick}> Edit Student </button> </Link>
                    </tbody>
                </table>
            </div>


        )
    }
}