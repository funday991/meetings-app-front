/* eslint-disable global-require */


import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header.js';
import Search from '../components/Search.js';
import MeetingPreview from '../components/MeetingPreview.js';
import Footer from '../components/Footer.js';
import store from '../store/store';


export default class MeetingsListScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    let number = 110;

    return (
      <View style={styles.container}>
        <Header
          textCenter='Meetings'
          textRight='Set'
          icon={require('../../assets/images/burerIcon.png')}
          navRight={Actions.makeMeeting}
          navLeft=''
        />

        <Search />

        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('../../assets/images/roundAddButton.png')}
            style={styles.roundAddButton}
          />
          <Text style={styles.searchSettingsText}>
            Extended searching options
          </Text>
        </TouchableOpacity>

        <View style={styles.line} />

        <View style={styles.scrollContainer}>
          <ScrollView>
            <MeetingPreview
              number={number++}
              avatar={require('../../assets/images/avatar1.png')}
              initials='Andrew Garfield'
              city='Chelyabinsk'
              age={23}
              workPlace='herself'
              purpose=''
              time='12:00'
              date='20.10.2015'
              color={number % 2 ? '#ffffff' : '#eeeeee'}
            />
            <MeetingPreview
              number={number++}
              avatar={require('../../assets/images/avatar2.png')}
              initials='Andrew Garfield'
              city='Chelyabinsk'
              age={23}
              workPlace='MLM'
              purpose='To get money'
              time='12:00'
              date='20.10.2015'
              color={number % 2 ? '#ffffff' : '#eeeeee'}
            />
            <MeetingPreview
              number={number++}
              avatar={require('../../assets/images/avatar3.png')}
              initials='Andrew Garfield'
              city='Chelyabinsk'
              age={23}
              workPlace='hire'
              purpose=''
              time='12:00'
              date='20.10.2015'
              color={number % 2 ? '#ffffff' : '#eeeeee'}
            />
          </ScrollView>
        </View>

        <View style={styles.line} />

        <Footer />
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

  searchSettingsText: {
    color: '#00b2f7',
    fontFamily: 'Elektra Text Pro',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1.2,
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },

  roundAddButton: {
    position: 'absolute',
    width: '6%',
    height: '44%',
    top: '27%',
    left: '13%',
  },

  line: {
    borderColor: '#4e606e',
    borderStyle: 'solid',
    borderWidth: 0.5,
    opacity: 0.1,
  },

  scrollContainer: {
    height: '50%',
  },
});
