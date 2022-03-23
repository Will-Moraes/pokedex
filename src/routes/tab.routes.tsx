import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, StyleSheet, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Feather';

import {Home} from '../screens/Home';
import {AllPokemon} from '../screens/AllPokemon';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import theme from '../global/styles/theme';

import PokeActiveIcon from '../assets/icons/poke_active.svg';
import PokeInactiveIcon from '../assets/icons/poke_inactive.svg';

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
function AllPokemonStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AllPokemon" component={AllPokemon} />
    </Stack.Navigator>
  );
}
function TrainerStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Trainer" component={AllPokemon} />
    </Stack.Navigator>
  );
}

export function TabRoutes() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: theme.colors.primary,
          tabBarActiveTintColor: theme.colors.primary,
          unmountOnBlur: true,
          tabBarStyle: {
            borderTopColor: 'transparent',
            borderTopWidth: 0,
            backgroundColor: theme.colors.primary,
            elevation: 0,
            borderRadius: 45,
            height: 90,
          },
        }}>
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{
            tabBarLabelPosition: 'below-icon',
            tabBarLabel: ({focused}) => (
              <Text style={focused ? styles.textActive : styles.textInactive}>
                Home
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <PokeActiveIcon width={RFValue(40)} height={RFValue(40)} />
              ) : (
                <PokeInactiveIcon width={RFValue(30)} height={RFValue(30)} />
              ),
          }}
        />
        <Tab.Screen
          name="PokemonTab"
          component={AllPokemonStack}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('PokemonTab');
            },
          })}
          options={{
            tabBarLabelPosition: 'below-icon',
            tabBarLabel: ({focused}) => (
              <Text style={focused ? styles.textActive : styles.textInactive}>
                Pokemon
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <PokeActiveIcon width={RFValue(40)} height={RFValue(40)} />
              ) : (
                <PokeInactiveIcon width={RFValue(30)} height={RFValue(30)} />
              ),
          }}
        />
        <Tab.Screen
          name="TrainerTab"
          component={AllPokemonStack}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('TrainerTab');
            },
          })}
          options={{
            tabBarLabelPosition: 'below-icon',
            tabBarLabel: ({focused}) => (
              <Text style={focused ? styles.textActive : styles.textInactive}>
                Treinador
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <PokeActiveIcon width={RFValue(40)} height={RFValue(40)} />
              ) : (
                <PokeInactiveIcon width={RFValue(30)} height={RFValue(30)} />
              ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  textActive: {
    fontSize: RFValue(15),
    color: '#80CCBA',
    fontFamily: theme.fonts.extraBold,
    marginTop: 20,
  },

  textInactive: {
    fontSize: RFValue(13),
    color: '#FFFFFF',
    fontFamily: theme.fonts.regular,
  },
});
