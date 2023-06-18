import React, { lazy } from 'react';

import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from './utilities/GlobalStyles';
import SharedLayout from './components/SharedLayout/SharedLayout';
import AuthLayout from 'components/AuthLayout/AuthLayout';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('Pages/MoviesPage/MoviesPage'))
const TVPage = lazy(() => import('Pages/TVPage/TVPage'))
const Bookmarked = lazy(() => import('Pages/Bookmarked/Bookmarked'))
const RegisterPage = lazy(() => import("./Pages/RegisterPage/Registerpage"))
const LoginPage = lazy(() => import('Pages/LoginPage/LoginPage'))

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
        <Route path="auth" element={<AuthLayout />}>
          <Route path='/auth/login' element={<LoginPage />} />
          <Route path='/auth/registration' element={<RegisterPage />} />
        </Route>
          
        
       
      </Routes>
    </div>
  );
}

export default App;
