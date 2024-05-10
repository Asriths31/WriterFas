import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"
import { Link } from "react-router-dom"
import '../App.css'

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

    // const handleOne = ()=>{
    //     navigate("/")
    // }

    // const handleTwo = ()=>{
    //     navigate("/search")
    // }

    // const handleThree = ()=>{
    //     navigate("/profile")
    // }

    const toRegister = ()=>{
        navigate("/register",{
         state:0
        })
    }
    const toRegister1 = ()=>{
        navigate("/register",{
            state:1
        })
    }

    return(
        <div className='HomePageGrid'>
        <div className="NavBarHolder">
            <div className="OneBar">
                <div className="NavItem" ref={oneRef}>
                    <i class="fa-solid fa-house" ></i>
                    <Link to="/" className="link"><button><p>home</p></button></Link> 
                </div>
                <div className='NavItem' ref={twoRef}>
                    <i class="fa-solid fa-magnifying-glass" ></i>
                   <Link to="/search" className="link"><button><p>search</p></button></Link> 
                </div>
                <div className='NavItem' ref={threeRef}>
                    <i class="fa-regular fa-user" ></i>
                <Link to="/profile" className="link"><button><p>profile</p></button></Link> 
                </div>
            </div>
            {name === undefined ? <div className='loginBar'>
                <div className='BarTitle'>
                    <span className='textOn' onClick={toRegister}>login</span> or <span className='textOn' onClick={toRegister1}>sign up</span> to continue
                </div>
            </div> : ""}
        </div>
    </div>
    )
}