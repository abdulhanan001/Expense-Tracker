import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   EnteredTitle: '',
  //   EnteredAmount: '',
  //   EnteredDate: ''
  // })

  const titleChangeHandler = (event) =>  {
    setEnteredTitle(event.target.value)

    // setUserInput({  // When we dependent on  prevState this approch can be use but edge case is that React scdule to update states and this method will be fail and get outDated data
    //   ...userInput,
    //   EnteredTitle: event.target.value
    // })

    // setUserInput((prevState) => { // This is the conventional approch that should use when we dependent our prevState
    //   return { ...prevState, EnteredTitle: event.target.value}
    // });
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   EnteredAmount: event.target.value
    // })
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   EnteredDate: event.target.value
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    console.log(ExpenseData)
  }
  return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Tilte</label>
        <input type='text' onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type='numner' min="0.01" step="0.01" onChange={amountChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
      </div>
    </div>

    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>
}

export default ExpenseForm;
