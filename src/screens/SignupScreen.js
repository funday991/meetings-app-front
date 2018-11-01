import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header.js';
import SignupForm from '../components/SignupForm.js';
import createNewUser from '../actions/signup';


class Signup extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    name: '',
    email: '',
    password: '',
    password_confirm: '',
    errors: {},
  };

  onNameChange(text) {
    this.setState({ name: text });
  }

  onPasswordChange(text) {
    this.setState({ password: text });
  }

  onPasswordConfirmChange(text) {
    this.setState({ password_confirm: text });
  }

  onEmailChange(text) {
    this.setState({ email: text });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleRequest() {
    alert(JSON.stringify(this.state.errors));
    const payload = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm,
    };

    this.props.createNewUser(payload);
  }

  render() {
    const { errors } = this.state;

    return (
      <View style={styles.container}>
        <Header
          icon={require('../../assets/images/backArrowIcon.png')}
          textCenter='Sign up'
          textRight=''
          navRight=''
          navLeft={Actions.pop}
        />

        <View style={styles.titleForm}>
          <Text style={styles.title}>
            ENTER USERNAME:
          </Text>
          <TextInput
            style={styles.titleInput}
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={this.onNameChange.bind(this)}
          />
          <View style={styles.line} />
        </View>

        <SignupForm
          secure={false}
          callback={this.onEmailChange.bind(this)}
          placeholder='EMAIL'
        />
        {errors.email && alert(errors.email)}

        <SignupForm
          secure
          callback={this.onPasswordChange.bind(this)}
          placeholder='PASSWORD'
        />

        <SignupForm
          secure
          callback={this.onPasswordConfirmChange.bind(this)}
          placeholder='REPEAT PASSWORD'
        />

        <TouchableOpacity
          style={styles.signupButton}
          onPress={this.handleRequest.bind(this)}
        >
          <Text style={styles.buttonText}>
            Sign up{'  '}
          </Text>
          <Image
            style={styles.icon}
            source={require('../../assets/images/greenForwardArrowIcon.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  titleForm: {
    width: '90%',
    height: 101,
    marginTop: '7%',
  },

  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333333',
    letterSpacing: 1.2,
  },

  titleInput: {
    width: '100%',
    height: 50,
    marginTop: '7%',
  },

  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#4e606e',
    opacity: 0.4,
  },

  signupButton: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderColor: '#97d500',
    borderStyle: 'solid',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    flexDirection: 'row',
  },

  buttonText: {
    fontFamily: 'Elektra Text Pro',
    fontSize: 15,
    fontWeight: '700',
    color: '#97d500',
  },

  icon: {
    width: 22,
    height: 16,
  },
});


const mapStateToProps = state => ({
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: user => {
      dispatch(createNewUser(user))
    }
  }
}

const SignupScreen = connect(mapStateToProps, mapDispatchToProps)(Signup);
export default SignupScreen;
