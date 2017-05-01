import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import axios from 'axios'

import NavBar from './NavBar';
import Students from './Students'
import store from '../store'


export default class AddCampuses extends Component {

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

    render() {
        return <div>
        {console.log('state', this.state)}
            <div>
                <ul>
                    {this.state.campuses.map((campus, idx) =>
                        <Link key={idx} to={`/campuses/${campus.id}`}>
                            <li >{campus.name}
                                <img src={`images/${campus.name}.jpeg`} />
                            </li>
                        </Link>
                    )}
                    <Link to='/campuses/newcampus'> 
                    <li>Add a Campus</li> 
                    </Link>
                </ul>
            </div>
        </div>
    }
}
