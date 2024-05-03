import Divider from '../components/Divider';
import WriteCard from '../components/WriteCard';

export default function Profile(){
    return(
        <div className="ProfileHolder">
            <div className="ProfileCard">
                <div className="ProfileHolderImage"></div>
                <div className="ProfileHolderContent">
                    <div className="ProfileHolderTitle">
                        Tom Kirkman
                    </div>
                    <div className="ProfileHolderCap">
                        "the silence screamed louder than any monster"
                    </div>
                </div>
                <div className="TextButton">
                    Edit
                </div>
            </div>
            <div className='Spacer'/>
            <div className="ProfileWritings">
                <div className="ProfileWritingsTitle">
                    writings
                </div>
                <div className="TextButton">
                    start writing
                </div>
            </div>
            <Divider/>
            <WriteCard username="Brenda" about="writes: Horror, Comedy, Fiction" title="Echoes in the Cabin" promo="The radio cackled, a burst of static interrupting the mournful howl of the wind. Rain lashed against the cabin windows, blurring the skeletal shapes of the dead trees outside. Sarah huddled deeper into her worn armchair, the flickering firelight casting dancing shadows on the log walls.
She wasn't alone. John, her husband, lay sprawled on the threadbare rug, his chest a still cage of ribs beneath a blood-soaked shirt. His eyes, forever vacant, stared sightlessly into the dying embers. It had been a bear attack, the park ranger had said, a brutal, savage mauling. But Sarah knew better."/>
        </div>
    )
}