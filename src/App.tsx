import React, { lazy, useState, useEffect } from 'react';

import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from './utilities/GlobalStyles';
import SharedLayout from './components/SharedLayout/SharedLayout';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import { fetchAllMovies } from 'utilities/services';
import { useConsole } from 'hooks/useConsole';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('Pages/MoviesPage/MoviesPage'))
const TVPage = lazy(() => import('Pages/TVPage/TVPage'))
const Bookmarked = lazy(() => import('Pages/Bookmarked/Bookmarked'))
const AuthPage = lazy(() => import("./Pages/AuthPage/AuthPage"))
// const LoginPage = lazy(() => import('Pages/LoginPage/LoginPage'))

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  
  const getAllMovies = async () => {
    setIsLoading(true)
    const result = await fetchAllMovies()
    
    setData(result)
}
useEffect(() => {
  getAllMovies()
  setIsLoading(false)
}, [])


  useConsole(data)
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}/>
          <Route path='/movies' element={<MoviesPage />}/>
          <Route path='/tv' element={<TVPage />} />
          <Route path='/bookmarked' element={<Bookmarked />} />
          
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path='/auth/login' element={<AuthPage />} />
          <Route path='/auth/registration' element={<AuthPage />} />
        </Route>       
      </Routes>
    </div>
  );
}

export default App;
