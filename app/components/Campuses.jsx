
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

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
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
                {console.log(this.state)}
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



