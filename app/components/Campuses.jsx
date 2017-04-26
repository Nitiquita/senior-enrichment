
import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import NavBar from './NavBar';
import axios from 'axios'
import Students from './Students'
import store from '../store'

export default class Campuses extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }


    // componentDidMount() {
    //     axios.get('/api/campuses')
    //         .then(res => {
    //             const campuses = res.data
    //             this.setState({ campuses })
    //         })
    // }

    render() {
        return <div>
            <div>
            {console.log(this.props)}
                <ul>
                    {/*<NavBar></NavBar>*/}
                    {this.state.campuses.map((campus, idx) =>
                        <Link key={idx} to={`/campuses/${campus.id}`}>
                            <li >{campus.name}
                                <img src={`images/${campus.name}.jpeg`} />
                            </li>
                        </Link>
                    )}
                </ul>
            </div>
        </div>
    }
}



//axios requests - intial fetching would go in an onEnter hook where react stuff is 
//