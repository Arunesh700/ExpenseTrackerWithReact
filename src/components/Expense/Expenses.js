
import Card from "../UI/Card";
import './Expenses.css';
import { useState } from "react/cjs/react.development";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
    const [filteredYear,setFilteredYear] = useState('2020');
    //let expenses = props.items;
    
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear() == filteredYear;
      });
    
    return (
        <Card className="expenses">
            {console.log(filteredExpenses)}
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            
            <ExpensesList items = {filteredExpenses}/>
               
        </Card>
    )
}

export default Expenses;