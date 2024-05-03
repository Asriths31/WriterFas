import { useState } from 'react';


import Search from './Search';
import WriteGrid from './WriteGrid';
import Profile from './Profile';

export default function Home(){
    const [navSelected, setSelected] = useState(0)
    let element;
    const handleClick = (e)=>{
        let classList = e.target.classList;
        console.log(classList)
        if(classList.contains("one")){
            setSelected(0)
        }else if(classList.contains("two")){
            setSelected(1)
        }else if(classList.contains("three")){
            setSelected(2)
        }
    }

    if(navSelected === 1){
        element = <Search/>
    } else if(navSelected === 2){
        element = <Profile/>
    } else{
        element = <WriteGrid/>
    }

    return(
        <div className="HomePageHolder">
            <div className='HomePageGrid'>
                <div className="NavBarHolder">
                    <div className="NavItem NavItemSelected one" onClick={handleClick}>
                        <i class="fa-solid fa-house" style={{marginRight:"30px"}}></i>
                        home
                    </div>
                    <div className='NavItem two' onClick={handleClick}>
                        <i class="fa-solid fa-magnifying-glass" style={{marginRight:"30px"}}></i>
                        search
                    </div>
                    <div className='NavItem three' onClick={handleClick}>
                        <i class="fa-regular fa-user" style={{marginRight:"30px"}}></i>
                        profile
                    </div>
                </div>
            </div>
            <div>
                {element}
            </div>
        </div>
    )
}