import React from 'react'
import {addToDd} from '../../utilities/fakedb'
const Cosmetic = (props) => {
  
    const {name, company, balance, age, _id} = props.cosmetic;

    const handlePurchases = id => {
        console.log(id);
        addToDd(id);

    }
    
    return (
        <div className="cosmetic-detail">
            <h3>{name}</h3>
            <p>{age}</p>
            <h4>{company}</h4>
            <p>{balance}</p>
            <button onClick={()=> handlePurchases(_id)}>Purchase</button>
        </div>
    )
}

export default Cosmetic
