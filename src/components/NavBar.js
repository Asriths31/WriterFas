import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"

export default function NavBar(props){
    
    const oneRef = useRef(0)
    const twoRef = useRef(0)
    const threeRef = useRef(0)
    const navigate = useNavigate();
    const cookie = new Cookies();
    const name = cookie.get("name")

    useEffect(()=>{
        if(props.selected === "one"){
            oneRef.current.classList.add("NavItemSelected")
        } else if(props.selected === "two"){
            twoRef.current.classList.add("NavItemSelected")
        } else{
            threeRef.current.classList.add("NavItemSelected")
        }
    },[])

    const handleOne = ()=>{
        navigate("/")
    }

    const handleTwo = ()=>{
        navigate("/search")
    }

    const handleThree = ()=>{
        navigate("/profile")
    }

    const toRegister = ()=>{
        navigate("/register")
    }

    return(
        <div className='HomePageGrid'>
        <div className="NavBarHolder">
            <div className="OneBar">
                <div className="NavItem one" ref={oneRef} onClick={handleOne}>
                    
                    <i class="fa-solid fa-house" style={{marginRight:"30px"}}></i>
                    home
                </div>
                <div className='NavItem two' ref={twoRef} onClick={handleTwo}>
                    <i class="fa-solid fa-magnifying-glass" style={{marginRight:"30px"}}></i>
                    search
                </div>
                <div className='NavItem three ' ref={threeRef} onClick={handleThree}>
                    <i class="fa-regular fa-user" style={{marginRight:"30px"}}></i>
                    profile
                </div>
            </div>
            {name === undefined ? <div className='loginBar'>
                <div className='BarTitle'>
                    <span className='textOn' onClick={toRegister}>login</span> or <span className='textOn' onClick={toRegister}>sign up</span> to continue
                </div>
            </div> : ""}
        </div>
    </div>
    )
}