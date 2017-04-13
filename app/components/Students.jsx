import React, { Component } from 'react';
import NavBar from "./NavBar"


//is this a dumb component if I need to be able to show all students?
export default function Students() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>CAMPUS</th>
                        </tr>
                        {/*student.map(student) => {
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.campus}</td>
                            </tr>}*/}
                    </tbody>
                </table>
            </div>
        </div>
    )
}