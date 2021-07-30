import React,{ createContext, useReducer } from "react";

const initialState = {
    transactions :[
        {id:1 ,first_name:"Tomasine",last_name:"Sher", email:"tsher0@ow.ly" ,amount:413.75 ,text:"Pepper Squash"},
        {id:2 ,first_name:"Jasmine",last_name:"Sherry", email:"hello0@ow.ly" ,amount:-43,text:"ChilliSauce"},
        {id:3 ,first_name:"Honeye",last_name:"Camry", email:"nice@ow.ly" ,amount:75 ,text:"Hersheys Kisses"},
        {id:4 ,first_name:"Joseph",last_name:"Elene", email:"due@ow.ly" ,amount:330 ,text:"Salt"},
        {id:5 ,first_name:"John",last_name:"Jerry", email:"christoph@ow.ly" ,amount: -125 ,text:"RanchSauce"},
        ]
}

//After adding dispatch update the reducer

export const AppReducer = (state, action) => {
    switch(action.type){
        case "DELETE_tRANSACTION": 
        return{
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }

        case "ADD_tRANSACTION": 
        return{
            ...state,
            transactions : [action.payload, ...state.transactions]
        }
        default: 
        return state;
    }
    
}

//Creating Context

export const GlobalContext = createContext(initialState);


//Creating Provider to wrap children up in the App component

//Later add dispatch to the Global provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction =(id)=>{
        dispatch({
            type: "DELETE_tRANSACTION",
            payload: id
        });
    }

    const addTransaction =(transaction)=>{
        dispatch({
            type: "ADD_tRANSACTION",
            payload: transaction
        });
    }

    return(
            <GlobalContext.Provider
            value={{transactions : state.transactions,
            deleteTransaction,
            addTransaction}}>
            {children}
            </GlobalContext.Provider>
            );

}