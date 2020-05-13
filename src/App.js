import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from './components/List';
import Details from './components/Details';
import ActiveItemProvider from './components/ActiveItemProvider';

function App() {

  return (
         <div className='App'>
           <ActiveItemProvider>
              <div className='app__body'>
                <List />
                <Details />
              </div>
          </ActiveItemProvider>
         </div>
  );
}

export default App;
