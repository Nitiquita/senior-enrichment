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

    // are you ever having a situation where this.state is undefined? store.getState should be sync and you have set initialState -- KH
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
                    {/* It makes most sense to DRY your code and do the conditional of if there is a selectedStudent outside of the entire row -- KH */}
                        <tr>
                            <td>{this.state && this.state.selectedStudent.name}</td> 
                            <td>{this.state && this.state.selectedStudent.email}</td>
                            <td>{this.state && this.state.campuses.map(campus => {
                                return campus.id === this.state.selectedStudent.campusId ? <Link key={campus.id} to={`/campuses/${campus.id}`}> {campus.name} </Link> : null
                            })}</td> {/* this works here, but I would expect the logic to be in the state. Because the campus of the selectedStudent seems like state */}
                        </tr>
                        <Link to={`/students/${selectedStudent.id}/editstudent`}> <button id='button' onClick={this.handleClick}> Edit Student </button> </Link>
                    </tbody>
                </table>
            </div>


        )
    }
}