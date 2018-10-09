import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Row from './Row.js';


export default class List extends Component {
  render() {
    let keyNum = 0;

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.keyContainer}>
            <Text style={styles.title}>
              {this.props.title.toUpperCase()}:
            </Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>
              {this.props.titleValue}
            </Text>
          </View>
        </View>

        {this.props.rows.map(row =>
          <Row
            key={keyNum++}
            title={row[0]}
            value={row[1]}
          />
        )}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '90%',
  },

  titleContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },

  keyContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Elektra Text Pro',
    fontSize: 15,
    fontWeight: '700',
    color: '#333333',
    letterSpacing: 1.2,
  },

  valueContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  value: {
    color: '#8f8f95',
    letterSpacing: 0.9,
    fontFamily: 'Elektra Text Pro',
    fontSize: 13,
    fontWeight: '400',
  },
});
