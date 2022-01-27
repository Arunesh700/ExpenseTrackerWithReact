import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    const [isEditing,isSetEditing] = useState(false);
   const saveExpenseDataHandler = (enteredExpenseData) => {
       const expenseData = {
           ...enteredExpenseData,
           id:Math.random().toString()
       };
       
       props.onFormSubmit(expenseData);
   }
      const startEditingHandler = (args) => {
          if(args==false)
          {
              isSetEditing(false)
          }
          else {
              isSetEditing(true);
          }
      }
    return (
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelForm={startEditingHandler}/>}
    </div>
    );
}

export default NewExpense;