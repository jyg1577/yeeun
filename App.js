import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './components/Home'
import List from './components/List'
import SearchCard from './components/SearchCard'
import Details from './components/Details';
import Tasks from './components/Tasks';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

const store = createStore(rootReducer)

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const HomeStack = createStackNavigator();
const TasksStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"Home", headerTitleAlign:"center"}} />
    </HomeStack.Navigator>
  )
}
const ListStackScreen = () => {
  return (
    <ListStack.Navigator>

      <ListStack.Screen name="List" component={List} options={{title:"List", headerTitleAlign:"center"}} />
      <ListStack.Screen name="SearchCard" component={SearchCard} options={{title:"Card", headerTitleAlign:"center"}} />
      <ListStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}} />

    </ListStack.Navigator>
  )
}
const TasksStackScreen = () => {
  return (
    <TasksStack.Navigator>
      <TasksStack.Screen name="Tasks" component={Tasks} options={{title:"Tasks", headerTitleAlign:"center"}} />
      <TasksStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}} />

    </TasksStack.Navigator>
  )
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      case 'Home':
        iconName = focused
          ? 'home'
          : 'home-outline';        
        break;
      case 'List':
        iconName = focused
          ? 'chevron-forward-circle'
          : 'chevron-forward-circle-outline'; 
        break;     
        case 'Tasks':
          iconName = focused
            ? 'heart'
            : 'heart-outline'; 
          break;     
    }
    
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const tabBarOptions= {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="List" component={ListStackScreen} />
            <Tab.Screen name="Tasks" component={TasksStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      </Provider>
      
  );
}
