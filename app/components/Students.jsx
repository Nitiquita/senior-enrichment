import React, { Component } from 'react';
import NavBar from "./NavBar"
import axios from 'axios'
import Campuses, { campuses } from "./Campuses"



export default class Students extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            campuses: []
        }
    }
    componentDidMount() {
        axios.get('/api/students')
            .then(res => {
                const students = res.data.map(elem => {
                    return elem
                })
                this.setState({ students })
            })

    }
    getCampus(campusId) {
        return campuses.filter(campus => {
            return campus.id === campusId
        })
    }

    render() {
        return (
            <div>
            {console.log(props)}
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