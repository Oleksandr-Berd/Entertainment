import React, { lazy, useEffect, useMemo, useRef, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import { GlobalStyles } from './utilities/GlobalStyles';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { fetchAllMovies, fetchTrending } from 'utilities/services';
import { DataArray } from 'interfaces/interfaces';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import AuthLayout from 'components/AuthLayout/AuthLayout';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('Pages/MoviesPage/MoviesPage'))
const TVPage = lazy(() => import('Pages/TVPage/TVPage'))
const Bookmarked = lazy(() => import('Pages/Bookmarked/Bookmarked'))
const AuthPage = lazy(() => import("./Pages/AuthPage/AuthPage"))
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"))
const UserPage = lazy(() => import('Pages/UserPage/UserPage'))



const App = ():JSX.Element => {
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const fetchedData = useRef<DataArray[]>([])
  const fetchedTrending = useRef<DataArray[]>([])
  const {isLoggedIn, user, isRefreshing, isError} = useAuth()
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const getAllMovies = async () => {
    setIsLoading(true)
    try {
      const result = await fetchAllMovies()
      fetchedData.current = result.data
    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false)
    }

  }

  const data = fetchedData.current
  const trending = fetchedTrending.current

  const getTrending = async () => {
    setIsLoading(true)
    try {
      const result = await fetchTrending()
      fetchedTrending.current = result.data.result
    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getAllMovies()
    getTrending()
  }, [])

  const { bookmarked } = user;

  const getMovies = useMemo(():DataArray[] => {
    return data.filter(({ category }) => category === "Movie")
  }, [data])

  const getTvSeries = useMemo((): DataArray[] => {
    return data.filter(({ category }) => category === "TV Series");
  }, [data])
  
  const getBookmarked = useMemo((): DataArray[] => {
    return data.filter(({ title }) => bookmarked.includes(title));
  },[bookmarked, data])

  return (
    <div className="App">
      <GlobalStyles />
      {isError ? <h1>{String(isError)}</h1>: 
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage data={data} isLoading={isLoading} isError={isError} trending={trending} />}/>
            <Route path='/movies' element={<MoviesPage data={getMovies} isError={isError} />}/>
            <Route path='/tv' element={<TVPage data={getTvSeries } />} />
            <Route path='/bookmarked' element={<Bookmarked isError={isError} data={isLoggedIn ? getBookmarked : !isRefreshing ? "Please Login" : ""} />}  />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path='/auth/login' element={<AuthPage />} />
          <Route path='/auth/registration' element={<AuthPage />} />
            <Route path='/auth/user' element={<UserPage name={user.name} email={user.email} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>}
      
    </div>
  );
}

export default App;
