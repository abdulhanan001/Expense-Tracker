import React, {useState} from 'react'; // add React only for follow convention for jsx
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

const ExpnessItem = (props) => {
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated!')
  }
  return (
  <Card className='expense-item'>
    <ExpenseDate date={props.date}/>
    <div className='expense-item__description'>
      <h2>{title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
    </div>
    <button onClick={clickHandler}> click me</button>
  </Card>
  );
}

export default ExpnessItem
