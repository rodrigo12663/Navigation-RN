import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserList from './views/UserList';
import UserForm from './views/UseForm';

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="UserForm" component={UserForm} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
