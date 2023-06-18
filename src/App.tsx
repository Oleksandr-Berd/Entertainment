import React from 'react';
import './App.css';
import { GlobalStyles } from './utilities/GlobalStyles';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Header from 'components/Header/Header';

const App:React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <SharedLayout>
        <Header/>
      </SharedLayout>
    </div>
  );
}

export default App;
