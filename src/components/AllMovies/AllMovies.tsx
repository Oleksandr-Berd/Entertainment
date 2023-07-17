import * as SC from "./AllMoviesStyled"
import AllMoviesItem from "./AllMoviesItem";
import { DataArray } from "interfaces/interfaces";

interface MoviesProps {
    movies?: DataArray[];
    error: string | null;
}

const AllMovies: React.FC<MoviesProps> = ({ movies, error }) => {

    return (
        <div>

            <SC.AllMoviesList>
                {!!movies ? movies.map(({ _id, title, thumbnail, year, category, rating, isBookmarked }) => <AllMoviesItem key={_id} title={title} thumbnail={thumbnail} year={year} category={category} rating={rating} isBookmarked={isBookmarked}></AllMoviesItem>) : <h1>{error}</h1>}
            </SC.AllMoviesList>
        </div>);
}

export default AllMovies;