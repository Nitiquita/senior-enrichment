import React, { Component } from 'react';
import { Link } from 'react-router'
import NavBar from "./NavBar";



export default class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <img className='home' src="images/home.jpeg" />
                </div>

            </div>
        )
    }


}