import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store'
import axios from 'axios'
import { Link } from 'react-router'

import NavBar from "./NavBar"
import Campuses from "./Campuses"

import { fetchCampusById, getCampus } from '../redux'


export default class Students extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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


    handleClick(event) {
        const studentId = event.target.value
        axios.delete(`/api/students/${studentId}`)
            .then(res => {
                const students = this.state.students.filter(student => {
                    return student.id != studentId
                })
                this.setState({ students: students })
            })
    }

    handleChange(event) {
        const campus = event.target.value
        const selectedCampus = this.state.campuses.filter(c => {
            return campus === c.name ? c.id : null
        })
        this.setState({ campusId: selectedCampus[0].id })
    }

    handleSubmit(event) {
        event.preventDefault();
        const newStudentName = event.target.name.value
        const newStudentEmail = event.target.email.value

        axios.post(`/api/students/newstudent`, { name: newStudentName, email: newStudentEmail, campusId: this.state.campusId })
            .then(res => {
                this.state.students.push(res.data);
                this.setState({ students: this.state.students })
                var element1 = document.querySelector('#input1');
                element1.value = '';
                var element2 = document.querySelector('#input2');
                element2.value = '';
            })
    }

    render() {
        return (

            <div className='background'>

                <NavBar />
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>CAMPUS</th>
                            </tr>
                            {this.state.students.map(student =>

                                <tr key={student.id}>
                                    <td>{student.id}</td>

                                    <td>
                                        <Link to={`/students/${student.id}`}>
                                            {student.name}
                                        </Link>
                                    </td>
                                    <td>{student.email}</td>
                                    <td>{this.state.campuses.map(campus => {
                                        return campus.id === student.campusId ? campus.name : null
                                    })}</td>
                                    <td><button value={student.id} onClick={this.handleClick}>
                                        DELETE
                                        </button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
                <form id='form' onSubmit={this.handleSubmit}>
                    <div className='title'> Add New Student </div>
                    <div>
                        <label> Student Name: </label>
                        <input name='name' id='input1' />
                    </div>
                    <div>
                        <label> Student Email: </label>
                        <input name='email' id='input2' />
                    </div>
                    <select onChange={this.handleChange}>>
                    <option>-Select Campus-</option>
                        {this.state.campuses.map(campus => {
                            return <option key={campus.id}>{campus.name}</option>
                        })}
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
