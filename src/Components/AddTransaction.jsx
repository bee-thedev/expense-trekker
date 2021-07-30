import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";



const AddTransaction = () => {
    //making two states - one each for each input field.

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (event) => {
        event.preventDefault();
    const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text : text,
        amount : +amount
    }
    addTransaction(newTransaction);
} 


    const textChange=(event)=>{
        setText(event.target.value);
    }

    const amountChange=(event)=>{
        setAmount(event.target.value);
    }
    return(
        <div>
        <h3> Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}>
            <div className="form_control">
                <label htmlFor="text">Text</label>
                <input 
                id="text" 
                type="text" 
                placeholder="Enter text here..."
                value={text}
                onChange={textChange}
                name="text"   
                />
            </div>

            <div className="form_control">
                <label htmlFor="amount"> Amount <br /> (negative -expense),(positive - income) </label>
                <input 
                type="number" 
                id="amount" 
                placeholder="Amount here ..."
                value={amount}
                onChange={amountChange}
                name="amount"
                />
            </div>
                <button className="btn"> Add Transaction </button>
            </form>
        </div>
    )
}

export default AddTransaction;