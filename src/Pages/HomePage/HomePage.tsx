import { useState } from 'react';
import AllMovies from '../../components/AllMovies/AllMovies';
import { Dna } from 'react-loader-spinner';

import * as SC from "./HomePageStyled"
import Trending from 'components/Trending/Trending';
import Search from 'components/Search/Search';
import SearchPage from 'Pages/SearchPage/SearchPage';
import { DataArray } from 'interfaces/interfaces';


interface IProps {
    data: DataArray[],
    isLoading: Boolean,
    trending: DataArray[],
    isError: null | string
}

const HomePage: React.FC<IProps> = ({ data, isLoading, trending, isError }): JSX.Element => {
 
    const [searchData, setSearchData] = useState<DataArray[] | null>([])
    const [searchFilter, setSearchFilter] = useState("")

    const placeholder = "Search for movies or TV series"


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
        <SC.CommonContainer>
            <Search submitSearch={getSearchData} placeholder={placeholder } />
            {!!searchData && searchData.length > 0 ? <SearchPage searchMovie={searchData} searchFilter={searchFilter} /> : searchData === null ? <SearchPage searchMovie={searchData} searchFilter={searchFilter} /> : <><SC.Title>Trending</SC.Title>
                {isLoading ? <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                /> : <>
                    <Trending movies={trending} error={isError} />
                </>}
                <SC.Title>Recommended for you</SC.Title>
                {isLoading ? <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                /> : <>
                    <AllMovies movies={data} error={isError} />
                </>}</>}



        </SC.CommonContainer>
    );
}

export default HomePage;