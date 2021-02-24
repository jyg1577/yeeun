import React from 'react';
import { View, ImageBackground, Button } from 'react-native';
import 'react-native-gesture-handler';

const List = ({ navigation }) => {
  return (
    <ImageBackground source={require('../image/maincard.png')}
      resizeMode="cover" style={{ width: '100%', height: '100%' }} >
      <View style={{
        flex: 1,
        marginTop: 300,
        alignItems: "center"
      }}>
        <Button
          title="NEXT" color="gray" onPress={() => { navigation.navigate("SearchCard") }}
        />
      </View>
    </ImageBackground>

  );
}
export default List