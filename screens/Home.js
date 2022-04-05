import React, { Component } from "react";
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Platform,
    StatusBar,ImageBackground,Image} from "react-native";

export default class HomeScreen extends Component {
render() {
return (
<View style={styles.container}>
<SafeAreaView styles={style.droidSafeArea}/>
<ImageBackground source={require('../assets/bg_image.png')} style= {styles.backgroundImage}>
< View style={styles.titleBar}>
<Text style={styles.titleText}>
ISS Tracker App                                                                                                                                                                                                                                                                                                                                           
</Text>
</View>

<TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("ISSLocation")} >
    <Text style={style.routeText}> ISS Location </Text>
    <Text style={style.knowMore}>{"Know More ---->"}</Text>
    <Text style={style.bgDigit}>1</Text>
    <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>

</TouchableOpacity>

<TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("Meteors")}>
    <Text style={style.routeText}> Meteors </Text>
    <Text style={style.knowMore}>{"Know More ---->"}</Text>
    <Text style={style.bgDigit}>1</Text>
    <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
</TouchableOpacity>
</ImageBackground>
</View>
)

}
}
const styles=StyleSheet.create ( {
  container:{
      flex:1,


  },
  
  droidSafeArea:{
      marginTop: Platform.OS ==="android" ? StatusBar.currentHeight:0
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
},
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center"
  },
    titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white"
  },

 routeCard:{
     flex:0.25,
     marginTop:50,
     marginLeft:50,
     marginRight:50,
     borderRadius:30,
     backgroundColor:"white"
 },
 routeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginTop: 75,
    paddingLeft: 30
},
knowMore: {
    paddingLeft: 30,
    color: "red",
    fontSize: 15
},
bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 0.5)",
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1
},
iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: 20,
    top: -80
}
}
)