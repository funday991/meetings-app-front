import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';


export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() =>
            this.props.navLeft
              ? this.props.navLeft()
              : {}
            }
        >
          <Image
            source={this.props.icon}
            style={styles.icon}
          />
        </TouchableOpacity>

        <View style={styles.textCenterContainer}>
          <Text style={styles.textCenter}>
            {this.props.textCenter}
          </Text>
        </View>

        <View style={styles.textRightContainer}>
          <TouchableOpacity
            onPress={() =>
              this.props.navRight
                ? this.props.navRight()
                : {}
              }
          >
            <Text style={styles.textRight}>
              {this.props.textRight}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: '11.4%',
    backgroundColor: '#00b2f7',
    flexDirection: 'row',
  },

  imageContainer: {
    flex: 2,
  },

  icon: {
    marginTop: '40%',
    marginLeft: '20%',
    width: 22,
    height: 16,
  },

  textCenterContainer: {
    flex: 3,
    alignItems: 'center',
  },

  textCenter: {
    marginTop: '27%',
    fontSize: 15,
    color: '#ffffff',
    fontFamily: 'Elektra Text Pro',
    fontWeight: '400',
    letterSpacing: 1.2,
  },

  textRightContainer: {
    flex: 2,
    alignItems: 'flex-end',
  },

  textRight: {
    marginRight: '20%',
    marginTop: '40%',
    fontSize: 15,
    color: '#ffffff',
    fontFamily: 'Elektra Text Pro',
    fontWeight: '400',
    letterSpacing: 1.2,
  },
});
