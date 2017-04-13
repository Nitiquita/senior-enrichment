import React, { Component } from 'react';
import NavBar from './NavBar'
// import axios from 'axios'



export default class Campuses extends Component {
    constructor() {
        super()
        //this.state = {campuses: campuses}
    }
    //handleClick() => {
        // react <Link> to redirect to one campus 
    // }
    render() {
        return (
            <div>
                <NavBar />
                <ul>
                {/*campuses.map(campus => {
                    <li onClick={handleClick}> {campus.image}<li>
                })*/}
                </ul>
            </div>
        )
    }
}

// const getCampuses = () => {
//     axios.get(`/api/campuses`)
//       .then(response => {
//         campuses = response.data;
//       });
// }

//axios requests - intial fetching would go in an onEnter hook where react stuff is 
//