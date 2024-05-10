import { useNavigate } from "react-router-dom"


export default function EndCreds(){
    const navigate = useNavigate()
    const toAbout = ()=>{
        navigate("/about")
    }
    const toPrivacy = ()=>{
        navigate("/privacy")
    }
    const toTerms = ()=>{
        navigate("/terms")
    }
    return(
        <div className="EndCredsList">
            <div className="one listItem" onClick={toTerms}>
                terms & conditions
            </div>
            <div className="border"></div>
            <div className="two listItem" onClick={toPrivacy}>
                privacy
            </div>
            <div className="border"></div>
            <div className="three listItem" onClick={toAbout}>
                about us
            </div>
        </div>
    )
}