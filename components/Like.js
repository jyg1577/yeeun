
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import { ListItem, Avatar, Icon, Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

import { removeTask } from '../redux/actions/tasks'

const Tasks = ({route, navigation }) => {
  console.log("-- route.params --------------------------------------");
  console.log(route.params);

  const tasks = useSelector(state => state.tasks);

  const dispatch = useDispatch();

  return(
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        tasks.map((item, i) => (
          <Card key={i}  containerStyle={{width:250,height:300}}>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
            <Card.Image source={{uri : item.image}}  style={{width:150,height:250}} onPress={()=>{navigation.navigate("Details", {id: item.id})}}/>
            <Icon name='close' type='ionicon' color='gray' onPress={()=>{dispatch(removeTask(item.id))}} iconStyle={{ paddingTop:110}}/>
            </View>
          </Card>
        ))
      }
      </ScrollView>
    </View>
  )
}

export default Tasks;