import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if(newBudget <= totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget(totalExpenses + 10);
            return;
        };
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