import * as SC from "../../components/AllMovies/AllMoviesStyled"
import * as SCMovie from "./MoviesPageStyled"

import AllMoviesItem from "components/AllMovies/AllMoviesItem";
import { IDataProps } from "interfaces/interfaces";


const MoviesPage: React.FC<IDataProps> = ({ data, isError }): JSX.Element => {

    
    return (
        <SCMovie.PageContainer>
        <SC.AllMoviesList>
        {!!data ? data.filter(({category}: any)=> category === "Movie").map(({ _id, title, thumbnail, year, category, rating, isBookmarked }: any) => <AllMoviesItem key={_id} title={title} thumbnail={thumbnail} year={year} category={category} rating={rating} isBookmarked={isBookmarked}></AllMoviesItem>) : <h1>{isError}</h1>}
            </SC.AllMoviesList>
        </SCMovie.PageContainer>);
}
 
export default MoviesPage;