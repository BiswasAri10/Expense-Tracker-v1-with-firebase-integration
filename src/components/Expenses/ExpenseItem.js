import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  /*const [amount, setAmount] = useState(props.amount);
  const clickHandler = () => {
    setAmount('100')
    console.log(amount);
  };*/
  /*return React.createElement(
    Card,
    { className: 'expense-item' },
    React.createElement(ExpenseDate, { date: props.date }),
    React.createElement(ExpenseDetails, {
      title: props.title,
      amount: props.amount,
      location: props.location,
    })
  );*/
  return ( <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      {/* <button onClick={clickHandler}>Delete</button> */}
    </Card>
  </li>
    
  );
}
export default ExpenseItem;
