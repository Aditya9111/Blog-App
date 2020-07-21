import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './src/screens/indexScreen';
import {Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/showScreen';
import CreateScreen from './src/screens/createScreen';
import EditScreen from './src/screens/editScreen';

import Header from './components/Header';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({navigation}) => {
            return {
              headerTitle: () => (
                <Header
                  navigation={navigation}
                  title="Blog"
                  name="add"
                  nav={'Create'}
                  size={40}
                />
              ),
            };
          }}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({navigation, route}) => {
            return {
              headerTitle: () => (
                <Header
                  navigation={navigation}
                  title="Blog"
                  name="pencil"
                  nav={'Edit'}
                  size={30}
                  id={route.params.id}
                />
              ),
            };
          }}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{title: 'Create Blog'}}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{title: 'Edit Blog'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
