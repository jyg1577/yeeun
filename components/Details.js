import React, { useEffect, useCallback, useState } from 'react';
import { View, Button, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';


import { useDispatch, useSelector } from 'react-redux'
import { addAction, removeAction } from '../redux/actions/index'


import { LISTDATA } from './carddata'



const Details = ({ route, navigation }) => {

  console.log("routes", route);
  const { id } = route.params;

console.log("--------------------------------------------------");
console.log(id);

  const item = LISTDATA.filter(item => item.id == id)[0];
  console.log(item);

  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);
  console.log("--actions--");
  console.log(actions);

  const isExistedAction = actions.filter(item => item.id == id).length > 0 ? true : false;
  console.log("--isExistedAction--");
  console.log(isExistedAction);


  // console.log("id :", id)
  // console.log("LISTDATA :", LISTDATA)

  return (
    <View style={{
      flex: 1,
      marginTop: -40,
      alignItems: "center"
    }}>

      <Card.Title>{LISTDATA[id].title}</Card.Title>
      <Card.Divider />
      <Image source={LISTDATA[id].image} />


      <Card.Title>{LISTDATA[id].result} </Card.Title>
      <Button
        style={{ width: 100, height: 30 }}
        title="처음으로 돌아가기" color="gray" onPress={() => { navigation.navigate("Home"); }} />
 {
          isExistedAction 
            ?
            <Button
              onPress={()=>{dispatch(removeAction(id))}}
              icon={<Icon name='close' type='ionicon' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"gray"}}
              title='REMOVE' 
            /> 
            :
            <Button
              onPress={()=>{dispatch(addAction(item))}}
              icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"tomato"}}
              title='LIKE' 
            />    
        }

    </View>
  )
}
export default Details;