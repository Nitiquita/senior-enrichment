import React, { Component } from 'react';
import {Link} from "react-router";

export default function NavBar() {
    return (
        <navbar className="container-fluid">
            <wrap>
                <Link className="nav-item" to="/">Home</Link>
            </wrap>
            <wrap>
                <Link className="nav-item" to="/students">Students</Link>
            </wrap>
            <wrap>
                <Link className="nav-item" to="/campuses">Campuses</Link>
            </wrap>
        </navbar>
    )
}