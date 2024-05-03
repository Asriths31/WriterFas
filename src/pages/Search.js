import SearchComponent from "../components/SearchComponent"
import Divider from '../components/Divider';

export default function Search(){
    return(
        <div className="SearchPageHolder">
            <div className="SearchBox">
                <input className="searchBox" type="text" placeholder="search among stories, poems and many more"/>
                <i class="fa-solid fa-magnifying-glass searchIcon"></i>
            </div>
            <SearchComponent title="Echoes in the Cabin" username="Brenda"/>
            <Divider/>
        </div>
    )
}