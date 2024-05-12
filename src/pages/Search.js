import SearchComponent from "../components/SearchComponent"

import axios from 'axios';
import {useState} from 'react';
import NavBar from "../components/NavBar";

export default function Search(){
    const [searchTerm, setSearchTerm] = useState("");
    const [matchedObjects, setMatchedObjects] = useState([])

    const handleChange = (e)=>{
        setSearchTerm(e.target.value)
        axios.get("http://localhost:3003/search",{
            params:{
                searchTerm:e.target.value,
            }
        })
        .then((res)=>{
            console.log(res.data)
            setMatchedObjects(res.data)
        })
        .catch((er)=>{
            console.log(er)
        })
    }
    return(
    <div className="HomePageHolder">
        <NavBar selected="two"/>
        <div className="SearchPageHolder">
            <div className="SearchBox">
                <input className="searchBox" type="text" placeholder="search among stories, poems and many more" value={searchTerm} onChange={handleChange}/>
                <i class="fa-solid fa-magnifying-glass searchIcon"></i>
            </div>
            {
            matchedObjects.map((item)=>(
                    <SearchComponent title={item.writings[0].title} username={item.userName} writing={item.writings[0].writing}/>
                )) 
            }
        </div>
    </div>

    )
}