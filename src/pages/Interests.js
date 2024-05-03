import { useState } from 'react';
import interestsRide from '../static/interestsRide.svg';

export default function Interests(props){
    const [selectedInterests, setSelected] = useState([])
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

    const handleContinue = () =>{
        
    }

    return(
        <div className="InterestsHolder">
            <div className="InterestsContent">
                <div className="interestsTitle">
                    <div className="interestsTitleText">
                        <div className="MainTitle">
                            Hello {props.name}
                        </div>
                        <div className="TitleCap">
                            choose your interests
                        </div>
                    </div>
                    <div className="nextBtn">
                        continue
                    </div>
                </div>
                <div className="InterestsChipsHolder">
                    <div className="FirstRow">
                        <div className="ChipItem chipSelected" onClick={handleClick}>
                            love
                        </div>
                        <div className="ChipItem" onClick={handleClick}>
                            war
                        </div>
                        <div className="ChipItem" onClick={handleClick}>
                            sad
                        </div>
                        <div className="ChipItem" onClick={handleClick}>
                            humor
                        </div>
                    </div>
                    <div className="SecondRow">
                        <div className="ChipItem" onClick={handleClick}>
                            feel-good
                        </div>
                        <div className="ChipItem" onClick={handleClick}>
                            mystery
                        </div>
                        <div className="ChipItem" onClick={handleClick}>
                            thriller
                        </div>
                    </div>
                    <div className="ThirdRow">
                        <div className="ChipItem" onClick={handleClick}>
                            biography
                        </div>
                        <div className="ChipItem" onClick={handleClick}>
                            poetry
                        </div>
                    </div>
                    <div className="FourthRow">
                        <div className="ChipItem" onClick={handleClick}>
                            science
                        </div>
                        <div className="ChipItem" onClick={handleClick}>
                            history
                        </div>
                        <div className="ChipItem" onClick={handleClick}>
                            horror
                        </div>
                    </div>
                </div>
            </div>
            <div className="EndImage">
                <img src={interestsRide} alt='a girl on a bicycle' width="800px"/>
            </div>
        </div>
    )
}