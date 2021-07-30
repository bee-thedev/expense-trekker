import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AccountSummary (){
    const { transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => (transaction.amount));

    const income = amounts
            .filter(currentValue=> currentValue > 0)
            .reduce((acc,currentValue) => ( acc + currentValue),0)
            .toFixed(3);

    const expense = amounts
                .filter(currentValue=> currentValue < 0)
                .reduce((acc,currentValue) => ( acc + currentValue),0)* -1
                .toFixed(3);


    return(
        <React.Fragment>
            <div className="income_expense_calculator">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>

            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>

            </div>
        </React.Fragment>
    )
}

export default AccountSummary;