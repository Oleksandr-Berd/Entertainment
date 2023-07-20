import { useEffect, useState } from "react";
import { BiSearchAlt } from 'react-icons/bi';

import * as SC from "./SearchStyled"
import { useMediaQuery } from 'usehooks-ts';

interface ISearchProps {
    submitSearch: (filter: string) => void
    placeholder: string,
}

const Search: React.FC<ISearchProps> = ({ submitSearch, placeholder } ) => {
    
    const [filter, setFilter] = useState<string >("")

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>):void => {
        const { value } = evt.target
        
       setFilter(value.trim().toLowerCase())
      
    }
    
const isTablet = useMediaQuery("(min-width:768px")

    useEffect(() => {

        if (filter.length >= 3) { submitSearch(filter) } else { submitSearch("") }
       
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [filter])
   

    return (<SC.CommonContainer>
        <div>
            <BiSearchAlt size={isTablet ? 24 : 18} />
        </div>
        <SC.SearchInput type="text" onChange={handleChange} placeholder={placeholder } />
    </SC.CommonContainer> );
}
 
export default Search;