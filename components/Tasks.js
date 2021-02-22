import React, { useEffect, useCallback, useState } from 'react';
import { View, Button, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { LISTDATA } from './image'



const Tasks = ({ route, navigation }) => {

  console.log("routes", route);
  const { id } = route.params;
  console.log("id :", id)
  console.log("LISTDATA :", LISTDATA)

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
    </View>
  )
}
export default Tasks;