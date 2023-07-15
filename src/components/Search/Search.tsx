import { useEffect, useState } from "react";
import { BiSearchAlt } from 'react-icons/bi';

interface ISearchProps {
   submitSearch: (filter:string) => void
}

const Search = ({ submitSearch }: ISearchProps): JSX.Element => {
    
    const [filter, setFilter] = useState<string >("")

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>):void => {
        const { value } = evt.target
        
       setFilter(value.trim().toLowerCase())
      
    }
    

    
    useEffect(() => {

        if (filter.length >= 3) { submitSearch(filter) } else { submitSearch("") }
       
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [filter])
   

    return (<div>
        <div>
            <BiSearchAlt size={18} />
        </div>
        <input type="text" onChange={handleChange} placeholder="Search for movies or TV series"/>
    </div> );
}
 
export default Search;