import React, { Component } from 'react';

export default function AddStudent() {

    
    return (
        <form>
            <input
            type="text"
            onChange={handleChange}
            />
            <select>
            {/*campuses.map(map => {
                <option>{campus}</option>
            })*/}
            </select>
            <button onSubmit={handleSubmit}>Submit</button>
        </form>
    )
}