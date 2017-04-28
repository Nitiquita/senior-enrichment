import React, { Component } from 'react';
import NavBar from "./NavBar"
import axios from 'axios'
import Campuses, { campuses } from "./Campuses"
import store from '../store'
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
            {console.log(this.props)}
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
                                    <td>{student.name}</td>
                                    <td>X</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}