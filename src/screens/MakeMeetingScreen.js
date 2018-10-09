/* eslint-disable global-require */

import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header.js';
import UserPreview from '../components/UserPreview.js';


export default class MakeMeetingScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          textCenter='Set a meeting'
          textRight='Done'
          icon={require('../../assets/images/backArrowIcon.png')}
          navRight={Actions.pop}
          navLeft=''
        />

        <ScrollView>
          <UserPreview
            avatar={require('../../assets/images/userAv1.png')}
            name='Andrew Garfield'
            contacts={1}
            messages={''}
            calls={5}
          />
          <UserPreview
            avatar={require('../../assets/images/userAv2.png')}
            name='Larissa Turgeon'
            contacts={1}
            messages={''}
            calls={1}
          />
          <UserPreview
            avatar={require('../../assets/images/userAv3.png')}
            name='Twanda Keaton'
            contacts={1}
            messages={''}
            calls={3}
          />
          <UserPreview
            avatar={require('../../assets/images/userAv4.png')}
            name='Polina Desheulina'
            contacts={''}
            messages={''}
            calls={''}
          />
          <UserPreview
            avatar={require('../../assets/images/userAv5.png')}
            name='Olga Tsigankova'
            contacts={''}
            messages={''}
            calls={''}
          />
          <UserPreview
            avatar={require('../../assets/images/userAv6.png')}
            name='Vladimir Kalaev'
            contacts={''}
            messages={''}
            calls={''}
          />
          <UserPreview
            avatar={require('../../assets/images/userAv7.png')}
            name='Vladimir Kalaev'
            contacts={''}
            messages={''}
            calls={''}
          />
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
