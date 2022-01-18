import React, { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeFilter = (e) => {
    setFilteredYear(e);
  };

  const filterExpanses = props.items.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilter} />

        <ExpensesList item={filterExpanses} />
      </Card>
    </>
  );
}

export default Expenses;
