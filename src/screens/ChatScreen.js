import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import SocketIOClient from 'socket.io-client';
import { connect } from 'react-redux';
import store from '../store/store';

import getMessages from '../actions/getAllMessages';
import saveMessage from '../actions/sendMessage';


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      text: '',
    };

    this.socket = SocketIOClient('http://192.168.1.7:5000');

    this.socket.on('message', msg => {
      this.props.getMessages();
    });
  }

  static navigationOptions = {
    title: 'Chat',
  };

  onSend() {
    var { text } = this.state;
    if (text) {
      this.socket.emit('message', text);
      this.setState({ text: '' });
      this.props.saveMessage({
        from: this.state.username,
        text
      });
    }
  }

  componentWillMount() {
    this.props.getMessages();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.user) {
      this.setState({
        username: nextProps.auth.user.name,
      });
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView style={styles.msgContainer}>
          {
            this.props.chat.messages.map((msg, idx) => {
              return (
                <View key={idx} style={msg.from === this.state.username ? styles.outMsgWrapper : styles.inMsgWrapper}>
                  <Text key={idx} style={styles.msg}>
                    {msg.text}
                  </Text>
                  {
                    msg.from !== this.state.username
                    &&
                    <Text key={idx + 1} style={styles.from}>
                      From: {msg.from}
                    </Text>
                  }
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

  inMsgWrapper: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: '#00d9ad',
  },

  outMsgWrapper: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: '#00b2f7',
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

  from: {
    color: '#fff',
    fontFamily: 'Elektra Text Pro',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 1.2,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
});

const mapStateToProps = state => {
  return {
    auth: state.auth,
    chat: state.chat
  }
};

const mapDispatchToProps = dispatch => {
  return {
    saveMessage: msg => {
      dispatch(saveMessage(msg));
    },
    getMessages: () => {
      dispatch(getMessages());
    }
  }
}

const ChatScreen = connect(mapStateToProps, mapDispatchToProps)(Chat);
export default ChatScreen;
