import { useEffect, useState } from "react";
import TabView from "../components/TabView"
import LoginPageIntro from '../static/LoginPageIntro.svg'
import axios from "axios";


export default function LoginPageHolder(){

    const [quote,setQuote] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:3003/quote")
        .then((res)=>{
            setQuote(res.data.quote)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <div className="LoginPageHolder">
            <div className="LoginTab">
                <TabView></TabView>
            </div>
            <div className="quoteDiv">
                <div className="quoteContent">
                    {quote}
                </div>
                <div className="quotePic">
                    <img src={LoginPageIntro} alt="a girl reading books sitting" width="450px" />
                </div>
            </div>
        </div>
    )  
}