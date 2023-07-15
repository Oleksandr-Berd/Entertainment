import { useState } from "react";
import { BiSearchAlt } from 'react-icons/bi';

const Search = () => {
const [filter, setFilter] = useState<string>("")

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>):void => {
        const { value } = evt.target
        
        setFilter(value.trim())
    }
    
    console.log(filter);


    return (<div>
        <BiSearchAlt size={18}/>
        <input type="text" onChange={handleChange} placeholder="Search for movies or TV series"/>
    </div> );
}
 
export default Search;