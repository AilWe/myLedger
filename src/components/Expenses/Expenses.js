import React, {useState} from "react";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    //set selected year
    const [selectedYear, setSelectedYear] = useState('2021');
    const expenseFilterHandler = (selectedFilter) => {
        setSelectedYear(selectedFilter);
    }
    //set the selected data
    const selectedExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={selectedYear}
                    onSelectedFilter={expenseFilterHandler}
                />
                <ExpensesChart expenses={selectedExpenses} />
                <ExpensesList selectedExpenses = {selectedExpenses}/>
            </Card>

        </div>


    );
}

export default Expenses;
