import React, { Component } from 'react';
import { Link } from "react-router";

export default function NavBar() {
    return (
        <navbar className="container-fluid">
            <wrap id="academy">
                Margaret Hamilton Interplanetary Academy of JavaScript
            </wrap>
            <div>
            <wrap>
                <Link id="home" className="nav-item" to="/">Home</Link>
            </wrap>
            <wrap>
                <Link id="students" className="nav-item" to="/students">Students</Link>
            </wrap>
            <wrap>
                <Link id="campuses" className="nav-item" to="/campuses">Campuses</Link>
            </wrap>
            </div>
        </navbar>
    )
}