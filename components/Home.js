import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, ImageBackground, Image, Button } from 'react-native';

const Home = () => {
  return (
    <ImageBackground source={require('../image/123.png')}
      resizeMode="cover" style={{ width: '100%', height: '100%' }}>
      <View>
        <Text style={{ textAlign: 'center', marginTop: 70, fontSize: 30 }}>당신의 이번달 운세는?</Text>
        <Image source={require('../image/mainImage.jpg')}
          style={{ width: 310, height: 330, marginTop: 25, marginLeft: 50 }} />
      </View>
    </ImageBackground>
  );
}
export default Home;



