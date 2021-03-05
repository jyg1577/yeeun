import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './Home'
import List from './List'
import SearchCard from './SearchCard'
import Details from './Details';
import Like from './Like';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native'

// import { createStore } from 'redux'
import { useDispatch, useSelector } from 'react-redux';

// const store = createStore(rootReducer)

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const HomeStack = createStackNavigator();
const LikeStack = createStackNavigator();

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
const LikeStackScreen = () => {
  return (
    <LikeStack.Navigator>
      <LikeStack.Screen name="Like" component={Like} options={{title:"Like", headerTitleAlign:"center"}} />
      <LikeStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}} />

    </LikeStack.Navigator>
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
        case 'Like':
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

export default function Main() {
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("-- main is mounted--")
    // back-end에서 tasks 데이터를 가져오고, global state를 갱신
    dispatch({type:"FETCH_TASKS"})
  }, [])

  const alert = useSelector(state => state.alert)
  console.log('--alert--')
  console.log(alert)

  if(alert.isShow) {
    Alert.alert(
      "Errors",
      alert.msg,
      [
        { text: "OK", onPress: () => dispatch({type:"CLOSE_ALERT"}) }
      ],
      { cancelable: false }
    );
  } 
  return (
  
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="List" component={ListStackScreen} />
            <Tab.Screen name="Like" component={LikeStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
     
      
  );
}
