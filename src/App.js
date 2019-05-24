import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './ducks/store';
import routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Provider store = {store}>
        {routes}
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;