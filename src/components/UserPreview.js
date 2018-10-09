import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class UserPreview extends Component {
  render() {
    let initials = this.props.name.split('');
    let op = 1;
    let keyNum = 0;

    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => Actions.userProfile()}
        >
          <View style={styles.avatarContainer}>
            <Image
              source={this.props.avatar}
              style={styles.avatar}
            />
          </View>

          <View style={styles.nameContainer}>
            {
              initials.map((letter, index) =>
                initials.length > 15
                  ? index < 14
                      ? <Text key={keyNum++} style={styles.name}>
                          {letter}
                        </Text>
                      : <Text key={keyNum++} style={{
                        opacity: op -= 0.3,
                        color: '#21262c',
                        fontFamily: 'Elektra Text Pro',
                        fontSize: 20,
                        fontWeight: '400',
                        letterSpacing: 0.3,
                      }}>
                          {letter}
                        </Text>
                  : <Text key={keyNum++} style={styles.name}>
                      {letter}
                    </Text>
              )
            }
          </View>

          <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
            <Image
              source={require('../../assets/images/contactsIcon.png')}
              style={styles.icon}
            />
            <Text style={styles.notificationText}>
              {this.props.contacts}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
            <Image
              source={require('../../assets/images/messageIcon.png')}
              style={styles.icon}
            />
            <Text style={styles.notificationText}>
              {this.props.messages}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
            <Image
              source={require('../../assets/images/phoneIcon.png')}
              style={styles.icon}
            />
            <Text style={styles.notificationText}>
              {this.props.calls}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <View style={styles.line}>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 85,
  },

  avatarContainer: {
    flex: 3,
    justifyContent: 'center',
  },

  avatar: {
    width: 65,
    height: 65,
    marginLeft: '15%',
  },

  nameContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },

  name: {
    color: '#21262c',
    fontFamily: 'Elektra Text Pro',
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0.3,
  },

  iconContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  icon: {
    width: 22,
    height: 22,
  },

  notificationText: {
    position: 'absolute',
    left: '40%',
    top: '25%',
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Elektra Text Pro',
    fontWeight: '400',
    letterSpacing: 1.2,
  },

  line: {
    borderColor: '#4e606e',
    borderStyle: 'solid',
    borderWidth: 0.5,
    opacity: 0.1,
    width: '70%',
    marginLeft: 'auto',
  },
});
