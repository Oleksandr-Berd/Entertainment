import AllMoviesItem from "components/AllMovies/AllMoviesItem";

import * as SC from "./SearchPageStyled"
import { DataArray } from "interfaces/interfaces";

interface ISearchPageProps{
    searchMovie: DataArray[] | null;
    searchFilter: string | null;
}

const SearchPage = ({ searchMovie, searchFilter }: ISearchPageProps): JSX.Element => {
    


    return (<div>
        {!!searchMovie ? <h2>Found {searchMovie.length} result for "{searchFilter}"</h2> : <h2>No match with your search "{searchFilter}"!</h2>} 
        <SC.SearchList>
            
            {
            !!searchMovie ? 
                searchMovie.map(({ _id, title, thumbnail, year, category, rating, isBookmarked }) => <AllMoviesItem key={_id} title={title} thumbnail={thumbnail} year={year} category={category} rating={rating} isBookmarked={isBookmarked}></AllMoviesItem>)
                    : null
    }</SC.SearchList></div>);
}
 
export default SearchPage;