import axios from "axios"
import Divider from "./Divider"
import React from "react"
export default function SearchComponent(props){
    const[count,setCount]=React.useState(0) 
function handleclick(){
    setCount((prev)=>!prev)
}

    return(
        <div>
            <div className="SearchComponentHolder">
                <div className="SearchComponentContent">
                    <p className="SearchComponentTitle" onClick={handleclick}>{props.title}</p>
                    <p className="SearchComponentCap">written by: {props.username}</p>
                    {count?<p>{props.writing}</p>:<p></p>}
                </div>
            </div>
            <Divider/>
        </div>
    )
}