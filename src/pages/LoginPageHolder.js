import { useEffect, useState } from "react";
import TabView from "../components/TabView"
import LoginPageIntro from '../static/LoginPageIntro.svg'
import axios from "axios";
import { useLocation } from "react-router-dom";


export default function LoginPageHolder(){
  const location=useLocation();
  console.log(location)
  const ben=location.state    //asrithhhhhhhhhhhh
  console.log(ben)         
    const [quote,setQuote] = useState("A wise man said that");

    useEffect(()=>{
        axios.get("http://localhost:3003/register",(req,res)=>{
            console.log(req)
        })
        .then((res)=>{
            setQuote(res.data.quote)
            console.log(res,"loginpage")
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <div className="LoginPageHolder">
            <div className="LoginTab">
                <TabView ben={ben }></TabView>
            </div>
            <div className="quoteDiv">
                <div className="quoteContent">
                  <h4>{quote}</h4>
                </div>
                <div className="quotePic">
                    <img src={LoginPageIntro} alt="a girl reading books sitting" width="450px" />
                </div>
            </div>
        </div>
    )  
}