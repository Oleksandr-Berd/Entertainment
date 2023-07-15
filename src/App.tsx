import React, { lazy } from 'react';

import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from './utilities/GlobalStyles';
import SharedLayout from './components/SharedLayout/SharedLayout';
import AuthLayout from 'components/AuthLayout/AuthLayout';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('Pages/MoviesPage/MoviesPage'))
const TVPage = lazy(() => import('Pages/TVPage/TVPage'))
const Bookmarked = lazy(() => import('Pages/Bookmarked/Bookmarked'))
const AuthPage = lazy(() => import("./Pages/AuthPage/AuthPage"))
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"))



const App = ():JSX.Element => {





  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage/>}/>
          <Route path='/movies' element={<MoviesPage />}/>
          <Route path='/tv' element={<TVPage />} />
          <Route path='/bookmarked' element={<Bookmarked />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path='/auth/login' element={<AuthPage />} />
          <Route path='/auth/registration' element={<AuthPage />} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
