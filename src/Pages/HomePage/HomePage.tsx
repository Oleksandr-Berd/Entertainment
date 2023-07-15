import { useEffect, useState } from 'react';
import { fetchAllMovies, fetchTrending } from 'utilities/services';
import AllMovies from '../../components/AllMovies/AllMovies';
import { Dna } from 'react-loader-spinner';

import * as SC from "./HomePageStyled"
import Trending from 'components/Trending/Trending';
import Search from 'components/Search/Search';

export interface DataArray {
    _id: string,
    title: string,
    thumbnail: { regular: { small: string }, trending?:{small:string, large:string} }
,
    year: number,
    category: string,
    rating: string,
    isBookmarked: boolean,
    isTrending: boolean,
    image: string,
}

const HomePage = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [isError, setIsError] = useState<null | string>(null)
    const [data, setData] = useState<DataArray[]>([])
    const [trending, setTrending] = useState<DataArray[]>([])


    const getAllMovies = async () => {
        setIsLoading(true)
        try {
            const result = await fetchAllMovies()
            setData(result.data)
        } catch (error) {
            setIsError(error as string)
        } finally {
            setIsLoading(false)
        }
       
    }

    const getTrending = async () => {
        setIsLoading(true)
        try {
            const result = await fetchTrending()
            setTrending(result.data.result)
        } catch (error) {
            setIsError(error as string)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getAllMovies()
        getTrending()
    }, [])
    
    
    return (
        <SC.CommonContainer>
            <Search/>
            <SC.Title>Trending</SC.Title>
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
            </>}
           
            
        </SC.CommonContainer>
        );
}
 
export default HomePage;