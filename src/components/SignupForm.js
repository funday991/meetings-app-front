import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


export default class SignupForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.form}
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry={this.props.secure}
          onChangeText={this.props.callback}
        />

        <View style={styles.line} />

        <Text style={styles.placeholder}>
          {this.props.placeholder}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 51,
  },

  form: {
    width: '50%',
    height: 50,
    marginLeft: 'auto',
    textAlign: 'right',
  },

  placeholder: {
    position: 'absolute',
    top: 18,
    fontFamily: 'Elektra Text Pro',
    fontSize: 15,
    fontWeight: '400',
  },

  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#4e606e',
    opacity: 0.4,
  },
});
