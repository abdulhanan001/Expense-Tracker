import React from 'react'; // add React only for follow convention for jsx
import ExpenseItem from './ExpenseItem';

const Expenses = (props)  => {


  return (
    <div className="App">
      <h2>Expense Tracking App</h2>
      <ExpenseItem title = {props.expenses[0].title} amount = {props.expenses[0].amount} date = {props.expenses[0].date}/>
      <ExpenseItem  title = {props.expenses[1].title} amount = {props.expenses[1].amount} date = {props.expenses[1].date}/>
      <ExpenseItem  title = {props.expenses[2].title} amount = {props.expenses[2].amount} date = {props.expenses[2].date}/>
      <ExpenseItem  title = {props.expenses[3].title} amount = {props.expenses[3].amount} date = {props.expenses[3].date}/>
    </div>
  );
}

export default Expenses
