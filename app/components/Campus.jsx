import React, { Component } from 'react';
import NavBar from "./NavBar"
import axios from 'axios'

export default function Campus(props) {
    const getCampus = (id) => {
        return axios.get('/api/campuses')
            .then(res => {
                return res.data
                // return res.data.filter(campus => {
                //     return id === campus.id
                // })
            })
    }
    return (
        <div>
            <NavBar />

        </div>
    )
}