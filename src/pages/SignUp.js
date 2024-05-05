import openEye from '../static/openEye.svg';
import closeEye from '../static/closedEye.svg';
import { useRef, useState } from "react";
import PrimaryButton from '../components/PrimaryButton';
import EndCreds from '../components/EndCreds';
import axios from 'axios';
import { LinearProgress } from '@mui/material';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';


export default function SignUp(){
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [loading, setLoading] = useState(0)
    const passwordRef = useRef(0)
    const [eyeState, setEyeState] = useState(0)
    const [userName, setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [about,setAbout] = useState("")

    const handleOpenEye = () =>{
        setEyeState(1)
        passwordRef.current.type = "text"
    }
    const handleCloseEye = () =>{
        setEyeState(0)
        passwordRef.current.type = "password"
    }

    const handleClick = () =>{
        setLoading(1)
        axios.post("http://localhost:3003/register",{
            userName:userName,
            email:email,
            password:password,
            about:about,
        })
        .then((res)=>{
            cookies.set("name",res.data.token)
            setLoading(0)
            navigate("/")
        })
        .catch((e)=>{

        });
    }
    const handleNameChange = (e)=>{
        setUsername(e.target.value);
    }

    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }

    const handleAboutChange = (e)=>{
        setAbout(e.target.value)
    }

    return(
        <div className="SignUpHolder">
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
            <div className="emailInput">
                <p className="InputLabel">
                    enter email
                </p>
                <input className="InputBox" type="email" value={email} onChange={handleEmailChange}/>
            </div>
            <div className="aboutInput">
                <p className="InputLabel">
                    enter about
                </p>
                <input className="InputBox" type="email" value={about} onChange={handleAboutChange}/>
            </div>
            <div className="passwordInput">
                <p className="InputLabel">
                    enter password
                </p>
                <input className="InputBox" type="password" ref={passwordRef} value={password} onChange={handlePasswordChange}/>
                <div className="eye">
                    {eyeState === 1 ? <img src={closeEye} alt="hide password" className="eyeS" onClick={handleCloseEye}/> : <img src={openEye} alt="show password" className="eyeS" onClick={handleOpenEye}/>}
                </div>
            </div>
            <div className="Spacer"></div>
            <PrimaryButton text="continue" onClick={handleClick}></PrimaryButton>
            <div className="Spacer"></div>
            <EndCreds/>
        </div>
    )
}