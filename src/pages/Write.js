import PrimaryButton from "../components/PrimaryButton"
import { useState } from 'react';
import {LinearProgress} from '@mui/material'
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Write(){
    const [loading, setLoading] = useState(0);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const cookies = new Cookies();
    const navigate = useNavigate();

    const handleTitleChange = (e)=>{
        setTitle(e.target.value);
    }

    const handleTextChange = (e) =>{
        setText(e.target.value);
    }

    const handleClick = ()=>{
        setLoading(1);
        axios.post("http://localhost:3003/postWriting",{
            title:title,
            writing:text,
            genre:"",
        },{
            headers:{
                'Authorization' :  `Bearer ${cookies.get("name")}`
            }
        })
        .then((res)=>{
            setLoading(0);
            navigate("/")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div className="WriteHolder">
                   {loading === 1 ?       <LinearProgress variant="indeterminate" className="progress" sx={{
            "& .MuiLinearProgress-bar":{
                backgroundColor:"#944E63",
            },
        }}></LinearProgress> : ""}
            <div className="WriteContent">
                <div className="TitleInput">
                    <input type="text" className="titleBox" placeholder="a good title makes a good story" value={title} onChange={handleTitleChange}/>
                </div>
                <div className="WriteInput">
                    <textarea placeholder="start writing..." className="contentBox" value={text} onChange={handleTextChange}></textarea>
                </div>
                <div className="SpacerTwo"/>
                <PrimaryButton text="post" onClick={handleClick}/>
            </div>
        </div>
    )
}