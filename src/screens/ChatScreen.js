import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import SocketIOClient from 'socket.io-client';


export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: '',
    };

    this.socket = SocketIOClient('http://192.168.1.7:3000');

    this.socket.on('message', msg => {
      var oldMessages = this.state.messages;
      this.setState({ messages: oldMessages.concat(msg) });
    });
  }

  static navigationOptions = {
    title: 'Chat',
  };

  onSend() {
    if (this.state.text) {
      this.socket.emit('message', this.state.text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView style={styles.msgContainer}>
          {
            this.state.messages.map((msg, idx) => {
              return (
                <View key={idx} style={styles.msgWrapper}>
                  <Text key={idx} style={styles.msg}>
                    {msg}
                  </Text>
                </View>
              );
            })
          }
        </ScrollView>

        <View style={styles.line} />

        <View style={styles.formContainer}>
          <TextInput
            value={this.state.text}
            placeholder='Type something'
            onChangeText={text => this.setState({ text })}
            style={styles.form}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.onSend.bind(this)}
          >
            <Text style={styles.btnText}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  msgContainer: {
    height: '90%',
  },

  msgWrapper: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: '#00d9ad',
  },

  msg: {
    color: '#fff',
    fontFamily: 'Elektra Text Pro',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1.2,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  formContainer: {
    height: '9.5%',
    flexDirection: 'row',
  },

  form: {
    flex: 4,
    marginLeft: 5,
  },

  button: {
    flex: 1,
    backgroundColor: '#00b2f7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    color: '#fff',
    fontFamily: 'Elektra Text Pro',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 1.2,
  },

  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#4e606e',
    opacity: 0.4,
  },
});
