import { useEffect, useState } from 'react';
import { fetchAllMovies } from 'utilities/services';
import AllMovies from '../../components/AllMovies/AllMovies';
import { Dna } from 'react-loader-spinner';

import * as SC from "./HomePageStyled"

export interface DataArray {
    _id: string,
    title: string,
    thumbnail: { regular: { small: string } }
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
    useEffect(() => {
        getAllMovies()
    }, [])
    
    return (
        <SC.CommonContainer>
            <SC.Title>Trending</SC.Title>
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