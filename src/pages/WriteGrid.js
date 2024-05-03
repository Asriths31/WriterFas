import Pencil from '../static/pencil.svg';
import WriteCard from '../components/WriteCard';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function WriteGrid(){
    const [writings, setWritings] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:3003/allPosts")
        .then((res)=>{
            setWritings(res.data)
        })
        .catch((er)=>{
            console.log(er);
        })
    },[])

    const handleWriteClick = ()=>{
        navigate("/write")
    }

    return(
    <div className='WritingsGrid'>

        <div className='writingDecoy' onClick={handleWriteClick}>
            start writing...
            <img src={Pencil} alt="pencil" width="45px"/>
        </div>
            {
                writings.map((item)=>(
                    <WriteCard username={item.userName} title={item.title} promo={item.writing.split("\n")[0]}/>
                ))
            }
     
    </div>
    )
}