import React, { lazy, useEffect, useState } from 'react';

import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from './utilities/GlobalStyles';
import SharedLayout from './components/SharedLayout/SharedLayout';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import { fetchAllMovies, fetchTrending } from 'utilities/services';
import { DataArray } from 'interfaces/interfaces';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import UserPage from 'Pages/UserPage/UserPage';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('Pages/MoviesPage/MoviesPage'))
const TVPage = lazy(() => import('Pages/TVPage/TVPage'))
const Bookmarked = lazy(() => import('Pages/Bookmarked/Bookmarked'))
const AuthPage = lazy(() => import("./Pages/AuthPage/AuthPage"))
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"))



const App = ():JSX.Element => {
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [isError, setIsError] = useState<null | string>(null)
  const [data, setData] = useState<DataArray[]>([])
  const [trending, setTrending] = useState<DataArray[]>([])
  const {isLoggedIn, user, isRefreshing} = useAuth()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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

  const { bookmarked } = user;

  let bookmarkedMovies: DataArray[] = data.filter(({ title }) => bookmarked.includes(title))
  let movies: DataArray[] = data.filter(({ category }) => category === "Movie")
  let tvSeries: DataArray[] = data.filter(({ category }) => category === "TV Series");

 

  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage data={data} isLoading={isLoading} isError={isError} trending={trending} />}/>
          <Route path='/movies' element={<MoviesPage data={movies} isError={isError} />}/>
          <Route path='/tv' element={<TVPage data={tvSeries } />} />
          <Route path='/bookmarked' element={<Bookmarked data={isLoggedIn ? bookmarkedMovies : !isRefreshing ? "Please Login" : null }/>} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path='/auth/login' element={<AuthPage />} />
          <Route path='/auth/registration' element={<AuthPage />} />
          <Route path='/auth/user' element={<UserPage name={user.name} email={user.email} /> } />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
