import { DataArray } from "Pages/HomePage/HomePage";
import AllMoviesItem from "components/AllMovies/AllMoviesItem";

interface ISearchPageProps{
    searchMovie: DataArray[] | null;
    searchFilter: string | null;
}

const SearchPage = ({ searchMovie, searchFilter }: ISearchPageProps): JSX.Element => {
    


    return (<div>
        <ul>
            {!!searchMovie ? <h2>Found {searchMovie.length} result for "{searchFilter}"</h2> : null} 
            {
            !!searchMovie ? 
                searchMovie.map(({ _id, title, thumbnail, year, category, rating, isBookmarked }) => <AllMoviesItem key={_id} title={title} thumbnail={thumbnail} year={year} category={category} rating={rating} isBookmarked={isBookmarked}></AllMoviesItem>)
                    : <h2>No match with your search "{searchFilter}"!</h2>
    }</ul></div>);
}
 
export default SearchPage;