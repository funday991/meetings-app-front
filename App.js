import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import RouterComponent from './src/routes/Router';
import store from './src/store/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './src/setAuthToken';
import { setCurrentUser, logoutUser } from './src/actions/logout';

if(AsyncStorage.jwtToken) {
  setAuthToken(AsyncStorage.jwtToken);
  const decoded = jwt_decode(AsyncStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  componentWillMount() {
    axios.defaults.baseURL = 'http://localhost:5000';
    axios.defaults.timeout = 60000;
  }

  loadAsync = async () => {
    await Font.loadAsync({
      'Elektra Text Pro': require('./assets/fonts/Elektra_Text_Pro.otf'),
      'Otscookie': require('./assets/fonts/Otscookie.otf'),
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}
