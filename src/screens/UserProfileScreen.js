import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Profile from '../components/Profile.js';


export default class UserProfileScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Profile
          name='Andrew Garfield'
          city='Chelyabinsk'
          age={32}
          workPlace='businessman'
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
});
