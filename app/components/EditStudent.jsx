import React, { Component } from 'react';
import store from '../store'
import { Link } from 'react-router'
import axios from 'axios'

import NavBar from "./NavBar"

export default class EditStudent extends Component {
    constructor() {
        super()
        this.state = store.getState()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        const campus = event.target.value
        const selectedCampus = this.state.campuses.filter(c => {
            return campus === c.name ? c.id : null
        })
        console.log('campus id', selectedCampus[0].id)
        this.setState({ campusId: selectedCampus[0].id })
        console.log(this.state)

    }

    handleSubmit(event) {
        event.preventDefault();
        const newStudentName = event.target.name.value
        const newStudentEmail = event.target.email.value
        // should be pulled out and in your redux file -- KH
        axios.put(`/api/students/${this.state.selectedStudent.id}/editstudent`, { name: newStudentName, email: newStudentEmail, campusId: this.state.campusId })
            .then(res => {
                console.log(res)
            })
        window.location.replace(`/students/${this.state.selectedStudent.id}`) // you are using browserHistory and I would expect you to use browserHistory.push here -- KH

    }

    render() {
        const selectedStudent = this.state && this.state.selectedStudent
        return (
            <div className='background'>
                <NavBar />
                <form className="edit" onSubmit={this.handleSubmit}>
                    <div className="margins"> 
                    Name:   <input placeholder={`${selectedStudent.name}`} name='name' /> {/* These should be more than placeholders, so that when you update it doesn't go to empty strings for name and email (when we save) -- KH */}
                    </div>
                    <div className="margins">
                    Email:   <input placeholder={`${selectedStudent.email}`} name='email' />
                    </div>
                    <div className="margins">
                    <select onChange={this.handleChange}>>
                    <option>-Select Campus-</option>
                        {this.state.campuses.map(campus => {
                            return <option key={campus.id}>{campus.name}</option>
                        })}
                    </select>
                    </div>
                    <div>
                    <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}