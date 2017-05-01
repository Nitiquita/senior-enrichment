import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store'
import axios from 'axios'
import { Link } from 'react-router'

import NavBar from "./NavBar"
import Campuses, { campuses } from "./Campuses"
import { fetchCampusById, getCampus } from '../redux'


export default class Students extends Component {
    constructor(props) {
        super(props)
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

    fetchCampusById(campusId) {
        store.dispatch(getCampus(campusId))
    }

    render() {
        return (
            <div>
            {console.log(this.state)}
                <div>
                    {/*<NavBar />*/}
                </div>
                <div>
                    <div>
                        {/*<NavBar></NavBar>*/}
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>CAMPUS</th>
                                <th></th>
                            </tr>
                            {this.state.students.map(student =>
                              
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                      
                                    <td>
                                    <Link to={`/students/${student.id}`}>
                                    {student.name}
                                    </Link>
                                    </td>
                                    <td>X</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapState = state => {
    return {
        students: state.students
    }
}


const StudentsContainer = connect(
  mapState, null
)(Students);