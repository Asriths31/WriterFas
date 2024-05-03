import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import { useRef, useState } from 'react';

export default function TabView(){
    const [selectedTab,setSelected] = useState(0)
    const firstSwitchRef = useRef(0)
    const secondSwitchRef = useRef(0)

    const handleTabOne = () =>{
        setSelected(0)
        firstSwitchRef.current.classList.add("selectedTab")
        secondSwitchRef.current.classList.remove("selectedTab")
    }
    
    const handleTabTwo = () =>{
        setSelected(1)
        firstSwitchRef.current.classList.remove("selectedTab")
        secondSwitchRef.current.classList.add("selectedTab")
    }

    return(
        <div className='TabViewHolder'>
            <div className="TabView">
                <div className="tabSwitch">
                    <div className='firstSwitch selectedTab switch' ref={firstSwitchRef} onClick={handleTabOne}>
                        Login
                    </div>
                    <div className="border">
                    </div>
                    <div className='secondSwitch switch' onClick={handleTabTwo} ref={secondSwitchRef}>
                        Sign-up
                    </div>
                </div>
            </div>
            <div>
                {selectedTab === 1 ? <SignUp/> : <Login/>}
            </div>
        </div>
    )
}