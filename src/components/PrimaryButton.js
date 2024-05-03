export default function PrimaryButton(props){
    return(
        <div className="PrimaryBtnHolder">
            <button className="primaryBtn" onClick={props.onClick}>{props.text}</button>
        </div>
    )
}