import React from "react";



const AddTransaction = () => {
    return(
        <div>
        <h3> Add new transaction</h3>
            <form id="form">
            <div class="form_control">
                <label for="text">Text</label>
                <input id="text" type="text" placeholder="Enter text here..."/>
            </div>

            <div class="form_control">
                <label for="amount"> Amount <br /> (negative -expense),(positive - income) </label>
                <input type="number" id="amount" placeholder="Amount here ..."/>
            </div>

            </form>
        </div>
    )
}

export default AddTransaction;