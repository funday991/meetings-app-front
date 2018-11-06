import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import login from '../actions/login';
import store from '../store/store';


class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
    errors: {},
  };

  onEmailChange(text) {
    this.setState({ email: text });
  }

  onPasswordChange(text) {
    this.setState({ password: text });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleRequest() {
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(payload);
  }

  render() {
    var {errors} = this.state;

    return (
      <LinearGradient
        style={styles.container}
        colors={['#00d9ad', '#00b2f7']}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logoBorder.png')}
            style={styles.logoBorder}
          />
          <Text style={styles.logoText}>
            c
          </Text>
        </View>

        <Text style={styles.title}>
          contacts
        </Text>


        <View style={styles.formContainer}>
          <TextInput
            style={styles.form}
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={this.onEmailChange.bind(this)}
            placeholder='Email'
          />
          {errors.email && <Text style={styles.errorEmail}>{errors.email}</Text>}
          <View style={styles.line} />
          <TextInput
            style={styles.form}
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
            placeholder='Password'
          />
          {errors.password && <Text style={styles.errorPassword}>{errors.password}</Text>}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleRequest.bind(this)}
        >
          <Text style={styles.buttonText}>
            Enter
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotPW}
          onPress={() => {}}
        >
          <Text style={styles.forgotPWText}>
            Forgot password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signup}
          onPress={() => Actions.register()}
        >
          <Text style={styles.signupText}>
            Sign up
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  logoContainer: {
    width: 92,
    height: 72,
    marginTop: '35%',
  },

  logoBorder: {
    width: 92,
    height: 72,
  },

  logoText: {
    position: 'absolute',
    top: 10,
    left: 30,
    fontFamily: 'Otscookie',
    fontSize: 40,
    fontWeight: '400',
    color: '#ffffff',
  },

  title: {
    marginTop: '5%',
    fontSize: 60,
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#ffffff',
  },

  formContainer: {
    width: '80%',
    height: 100.5,
    marginTop: '10%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  form: {
    height: 50,
    width: '90%',
  },

  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#4e606e',
    opacity: 0.4,
  },

  button: {
    marginTop: 40,
    width: '40%',
    height: 50,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#304046',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  buttonText: {
    color: '#333333',
    fontSize: 18,
    fontWeight: '700',
  },

  forgotPW: {
    marginTop: 50,
  },

  forgotPWText: {
    fontSize: 14,
    fontWeight: '400',
    textDecorationLine: 'underline',
    color: '#333333',
    letterSpacing: 0.9,
  },

  signup: {
    marginTop: 20,
  },

  signupText: {
    fontSize: 14,
    fontWeight: '400',
    textDecorationLine: 'underline',
    color: '#ffffff',
    letterSpacing: 0.9,
  },

  errorEmail: {
    color: 'red',
    fontSize: 10,
    position: 'absolute',
  },

  errorPassword: {
    color: 'red',
    fontSize: 10,
    position: 'absolute',
    top: 50,
  },
});


const mapStateToProps = state => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(login(user))
    }
  }
}

const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginScreen;
