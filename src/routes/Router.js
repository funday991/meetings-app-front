import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import MeetingsListScreen from '../screens/MeetingsListScreen';
import MakeMeetingScreen from '../screens/MakeMeetingScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const RouterComponent = () => (
  <Router>
    <Stack hideNavBar key="root">
      <Stack
        key="auth"
        type="reset"
      >
        <Scene
          key="login"
          component={LoginScreen}
          initial
        />
        <Scene
          key="register"
          component={SignupScreen}
        />
      </Stack>
      <Stack
        key="main"
        type="reset"
      >
        <Scene
          key="meetingList"
          component={MeetingsListScreen}
          initial
        />
        <Scene
          key="makeMeeting"
          component={MakeMeetingScreen}
        />
        <Scene
          key="userProfile"
          component={UserProfileScreen}
        />
      </Stack>
    </Stack>
  </Router>
);

export default RouterComponent;
