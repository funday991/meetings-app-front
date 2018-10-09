import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';


export default class meetingPreview extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 121,
          backgroundColor: this.props.color,
        }}
        onPress={() => {}}
      >
        <View style={styles.imageContainer}>
          <Image
            source={this.props.avatar}
            style={styles.avatar}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.initials}>
            {this.props.initials}
          </Text>
          <Text style={styles.info}>
            {this.props.city}, {this.props.age} years
          </Text>
          <Text style={styles.info}>
            working for {this.props.workPlace}
          </Text>
          <Text style={styles.purpose}>
            {this.props.purpose}
          </Text>
        </View>

        <View style={styles.dateAndTimeContainer}>
          <Text style={styles.dateAndTime}>
            {this.props.time}
          </Text>
          <Text style={styles.dateAndTime}>
            {this.props.date}
          </Text>
        </View>

        <Text style={styles.number}>
          {this.props.number}
        </Text>

        <TouchableOpacity style={styles.phone} onPress={() => {}}>
          <Image
            source={require('../../assets/images/phoneIcon.png')}
            style={styles.phoneIcon}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 121,
  },

  imageContainer: {
    flex: 3,
    alignItems: 'center',
    marginRight: '3%',
  },

  avatar: {
    width: '67%',
    height: '60%',
  },

  textContainer: {
    flex: 5,
    flexDirection: 'column',
  },

  initials: {
    color: '#21262c',
    fontFamily: 'Elektra Text Pro',
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0.3,
    marginBottom: '8%',
    marginTop: '8%',
  },

  info: {
    color: '#21262c',
    fontFamily: 'Elektra Text Pro',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.18,
  },

  purpose: {
    color: '#00b2f7',
    fontFamily: 'Elektra Text Pro',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.18,
    marginTop: '5%',
  },

  dateAndTimeContainer: {
    flex: 3,
  },

  dateAndTime: {
    marginLeft: 'auto',
    marginRight: '15%',
    marginBottom: '15%',
    color: '#8f8f95',
    fontFamily: 'Elektra Text Pro',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.18,
  },

  number: {
    position: 'absolute',
    top: '7%',
    left: '5%',
    color: '#21262c',
    fontFamily: 'Elektra Text Pro',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.18,
  },

  phone: {
    position: 'absolute',
    right: '4%',
    bottom: '10%',
  },

  phoneIcon: {
    width: 22,
    height: 22,
  },
});
