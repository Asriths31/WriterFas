import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import EndCreds from "../components/EndCreds";
import openEye from '../static/openEye.svg';
import closeEye from '../static/closedEye.svg';
import { useRef } from "react";
import axios from 'axios'
import {LinearProgress} from '@mui/material'
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';


export default function Login(){
    const passwordRef = useRef(0)
    const [eyeState, setEyeState] = useState(0)
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(0)
    const cookies = new Cookies();
    const navigate = useNavigate();

    const handleNameChange = (e) =>{
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    
    const handleOpenEye = () =>{
        setEyeState(1)
        passwordRef.current.type = "text"
    }
    const handleCloseEye = () =>{
        setEyeState(0)
        passwordRef.current.type = "password"
    }

    const handleClick = ()=>{
        setLoading(1)
        navigate("/profile")
        axios.post("http://localhost:3003/register",{
            userName:userName,
            password:password,
        },console.log('login'))
        .then((res)=>{
            cookies.set("name",res.data.token)
            console.log(res)
            navigate("/profile")
            setLoading(0)
        })
        .catch((err)=>{
            console.log("Suprise Mother fucker",err)
        })
    }

    return(
        <div className="LoginFormHolder">
        {loading === 1 ?       <LinearProgress variant="indeterminate" className="progress" sx={{
            "& .MuiLinearProgress-bar":{
                backgroundColor:"#944E63",
            },
        }}></LinearProgress> : ""}
  
            <div className="userNameInput">
                <p className="InputLabel">
                    enter username
                </p>
                <input className="InputBox" type="text" value={userName} onChange={handleNameChange}/>    
            </div>
            <div className="passwordInput">
                <p className="InputLabel">
                enter password
                </p>
                <input className="InputBox" type="password" value={password} onChange={handlePasswordChange} ref={passwordRef}/>
                <div className="eye">
                    {eyeState === 1 ? <img src={closeEye} alt="hide password" className="eyeS" onClick={handleCloseEye}/> : <img src={openEye} alt="show password" className="eyeS" onClick={handleOpenEye}/>}
                </div>
            </div>
            <div className="resetPasswordHolder">
               <p className="resetPassword">forgot password?</p>
            </div>         
            <PrimaryButton text="continue" onClick={handleClick}></PrimaryButton>
            <div className="Spacer">

            </div>
            <EndCreds/>
        </div>
    )
}