import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {

  const inital_expenses = [
    {id:'e1',title:"Car Insurance",amount:294.23,date:new Date(2021,2,28)},
    {id:'e2',title:"Food",amount:46.89,date:new Date(2021,3,12)},
    {id:'e3',title:"Tennis",amount:94.53,date:new Date(2021,3,18)},
    {id:'e4',title:"light",amount:124.23,date:new Date(2021,3,28)}
  ];

  const [expenses,setExpenses] = useState(inital_expenses)

  const addNewExpenseHandler = (expense)=>{
   setExpenses((prevState)=>{
    return [...prevState,{...expense,id:Math.random().toString()}]
   })
  }
  return(
    <div>
      <NewExpense onAddNewExpesne={addNewExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
    
  )
}

export default App;
