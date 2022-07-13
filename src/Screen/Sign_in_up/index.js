import React from 'react';
import { styles } from "./styles"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const image = { uri: "https://traderclass.vn/public/upload/images/course/thumb/94732711cf31016f5820.jpg" };
const App = (props) => {

  return (
    <View>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      <Text>Sign</Text>
      <TouchableOpacity style={[styles.touchLogin]}  onPress={() => props.navigation.navigate('StarScreen')}>
        <Text style={[styles.textTouch]}>
          back
        </Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="User..."
        placeholderTextColor={'#FF8600'}>
      </TextInput>
      <TextInput
        style={styles.input}
        placeholder="pasWord"
        placeholderTextColor={'#FF8600'}>
      </TextInput>
    </View>
  );
};
export default App;