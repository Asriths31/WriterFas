import Divider from "./Divider"

export default function SearchComponent(props){
    return(
        <div>
            <div className="SearchComponentHolder">
                <div className="SearchComponentContent">
                    <p className="SearchComponentTitle">{props.title}</p>
                    <p className="SearchComponentCap">written by: {props.username}</p>
                </div>
            </div>
            <Divider/>
        </div>
    )
}