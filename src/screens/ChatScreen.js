import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SocketIOClient from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat';


export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      username: 'anonim',
    };

    this.socket = SocketIOClient('http://192.168.1.7:3000/api');

    this.socket.on('message', this.onReceivedMessage);
  }

  onReceivedMessage(messages) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  onSend(messages=[]) {
    this.socket.emit('message', messages[0]);
    this.onReceivedMessage(messages);
  }

  render() {
    var user = { username: this.state.username };

    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend.bind(this)}
        user={user}
      />
    );
  }
}
