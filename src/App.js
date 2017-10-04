import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCD5YKy3uR0iRFWK3yonRWj5mDBIuRfD5U',
      authDomain: 'manager-96636.firebaseapp.com',
      databaseURL: 'https://manager-96636.firebaseio.com',
      projectId: 'manager-96636',
      storageBucket: '',
      messagingSenderId: '1043354391546'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
