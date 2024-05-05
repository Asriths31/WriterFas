
import Divider from '../components/Divider';
export default function WriteCard(props){
    return(
        <div className="WriteCardHolder">
            <div className="WriteCardHead">
                <div className="WriteCardHeadContent">
                    <p className='CardUserName'>
                        {props.username}
                    </p>
                    <p className='CardUserAbout'>
                        {props.about}
                    </p>
                </div>
            </div>
            <div className='WriteCardBody'>
                <p className='CardTitle'>
                    {props.title}
                </p>
                <p className='CardPromo'>
                    {props.promo}
                </p>
            </div>
            <Divider/>
        </div>
    )
}