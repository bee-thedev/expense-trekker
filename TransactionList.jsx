import React from "react";



const TransactionList = () => {
    return (
       <React.Fragment>
           <h3>History</h3>
           <ul id="list" className="list">
               <li class="minus">Cash<span>$400</span> <button className="delete_btn">X</button></li>
           </ul>
       </React.Fragment>
    )
}


export default TransactionList;