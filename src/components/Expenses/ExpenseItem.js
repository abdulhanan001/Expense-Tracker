import React from 'react'; // add React only for follow convention for jsx
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

const ExpnessItem = (props) => {
  return (
  <Card className='expense-item'>
    <ExpenseDate date={props.date}/>
    <div className='expense-item__description'>
      <h2>{props.title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
    </div>
  </Card>
  );
}

export default ExpnessItem
