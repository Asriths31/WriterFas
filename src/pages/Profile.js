import Divider from '../components/Divider';
import WriteCard from '../components/WriteCard';
import Cookies from 'universal-cookie';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function Profile(){
    const cookie = new Cookies();
    const name = cookie.get("name");
    const navigate = useNavigate();

   

    const [data, setData] = useState({
        userInfo:{
            userName:"",
            email:"",
            profileImg:"",
            about:""
        },
        writings:[]
    })
    
    useEffect(()=>{
        if(name === undefined){
            navigate("/register")
        }
        axios.get("http://localhost:3003/profile",{
            headers:{
                'Authorization':`Bearer ${name}`
            }
        })
        .then((res)=>{
            setData(res.data)
        })
        .catch((er)=>{
            console.log(er);
        })
    },[])



    const handleWriteClick = ()=>{
        navigate("/write")
    }

    const handleLogout = ()=>{
        cookie.remove("name")
        navigate("/")
    }

    return(
        <div className="HomePageHolder">
        <NavBar selected="three"/>
        <div className="ProfileHolder">
            <div className="ProfileCard">
                <div className="ProfileHolderImage"></div>
                <div className="ProfileHolderContent">
                    <div className="ProfileHolderTitle">
                         {data.userInfo.userName}
                    </div>
                    <div className="ProfileHolderCap">
                        {data.userInfo.about}
                    </div>
                </div>
                <div className='TextButton' onClick={handleLogout}>
                    logout
                </div>
            </div>
            <div className='Spacer'/>
            <div className="ProfileWritings">
                <div className="ProfileWritingsTitle">
                    writings
                </div>
                <div className="TextButton" onClick={handleWriteClick}>
                    start writing
                </div>
            </div>
            <Divider/>
            {
            
            data.writings.map((item)=>(
                <WriteCard username={item.userName} title={item.title} promo={item.writing.split("\n")[0]}/>
            ))
        }
 
        </div>
    </div>
        
    )
}