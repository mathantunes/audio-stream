import React, { useReducer } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import { initialState, reducer, StateProvider } from './reducer/reducer';

function App() {
  return (
    <StateProvider reducer={useReducer(reducer, initialState)}>
      <div className="App">
        <body className='App-body'>
          <SearchComponent></SearchComponent>
        </body>
      </div>
    </StateProvider>
  );
}

export default App;
