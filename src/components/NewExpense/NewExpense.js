import React, { useState } from "react";
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props)=>{

    const [showForm,setShowForm]  = useState(false);

    const saveDataHandler = (enteredData)=>{
        const newData = {
            ...enteredData,
            id:Math.random().toString()
        };
        props.onAddNewExpesne(newData);
    }

    const addNewExpenseButtonHandler =()=>{
        setShowForm(true);
    }

    const cancelNewExpenseButtonHandler =(isShowForm)=>{
        setShowForm(isShowForm);
    }

    return <div className="new-expense">
        {!showForm &&<button onClick={addNewExpenseButtonHandler}>Add new Expense</button>}
        {showForm &&<ExpenseForm onSaveData={saveDataHandler} onCancelNewExpensButtonHandler={cancelNewExpenseButtonHandler}/>}
    </div>
}

export default NewExpense;