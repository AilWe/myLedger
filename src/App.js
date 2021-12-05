
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";
const DUMMY_expenses = [
    {
        id: 'e1',
        title: 'Cat food',
        amount: 30.99,
        date: new Date(2021, 11, 3),
    },
    {
        id: 'e2',
        title: 'Cat Tree',
        amount: 119.99,
        date: new Date(2020, 1, 17) },
    {
        id: 'e3',
        title: 'Cat Litter',
        amount: 23.99,
        date: new Date(2020, 6, 8),
    },
    {
        id: 'e4',
        title: 'Cat Toy',
        amount: 20,
        date: new Date(2021, 1, 11),
    },
];
 const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_expenses);
    const submitExpenseFormHandler = (expenseData) => {

        setExpenses(prevExpenses => {
            return [expenseData,...prevExpenses];
        });

    };
  return (
    <div>
        <div>
            <NewExpense onSubmitForm={submitExpenseFormHandler}/>
            <Expenses expenses={expenses} />
        </div>

    </div>
  );
}

export default App;
