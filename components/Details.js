import { apisAreAvailable } from 'expo';
import React, { useEffect, useCallback, useState } from 'react';
import { View, Button, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';

import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask } from '../redux/actions/tasks'

import { LISTDATA } from './carddata'

import api from '../api/list'

const Details = ({ route, navigation }) => {

  console.log("routes", route);
  const { id } = route.params;
  console.log(id);

  const [item, setItem] = useState({});

  const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks);

  const isExistedTask = tasks.filter(item => item.id == id).length > 0 ? true : false;


  const getDetails = useCallback(async () => {
    const result = await api.get(id);
    console.log("result.data")
    console.log(result.data);
    setTimeout(() => {
      setItem(result.data);
    }, 300)

  }, [])

  useEffect(() => {
    getDetails();
  }, []);



  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>

      <Card
        containerStyle={{ width: "100%", height: "100%", marginTop: 0 }}>

        <Card.Image style={{ height: 380, resizeMode: 'contain' }} source={{ uri: item.image }} />

        <Card.Title style={{ textAlign: "center" }}>{item.result} </Card.Title>
        <View
          style={{ alignItems:"center" }}>
          {

            isExistedTask
              ?
              <View >
                <Icon name="heart" type='ionicon' color="red"
                  onPress={() => { dispatch(removeTask(id)) }}
  
                />
              </View>

              :
              <View style={{ width: 70 }}>
                <Icon name="heart" type='ionicon'
                  onPress={() => { dispatch(addTask(item)) }}
                />

              </View>


          }
        </View>
      </Card>

    </View>
  )
}
export default Details;