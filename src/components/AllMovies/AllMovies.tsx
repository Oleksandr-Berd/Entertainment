import * as SC from "./AllMoviesStyled"
import AllMoviesItem from "./AllMoviesItem";
import { DataArray } from "interfaces/interfaces";
import { useAuth } from "hooks";

interface MoviesProps {
    movies?: DataArray[];
    error: string | null;
}

const AllMovies: React.FC<MoviesProps> = ({ movies, error }) => {

    const { user } = useAuth()
    const { bookmarked } = user;

    return (
        <div>

            <SC.AllMoviesList>
                {!!movies ? movies.map(({ _id, title, thumbnail, year, category, rating, isBookmarked }) => <AllMoviesItem key={_id} title={title} thumbnail={thumbnail} year={year} category={category} rating={rating} isBookmarked={bookmarked.includes(title)}></AllMoviesItem>) : <h1>{error}</h1>}
            </SC.AllMoviesList>
        </div>);
}

export default AllMovies;