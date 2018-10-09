import React, { Component } from 'react';
import { Image, View, StyleSheet, TextInput } from 'react-native';


export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/searchIcon.png')}
          style={styles.searchIcon}
        />
        <TextInput style={styles.searchBar} placeholder='Search'/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '5%',
    width: '90%',
    height: '7%',
    borderRadius: 50,
    borderColor: '#cacecf',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  searchBar: {
    width: '70%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '4%',
  },

  searchIcon: {
    position: 'absolute',
    top: '45%',
    left: '6%',
    width: '5%',
    height: '52%',
  },
});
