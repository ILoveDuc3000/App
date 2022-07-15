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
            <Text style={styles.Text1dong}>Wellcome back</Text>
            <Text style={styles.Text2dong}>Login to your account</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Gmail..."
            placeholderTextColor={'#FF8600'}>
          </TextInput>
          <TextInput
            style={styles.input}
            placeholder="PassWord"
            placeholderTextColor={'#FF8600'}>
          </TextInput>
          <TouchableOpacity style={styles.SignIn} onPress={() => props.navigation.navigate('Loign')}>
            <Text style={styles.TextTouchableOpacity}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.haidongcuoi}>
            <TouchableOpacity>
              <Text style={[styles.textTouch]}>
                Forgot yout Password
              </Text>
            </TouchableOpacity>
            <View style={styles.viewTouchSignup}>
              <Text style={styles.textDA}>
                Don't have an account ? 
              </Text>
              <TouchableOpacity onPress={() => props.navigation.navigate('StarScreen')}>
                <Text style={styles.textSignup}>
                  Sign up now !
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView >
  );
};
export default App;