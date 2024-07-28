import { View, Text } from 'react-native';
import React from 'react';
import Ant from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Home from '../../src/Screens/Home';
import Masseges from '../../src/Screens/Masseges/Masseges';
import Add_Task from '../../src/Screens/Add_Task/Add_Task';
import Chat from '../../src/Screens/Chat/Chat';
import ProfileScreen from '../../src/Screens/Profile/Profile';
// import Profile from '../../src/Screens/Profile/Profile';
const Tab = createBottomTabNavigator();

export default function Bottom_Tab_Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#7B61FF"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#fff' }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7B61FF',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Projects"
        component={Masseges}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon1 name="folder" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add_Task}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon1 name="plus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Icon name="chatbubble-ellipses-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Icon2 name="user" color={color} size={26} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
}
