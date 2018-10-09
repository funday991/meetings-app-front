import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


export default class Footer extends Component {
  handleRequest() {
    axios
      .post('/rest-auth/logout/')
      .then(response => {
        Actions.auth();
      })
      .catch(error => alert(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer1}>
          <TouchableOpacity
            onPress={this.handleRequest.bind(this)}
          >
            <Text style={styles.text}>
              Log out
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer2}>
          <TouchableOpacity>
            <Text style={styles.text}>
              Export
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: '8%',
    marginTop: 'auto',
    flexDirection: 'row',
  },

  textContainer1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.1%',
    backgroundColor: '#00b2f7',
  },

  textContainer2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '0.1%',
    backgroundColor: '#00b2f7',
  },

  text: {
    fontSize: 15,
    color: '#ffffff',
    fontFamily: 'Elektra Text Pro',
    fontWeight: '400',
    letterSpacing: 1.2,
  },
});
