
import React from 'react';

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
const App = () => {

  return (
    <View>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      <Text>Sign</Text>
      <TouchableOpacity style={[styles.touchLogin]} >
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

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: '100%',
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 25,
    marginVertical: 6,
    marginBottom: 12

  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default App;
