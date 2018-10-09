import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Actions } from 'react-native-router-flux';
import List from '../components/List.js';


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchVar: false
    };
    this.toggleChange = this.toggleChange.bind(this);
  }

  toggleChange(){
    this.setState({
      switchVar: !this.state.switchVar
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/backgroundAvatar.png')}
          style={styles.background}
        />

        <View style={styles.upperProfile}>
          <View style={styles.headerContainer}>
            <View style={styles.burerIconContainer}>
              <Image
                source={require('../../assets/images/burerIcon.png')}
                style={styles.headerIcon}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headerText}>
                Contact
              </Text>
            </View>
            <TouchableOpacity
              style={styles.goBackContainer}
              onPress={() => Actions.pop()}
            >
              <Text style={styles.headerText}>
                To list{'  '}
              </Text>
              <Image
                source={require('../../assets/images/forwardArrowIcon.png')}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.avatarContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
              <Image
                source={require('../../assets/images/messageIcon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Image
              source={require('../../assets/images/profileAv.png')}
              style={styles.avatar}
            />
            <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
              <Image
                source={require('../../assets/images/phoneIcon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.nameContainer}>
              <Image
                source={require('../../assets/images/profileIcon.png')}
                style={styles.profileIcon}
              />
              <Text style={styles.headerText}>
                  {'   ' + this.props.name.toUpperCase()}
              </Text>
            </View>
            <Text style={styles.headerText}>
              {this.props.city}, {this.props.age} years
            </Text>
            <Text style={styles.infoText}>
              {this.props.workPlace}
            </Text>
          </View>
        </View>

        <ScrollView style={styles.listContainer}>
          <List
            title='Meeting'
            titleValue='11:00  20.10.2015'
            rows={[
              ['Done', <Switch
                          onValueChange={this.toggleChange}
                          value={this.state.switchVar}
                          onTintColor='#00a3d9'
                        />],
              ['Result', <Text style={styles.value}>Thinking</Text>],
            ]}
          />

          <View style={styles.line}>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.setButton}>
              <Text style={styles.buttonText}>
                Set a call
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.setButton}>
              <Text style={styles.buttonText}>
                Set a meeting again
              </Text>
            </TouchableOpacity>
          </View>

          <List
            title='Contacts'
            titleValue=''
            rows={[
              ['Phone number', <Text style={styles.value}>+7 900 700-70-70</Text>],
              ['Skype', <Text style={styles.value}>Garfieldaction</Text>],
              ['Viber', <Text style={styles.value}>+7 900 700-70-70</Text>],
              ['Whatsapp', <Text style={styles.value}>+7 900 700-70-70</Text>],
              ['Vkontakte', <Text style={styles.value}>id34567</Text>],
              ['Facebook', <Text style={styles.value}>ivanov_ivan</Text>],
            ]}
          />
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

  background: {
    height: 300,
  },

  upperProfile: {
    position: 'absolute',
    height: 300,
    width: '100%',
    backgroundColor: 'rgba(0,177,248,0.5)',
  },

  headerContainer: {
    flex: 2,
    width: '90%',
    marginLeft: '5%',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },

  burerIconContainer: {
    flex: 1,
  },

  headerIcon: {
    width: 22,
    height: 16,
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
  },

  headerText: {
    fontSize: 15,
    color: '#ffffff',
    fontFamily: 'Elektra Text Pro',
    fontWeight: '400',
    letterSpacing: 1.2,
  },

  goBackContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  avatarContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
    backgroundColor: '#ffffff',
    marginLeft: '7%',
    marginRight: '7%',
  },

  icon: {
    width: 22,
    height: 22,
  },

  avatar: {
    width: 100,
    height: 100,
  },

  infoContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  nameContainer: {
    flexDirection: 'row',
    marginBottom: '5%',
  },

  profileIcon: {
    width: 15,
    height: 15,
  },

  infoText: {
    color: '#ffffff',
    fontFamily: 'Elektra Text Pro',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.18,
  },

  value: {
    fontFamily: 'Elektra Text Pro',
    fontSize: 15,
    fontWeight: '400',
    color: '#8f8f95',
    letterSpacing: 1.2,
  },

  listContainer: {
    marginLeft: '5%',
  },

  line: {
    width: '90%',
    backgroundColor: '#c7c7c7',
    height: 0.5,
  },

  buttonContainer: {
    marginTop: 25,
    width: '90%',
  },

  setButton: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderColor: '#97d500',
    borderStyle: 'solid',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  buttonText: {
    fontFamily: 'Elektra Text Pro',
    fontSize: 15,
    fontWeight: '700',
    color: '#97d500',
  }
});
