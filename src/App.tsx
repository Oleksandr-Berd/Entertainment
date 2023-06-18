import React, { lazy } from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';
import { GlobalStyles } from './utilities/GlobalStyles';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from 'Pages/HomePage/HomePage';
import MoviesPage from 'Pages/MoviesPage/MoviesPage';
import TVPage from 'Pages/TVPage/TVPage';
import Bookmarked from 'Pages/Bookmarked/Bookmarked';
import LoginPage from 'Pages/LoginPage/LoginPage';
// import RegisterPage from 'Pages/RegisterPage/RegisterPage';

const RegisterPage = lazy(() => import("./Pages/RegisterPage/RegisterPage"))

const App: React.FC = () => {
  
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
        <Route path='login' element={<LoginPage />} />
        <Route path='registration' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
