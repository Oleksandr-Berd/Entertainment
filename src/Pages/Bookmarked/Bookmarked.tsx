import { useEffect, useState } from "react";
import * as SC from "../../components/AllMovies/AllMoviesStyled";
import * as SCMovie from "../MoviesPage/MoviesPageStyled";

import AllMoviesItem from "components/AllMovies/AllMoviesItem";
import { DataArray } from "interfaces/interfaces";
import Search from "components/Search/Search";
import SearchPage from "Pages/SearchPage/SearchPage";
import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";

interface BookmarkedPageProps {
    data: DataArray[] | string;
    isError: string | null;
}

const BookmarkedPage: React.FC<BookmarkedPageProps> = ({ data, isError }) => {
    const [searchData, setSearchData] = useState<DataArray[] | null>(null);
    const [searchFilter, setSearchFilter] = useState<string>("");
    const { user } = useAuth();
    const { bookmarked } = user;
    const dispatch = useDispatch()
    const placeholder = "Search for bookmarked shows";

    const getSearchData = (filter: string): void => {
        if (filter.length >= 3) {
            const filterData = (data as DataArray[]).filter(({ title }) =>
                title.toLowerCase().includes(filter)
            );
            setSearchData(filterData.length > 0 ? filterData : null);
            setSearchFilter(filter);
        } else {
            setSearchData([]);
        }
    };

    useEffect(() => {
        dispatch(refreshUser())
    }, [dispatch])

    return (
        <SCMovie.PageContainer>
            {typeof data === "string" ? (
                <h1>{data}</h1>
            ) : (
                <>
                    <Search submitSearch={getSearchData} placeholder={placeholder} />
                    {!!searchData && searchData.length > 0 ? (
                        <SearchPage searchMovie={searchData} searchFilter={searchFilter} />
                    ) : searchData === null ? (
                        <SearchPage searchMovie={searchData} searchFilter={searchFilter} />
                    ) : (
                        <>
                            <SCMovie.Title>Bookmarked Movies</SCMovie.Title>
                            <SC.AllMoviesList>
                                {!!data ? (
                                    (data as DataArray[]).map(({ _id, title, thumbnail, year, category, rating }) => (
                                        <AllMoviesItem
                                            key={_id}
                                            title={title}
                                            thumbnail={thumbnail}
                                            year={year}
                                            category={category}
                                            rating={rating}
                                            isBookmarked={bookmarked.includes(title)}
                                        />
                                    ))
                                ) : (
                                    <h1>{isError}</h1>
                                )}
                            </SC.AllMoviesList>
                        </>
                    )}
                </>
            )}
        </SCMovie.PageContainer>
    );
};

export default BookmarkedPage;
