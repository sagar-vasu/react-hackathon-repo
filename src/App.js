import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import Store from './Store';
import BasicRouter from './Config/Router/Router'

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <BasicRouter />
      </Provider>
    )
  }
}

export default App;
