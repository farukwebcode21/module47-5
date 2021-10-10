import React from 'react'

const Card = (props) => {
    console.log(props);
    
    return (
        <div>
             <h4>Name: {props.name}Occapation:{props.description}</h4>
        </div>
    )
}

export default Card




