import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [enteredTitle, SetEnteredTitle] = useState("");
  //   const [enteredAmount, SetEnteredAmount] = useState("");
  //   const [enteredDate, SetEnteredDate] = useState("");
  const [userInput, setuserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const TitleChangeHandler = (e) => {
    setuserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };
  const AmountChangeHandler = (e) => {
    setuserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };
  const DateChangeHandler = (e) => {
    setuserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const ExpenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    console.log(ExpenseData);
    setuserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });

    props.onSaveExpenseData(ExpenseData);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control ">
            <label>Title</label>
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={TitleChangeHandler}
            />
          </div>
          <div className="new-expense__control ">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={userInput.enteredAmount}
              onChange={AmountChangeHandler}
            />
          </div>
          <div className="new-expense__control ">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={userInput.enteredDate}
              onChange={DateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button onClick={props.onStopHandling}>Cancle</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
