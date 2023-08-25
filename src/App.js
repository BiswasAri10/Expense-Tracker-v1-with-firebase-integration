import React, { useState, useEffect } from "react";
import NewExpense from "./components/New Expense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://expense-tracker-data-e4ad9-default-rtdb.firebaseio.com/expensesv1.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        // Transform the fetched data into the desired format
        const transformedExpenses = Object.keys(data).map(key => ({
          id: key,
          title: data[key].title,
          amount: +data[key].amount,
          date: new Date(data[key].date),
          location: data[key].location
        }));
        setExpenses(transformedExpenses);
        console.log("Transformed Expenses:", transformedExpenses);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      {expenses === null ? (
      <p>Loading...</p>
    ) : (
      <Expenses items={expenses} />
    )}
    </div>
  );
};

export default App;
