
import React, { Component } from 'react';
import NavBar from './NavBar';
import axios from 'axios'

export default class Campuses extends Component {
    constructor() {
        super()
        this.example = ["c1", "c2", "c3"]
        this.getCampuses = () => {
            axios.get('/api/campuses')
                .then(res => {
                    console.log("res.data", res.data)
                    return res.data;
                }).catch((err) => {
                    console.log(err)
                    return ["x", "y", "z"];
                })
        }
        //this.state = {campuses: campuses}
    }
    // handleClick() => {
    outputABC() {
        return ["a", "b", "c"]
    }

    // }
    getCampuses() {
        axios.get('/api/campuses')
            .then(res => {
                console.log("res.data", res.data)
                return res.data;
            }).catch((err) => {
                console.log(err)
                return ["x", "y", "z"];
            })
    }
    componentWillMount() {
        this.campuses = this.getCampuses()
    }
    render() {
        return <div>
            {console.log(this.getCampuses())}
            <div><ul>
                {/*<NavBar></NavBar>*/}
                <li>Hello World!</li>
                {this.outputABC().map((letter) => {
                    return <li>{letter}</li>
                })}
                {this.example.map((foo) => {
                    return <li>{foo}</li>
                })}
                {this.campuses.map((campus) => {
                    return <li>{campus}</li>
                })}
            </ul></div>
        </div>

        // return (
        //     <div>
        //         {console.log("campuses", getCampuses())}
        //         <ul>
        //             <li>{this.getCampuses()}</li>
        //         {/*campuses.map(campus => {
        //             <li onClick={handleClick}> {campus.image}<li>
        //         })*/}
        //         </ul>
        //     </div>
        // )
    }
}


//axios requests - intial fetching would go in an onEnter hook where react stuff is 
//