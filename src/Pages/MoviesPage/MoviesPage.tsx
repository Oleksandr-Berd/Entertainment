import { useEffect, useState } from "react";
import * as SC from "../../components/AllMovies/AllMoviesStyled"
import * as SCMovie from "./MoviesPageStyled"

import AllMoviesItem from "components/AllMovies/AllMoviesItem";
import { DataArray, IDataProps } from "interfaces/interfaces";
import Search from "components/Search/Search";
import SearchPage from "Pages/SearchPage/SearchPage";
import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { Dna } from "react-loader-spinner";


const MoviesPage: React.FC<IDataProps> = ({ data, isError }): JSX.Element => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(refreshUser())
    }, [dispatch])
    const [searchData, setSearchData] = useState<DataArray[] | null>([])
    const [searchFilter, setSearchFilter] = useState<string>("")
    const { user, isRefreshing } = useAuth()
    const { bookmarked } = user;

    const placeholder = "Search for movies"

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
            {isRefreshing ? <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            /> : <>
                <Search submitSearch={getSearchData} placeholder={placeholder} />
                {!!searchData && searchData.length > 0 ? <SearchPage searchMovie={searchData} searchFilter={searchFilter} /> : searchData === null ? <SearchPage searchMovie={searchData} searchFilter={searchFilter} /> :
                    <> <SCMovie.Title>Movies</SCMovie.Title>
                        <SC.AllMoviesList>
                            {!!data ? data.map(({ _id, title, thumbnail, year, category, rating }) => <AllMoviesItem key={_id} title={title} thumbnail={thumbnail} year={year} category={category} rating={rating} isBookmarked={bookmarked.includes(title)}></AllMoviesItem>) : <h1>{isError}</h1>}
                        </SC.AllMoviesList>
                    </>}
            </>}


        </SCMovie.PageContainer >
    );
}

export default MoviesPage;