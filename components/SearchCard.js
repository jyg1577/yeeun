import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Card } from 'react-native-elements';
import { LISTDATA } from './carddata'
import { styles, firstRowStyles } from './css/searchCard'
import api from '../api/list'
const IMAGE = require('../image/card.jpg');


const SearchCard = ({ navigation }) => {

  const FirstRowStyles = [firstRowStyles.con1, firstRowStyles.con2, firstRowStyles.con3, firstRowStyles.con4]
  const customStyles = [styles.con1, styles.con2, styles.con3, styles.con4]
  cardList = customStyles.map(
    (customStyle, i) => (
      <View key={i} style={{ flexDirection: 'row' }}>

        <TouchableOpacity onPress={() => { navigation.navigate("Details", { id: Math.floor(Math.random() * LISTDATA.length) }) }} >
          <Card.Image source={IMAGE}
            style={FirstRowStyles[i]} >
          </Card.Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Details", { id: Math.floor(Math.random() * LISTDATA.length) }) }} >
          <Card.Image source={IMAGE}
            style={customStyle} >
          </Card.Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Details", { id: Math.floor(Math.random() * LISTDATA.length) }) }} >
          <Card.Image source={IMAGE}
            style={customStyle} >
          </Card.Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Details", { id: Math.floor(Math.random() * LISTDATA.length) }) }} >
          <Card.Image source={IMAGE}
            style={customStyle} >
          </Card.Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Details", { id: Math.floor(Math.random() * LISTDATA.length) }) }} >
          <Card.Image source={IMAGE}
            style={customStyle} >
          </Card.Image>
        </TouchableOpacity>


      </View>
    )
  )
  return (
    <View>
      <Text style={{ textAlign: 'center', marginTop: 30, fontSize: 30 }}>카드를 한장 뽑아주세요</Text>
      {cardList}
    </View>
  );
}

export default SearchCard;