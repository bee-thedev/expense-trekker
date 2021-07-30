import React from "react";
import { Link} from "react-router-dom";


export default function Home (){
    return(
        <React.Fragment>
            <h4> This is my Homepage</h4>
            <Link to="/">Home Page</Link>
        </React.Fragment>
        
    )
}