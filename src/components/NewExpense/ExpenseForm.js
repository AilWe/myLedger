import React, {useState} from "react";
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
    //change state for title
    const [enteredTitle, setEnteredTitle] = useState("");
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    //change state for amount
    const [enteredAmount, setEnteredAmount] = useState(0);
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    //change state for date
    const [enteredDate, setEnteredDate] = useState("");
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    //depend on previous state, try to pass as a function, it is much safer
    // const [userInput, setUserInput] = useState({
    //    enteredTitle: "",
    //    enteredAmount: "",
    //    enteredDate: "",
    // });
    //
    // const titleChangeHandler = (event) => {
    //   // setUserInput({
    //   //     ...userInput,
    //   //     enteredTitle:event.target.value,
    //   // });
    //     setUserInput((prevState)=>{
    //         return { ...prevState, enteredTitle: event.target.value };
    //     });
    // };
    //
    // const amountChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredAmount: event.target.value,
    //     // });
    //     setUserInput((prevState)=>{
    //         return { ...prevState, enteredAmount: event.target.value };
    //     });
    // };
    //
    // const dateChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredAmount: event.target.value,
    //     // });
    //     setUserInput((prevState)=>{
    //         return { ...prevState, enteredDate: event.target.value };
    //     });
    // };
    const submitFormHandler = (event) => {
        //not send the form and the pages won't reload
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount(0);
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitFormHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onClickCancleButton}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
