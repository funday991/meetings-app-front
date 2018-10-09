import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Row extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.line}>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.keyContainer}>
            <Text style={styles.key}>
              {this.props.title.toUpperCase()}
            </Text>
          </View>
          <View style={styles.valueContainer}>
            {this.props.value}
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
  },

  line: {
    width: '100%',
    backgroundColor: '#c7c7c7',
    flex: 1,
  },

  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    flex: 99,
  },

  keyContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  key: {
    fontFamily: 'Elektra Text Pro',
    fontSize: 15,
    fontWeight: '400',
    color: '#333333',
    letterSpacing: 1.2,
  },

  valueContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  value: {
    fontFamily: 'Elektra Text Pro',
    fontSize: 15,
    fontWeight: '400',
    color: '#8f8f95',
    letterSpacing: 1.2,
  },
});
