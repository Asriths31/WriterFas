import { useState } from 'react';
import interestsRide from '../static/interestsRide.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Interests(props){
    const location=useLocation()
    const name=location.state
    const [selectedInterests, setSelected] = useState([])
    const navigate=useNavigate()
    const handleClick = (event)=>{
        if(selectedInterests.includes(event.target.innerText)){
            event.target.classList.remove("chipSelected")
            
            setSelected(
                selectedInterests.filter(a => a !== event.target.innerText)
            )
        } else{
            setSelected([...selectedInterests,event.target.innerText])
            event.target.classList.add("chipSelected");
        }

    }
    const linktopage=()=>{
        navigate("/profile")
    }

    // const handleContinue = () =>{
        
    // }

    return(
        <div className="InterestsHolder">
            <div className="InterestsContent">
                <div className="interestsTitle">
                    <div className="interestsTitleText">
                        <div className="MainTitle">
                            Hello {name}
                        </div>
                        <div className="TitleCap">
                            choose your interests
                        </div>
                    </div>
                    <div className="nextBtn" onClick={linktopage()}>
                        <Link to="/profile">continue</Link>
                    </div>
                </div>
                <div className="InterestsChipsHolder">
                    <div className="FirstRow">
                        <button className="ChipItem " onClick={handleClick}>
                            love
                        </button>
                        <button className="ChipItem" onClick={handleClick}>
                            war
                        </button>
                        <button className="ChipItem" onClick={handleClick}>
                            sad
                        </button>
                        <button className="ChipItem" onClick={handleClick}>
                            humor
                        </button>
                    </div>
                    <div className="SecondRow">
                        <button className="ChipItem" onClick={handleClick}>
                            feel-good
                        </button>
                        <button className="ChipItem" onClick={handleClick}>
                            mystery
                        </button>
                        <button className="ChipItem" onClick={handleClick}>
                            thriller
                        </button>
                    </div>
                    <div className="ThirdRow">
                        <button className="ChipItem" onClick={handleClick}>
                            biography
                        </button>
                        <button className="ChipItem" onClick={handleClick}>
                            poetry
                        </button>
                    </div>
                    <div className="FourthRow">
                        <button className="ChipItem" onClick={handleClick}>
                            science
                        </button>
                        <button className="ChipItem" onClick={handleClick}>
                            history
                        </button>
                        <button className="ChipItem" onClick={handleClick}>
                            horror
                        </button>
                    </div>
                </div>
            </div>
            <div className="EndImage">
                <img src={interestsRide} alt='a girl on a bicycle' width="700px"/>
            </div>
        </div>
    )
}