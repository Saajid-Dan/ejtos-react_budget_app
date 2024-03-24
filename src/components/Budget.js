import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary' style={{whiteSpace: "nowrap",}}>
        <label>
            Budget: {currency}
            <input label="s" type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </label>
        </div>
    );
};
export default Budget;