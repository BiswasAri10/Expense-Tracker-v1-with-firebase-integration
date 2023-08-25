import React from "react";
import ExpenseForm from "./Expenseform";
import './NewExpense.css';

const NewExpense = (props) => {
    const SaveExpenseDataHandler = async (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        try {
            const response = await fetch(
                "https://expense-tracker-data-e4ad9-default-rtdb.firebaseio.com/expensesv1.json",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(expenseData)
                }
            );

            if (!response.ok) {
                throw new Error("Failed to add expense.");
            }

            props.onAddExpense(expenseData);
        } catch (error) {
            console.error("Error adding expense:", error);
        }
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
