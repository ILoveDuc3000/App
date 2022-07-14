import React from "react";
import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles"

import Appleicon from '../../Icons/Appel'
import GgIcon from '../../Icons/GG'
import Fbicon from "../../Icons/Fb"

const image = { uri: "https://traderclass.vn/public/upload/images/course/thumb/94732711cf31016f5820.jpg" };

const App = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.ViewtextStat}>
          <Text style={styles.slogan}>Learn,</Text>
          <Text style={styles.slogan}>learn more,</Text>
          <Text style={styles.slogan}>learn forever</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.SignIn} onPress={() => props.navigation.navigate('Loign')}>
            <Text style={styles.TextTouchableOpacity}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Fb}>
            <View style={styles.viewIcon}>
              <Fbicon style={{ marginRight: 10 }}/>
              <Text style={styles.TextTouchableOpacity}>Connect with Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gg}>
          <View style={styles.viewIcon}>
              <GgIcon style={{ marginRight: 10 }}/>
              <Text style={styles.TextTouchableOpacity}>Connect with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ap}>
          <View style={styles.viewIcon}>
              <Appleicon style={{ marginRight: 10 }}/>
              <Text style={styles.TextTouchableOpacity}>Conect with Apple ID</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
export default App;