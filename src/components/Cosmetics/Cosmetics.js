import React from 'react'
import { useState, useEffect } from 'react';
import Cosmetic from './Cosmetic';


const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(()=>{
        fetch('./cosmetics.json')
        .then(res => res.json())
        .then(data =>setCosmetics(data));

    },[])
    return (
        <div className="cosmetic">
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic._id} cosmetic={cosmetic}/>)
            }
        </div>
    )
}

export default Cosmetics
