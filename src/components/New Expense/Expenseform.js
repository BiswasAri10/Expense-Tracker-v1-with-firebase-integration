import React, { useState } from "react";
import "./Expenseform.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");
  const [enteredLocation, setenteredLocation] = useState("");
  const [showForm, setShowForm] = useState(false);
  /*const [userInput, setuserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });*/
  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
    /*setuserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });*/
  };

  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    /*setuserInput({
        ...userInput,
        enteredAmount: event.target.value,
    })
    setuserInput((prevState) => {
        return {...prevState, enteredTitle: event.target.value};
    });*/
  };

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
    /*setuserInput({
        ...userInput,
        enteredDate: event.target.value,
    })*/
  };

  const locationChangeHandler = (event) => {
    setenteredLocation(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expensedata = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      location: enteredLocation,
    };
    props.onSaveExpenseData(expensedata);
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
    setenteredLocation("");
    setShowForm(false);
  };

  const cancelHandler = () => {
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
    setenteredLocation("");
    setShowForm(false); 
  };

  const toggleFormHandler = () => {
    setShowForm((prevState) => !prevState); 
  };

  return (
    <div>
      {!showForm && (
        <div className="new-expense_actions">
          <button onClick={toggleFormHandler}>Add New Expense</button>
        </div>
      )}
      {showForm && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2023-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Location</label>
              <input
                type="text"
                value={enteredLocation}
                onChange={locationChangeHandler}
              ></input>
            </div>
          </div>
          <div className="new-expense__actions">
          <button type="button" onClick={cancelHandler}>
              Cancel </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
