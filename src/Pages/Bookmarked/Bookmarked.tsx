
import { useState } from "react";
import * as SC from "../../components/AllMovies/AllMoviesStyled"
import * as SCMovie from "../MoviesPage/MoviesPageStyled"

import AllMoviesItem from "components/AllMovies/AllMoviesItem";
import { DataArray } from "interfaces/interfaces";
import Search from "components/Search/Search";
import SearchPage from "Pages/SearchPage/SearchPage";
import { useAuth } from "hooks";


const BookmarkedPage: React.FC<any> = ({ data, isError }): JSX.Element => {
    const [searchData, setSearchData] = useState<DataArray[] | null>([])
    const [searchFilter, setSearchFilter] = useState<string>("")
    const { user } = useAuth()
    const { bookmarked } = user;
    const placeholder = "Search for bookmarked shows"

    const getSearchData = (filter: string): void => {

        if (filter.length >= 3) {
            const filterData = data.filter(({ title }:any) => {


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
            {typeof data === "string" ? <h1>{data}</h1> : <>
                <Search submitSearch={getSearchData} placeholder={placeholder} />
                {!!searchData && searchData.length > 0 ? <SearchPage searchMovie={searchData} searchFilter={searchFilter} /> : searchData === null ? <SearchPage searchMovie={searchData} searchFilter={searchFilter} /> :
                    <> <SCMovie.Title>Bookmarked Movies</SCMovie.Title>
                        <SC.AllMoviesList>
                            {!!data ? data.map(({ _id, title, thumbnail, year, category, rating, isBookmarked }: any) => <AllMoviesItem key={_id} title={title} thumbnail={thumbnail} year={year} category={category} rating={rating} isBookmarked={bookmarked.includes(title)}></AllMoviesItem>) : <h1>{isError}</h1>}
                        </SC.AllMoviesList>
                    </>}
            </>}
            

        </SCMovie.PageContainer >
    );
}

export default BookmarkedPage;
