import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  return props.item.length === 0 ? (
    <p>No Any Items</p>
  ) : (
    props.item.map((em) => {
      return (
        <ul className="expenses-list">
          <ExpenseItem
            key={em.id}
            title={em.title}
            amount={em.amount}
            date={em.date}
          />
        </ul>
      );
    })
  );
};

export default ExpensesList;
