import { useState } from "react";
import * as SC from "../../components/AllMovies/AllMoviesStyled"
import * as SCMovie from "./MoviesPageStyled"

import AllMoviesItem from "components/AllMovies/AllMoviesItem";
import { DataArray, IDataProps } from "interfaces/interfaces";
import Search from "components/Search/Search";
import SearchPage from "Pages/SearchPage/SearchPage";


const MoviesPage: React.FC<IDataProps> = ({ data, isError }): JSX.Element => {

    const [searchData, setSearchData] = useState<DataArray[] | null>([])
    const [searchFilter, setSearchFilter] = useState<string>("")


const placeholer = "Search for movies"

    const getSearchData = (filter: string): void => {

        if (filter.length >= 3) {
            const filterData = data.filter(({ title }) => {


                return title.toLowerCase().includes(filter)
            }
            )
            setSearchData(filterData.length > 0 ? filterData : null)

            setSearchFilter(filter)
        } else {
            setSearchData([])
        }


    }
    
    return (
        <SCMovie.PageContainer>
            <Search submitSearch={getSearchData} placeholder={placeholer} />
            {!!searchData && searchData.length > 0 ? <SearchPage searchMovie={searchData} searchFilter={searchFilter} /> : searchData === null ? <SearchPage searchMovie={searchData} searchFilter={searchFilter} /> :
                <> <SCMovie.Title>Movies</SCMovie.Title>
                <SC.AllMoviesList>
                    {!!data ? data.map(({ _id, title, thumbnail, year, category, rating, isBookmarked }: any) => <AllMoviesItem key={_id} title={title} thumbnail={thumbnail} year={year} category={category} rating={rating} isBookmarked={isBookmarked}></AllMoviesItem>) : <h1>{isError}</h1>}
                    </SC.AllMoviesList>
                </>}

 </SCMovie.PageContainer >
           );
}
 
export default MoviesPage;