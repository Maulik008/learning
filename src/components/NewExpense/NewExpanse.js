import React, { useState } from "react";
import "./NewExpanse.css";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDateHandler = (e) => {
    const ExpenseData = {
      ...e,
      id: Math.random().toString(),
    };
    console.log(ExpenseData);
    props.onAddExpense(ExpenseData);
  };

  const isEditingHandler = () => {
    setIsEditing(true);
  };

  const isFalseEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="new-expense">
        {!isEditing && (
          <button className="new-expense__actions" onClick={isEditingHandler}>
            Add New Expense
          </button>
        )}

        {isEditing && (
          <ExpenseForm
            onStopHandling={isFalseEditingHandler}
            onSaveExpenseData={saveExpenseDateHandler}
          />
        )}
      </div>
    </>
  );
};

export default NewExpense;
