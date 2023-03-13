import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Home () {
    const [houses, setHouses] = useState([]);

    const getHouses = async() => {
        try {
            const response = await axios.get('https://wizard-world-api.herokuapp.com/houses');
            setHouses(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getHouses();
    }, []);

    return (
        <div>
            <h1>Hogwarts houses</h1>
            {houses.map(elem => {
                return (
                    <div key={elem.id}>
                        <h2>{elem.name}</h2> 
                        <p>Founder: {elem.founder}</p>
                        <Link to={`/houses/${elem.id}`}>See more</Link>
                    </div>
                )
            })}
        </div>
    )
}