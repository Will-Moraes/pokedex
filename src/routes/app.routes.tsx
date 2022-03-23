import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

import {RootStackParamList} from '../utils/RootStackParams';
import {TabRoutes} from './tab.routes';
import {PokemonDetails} from '../screens/PokemonDetails';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="TabRoutes">
        {/* <Screen name="Home" component={Home} options={{headerShown: false}} /> */}

        <Screen
          name="TabRoutes"
          component={TabRoutes}
          options={{headerShown: false}}
        />

        <Screen
          name="PokemonDetails"
          component={PokemonDetails}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
