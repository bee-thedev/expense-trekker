import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


 const Transaction = ({transaction})=> {
    const {deleteTransaction} = useContext(GlobalContext);

    const deleteTransactionFunction =()=>{
        deleteTransaction(transaction.id);
    }


    const sign = transaction.amount < 0 ? '-': '+';


    // Dynamically converting color of our buttons - green for plus, red for minus--how?

    return(
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span> 
        <button onClick={deleteTransactionFunction} className="delete_btn">X</button>

        </li>
        
        );

}

export default Transaction;