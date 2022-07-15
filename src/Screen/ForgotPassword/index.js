import React from 'react';
import { styles } from "./styles"
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const image = { uri: "https://traderclass.vn/public/upload/images/course/thumb/94732711cf31016f5820.jpg" };
const App = (props) => {

  return (
    <SafeAreaView style={styles.safeview}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.viewBot}>
          <View style={styles.tetxx}>
            <Text style={styles.Text1dong}>Forgot password</Text>
            <Text style={styles.Text2dong}>Please enter your email address, You will rececive a link to create a new password via email.</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Gmail..."
            placeholderTextColor={'#FF8600'}>
          </TextInput>
          <TouchableOpacity style={styles.SignIn} onPress={() => props.navigation.navigate('Loign')}>
            <Text style={styles.TextTouchableOpacity}>Sign In</Text>
          </TouchableOpacity>
          <View>
            <Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView >
  );
};
export default App;