import React from "react";
import "./ExpenseItem.css"
import "../UI/Card.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


const ExpenseItem = (props) => {
    return (
        <li>
            <Card>
                {
                    <div className="expense-item">
                        <ExpenseDate month={props.date.toLocaleString('en-US', {month: "long"})}
                                     day={(props.date.getDate()+1).toLocaleString('en-US' )}
                                     year={props.date.getFullYear()}/>
                        <div className="expense-item__description">
                            <h2>{props.title}</h2>
                            <div className="expense-item__price">$ {props.amount}</div>
                        </div>
                    </div>

                }
            </Card>
        </li>

    );
}

export default ExpenseItem;
