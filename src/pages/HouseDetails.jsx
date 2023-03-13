import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function HouseDetails() {
    const { houseId } = useParams();
    const [ house, setHouse ] = useState(null);
    const [ setError ] = useState(null);

    const getHouse = async () => {
        try {
            const response = await axios.get(`https://wizard-world-api.herokuapp.com/houses/${houseId}`);
            setHouse(response.data);
        } catch (error) {
            setError()
        }
    }

    useEffect (() => {
        getHouse();
    },)

    return (
        <div> 
        {house &&
            <div key={house.id}>
                <h1>{house.name}</h1>
                <p>Founded by {house.founder}</p>
                <p>Colours: {house.houseColours}</p>
                <p>Element: {house.element} | Animal: {house.animal}</p>
                <p>Traits of students:</p>
                {house.traits.map(trait => {
                return (
                    <ul key={trait.id}>
                        <li>{trait.name}</li>
                    </ul>
                )
                })}
            </div> 
        }
        </div>
    )
}
