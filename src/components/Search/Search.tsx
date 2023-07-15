import { useEffect, useState } from "react";
import { BiSearchAlt } from 'react-icons/bi';

import * as SC from "./SearchStyled"

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
   

    return (<SC.CommonContainer>
        <div>
            <BiSearchAlt size={18} />
        </div>
        <SC.SearchInput type="text" onChange={handleChange} placeholder="Search for movies or TV series"/>
    </SC.CommonContainer> );
}
 
export default Search;