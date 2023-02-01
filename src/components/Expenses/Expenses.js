import { useState } from "react";
import ExpensesChart from './ExpensesChart'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses =(props)=>{

    const [filtredYear,setFilteredYear] = useState('2020');
    
    const selectedYearHandler = (year)=>{
      setFilteredYear(year);
    }

    const filtredExpenses = props.items.filter((expense)=>expense.date.getFullYear().toString() === filtredYear);

    return(
        <div>
            
            <Card>
              <ExpensesFilter onSelectedYear={selectedYearHandler} selected={filtredYear}/>
              <ExpensesChart expenses={filtredExpenses}/>
              <ExpensesList items={filtredExpenses}/>
            </Card>
        </div>
        
       
    )
}

export default Expenses;