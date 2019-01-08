import React from 'react';
import { StyleSheet } from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import MainScreen from './Components/MainScreen';

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator({
  Home: { screen: MainScreen }
});

const AppContainer = createAppContainer(AppStackNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
