import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';
import { Provider } from 'react-redux';
import axios from 'axios';
import RouterComponent from './src/routes/Router';
import store from './src/store/store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  componentWillMount() {
    axios.defaults.baseURL = 'http://192.168.1.7:19003/api';
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
