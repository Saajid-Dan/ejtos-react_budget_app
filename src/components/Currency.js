import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const handleCurrencyChange = (event) => {    
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }

    const myStyle = {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        margin: 0,
        border: 0,
    }

    return (
        <div className="alert alert-danger">
             <label style={myStyle}>
               Currency   
               <select className="alert alert-danger dropdown-content" value={currency} onChange={handleCurrencyChange} style={myStyle}> 
                 <option  className="dropdown-item" value="£">£ Pound</option>
                 <option className="dropdown-item" value="$">$ Dollar</option>
                 <option  className="dropdown-item" value="€">€ Euro</option>
                 <option  className="dropdown-item" value="₹">₹ Ruppee</option>
               </select>
             </label>
           </div>
    );
};
export default Currency;