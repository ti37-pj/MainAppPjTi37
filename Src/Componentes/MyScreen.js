import React from "react";
import { View, StyleSheet, ImageBackground, image} from "react-native-web";

const MyScreen = (props) => {
    return ( 
        <View style={e.screen}>
            <ImageBackground source={require("../Assets/cabeca.png")}resizeMode="cover" style={e.image}></ImageBackground>
            <View style={e.content}>
                {props.children} 
            </View>
        </View>
     );
}

const e=StyleSheet.create({
    screen:{
        height:"100%",
        backgroundColor:"#F2A922",
    },
    content:{
        height:"72%",
        width:"100%", 
        borderTopLeftRadius:32,
        borderTopRightRadius:32,
        backgroundColor:"#F2A922",
        bottom:0, 
        position: "absolute",
        padding:40,
    },
    image:{
        height:"29%",
        flex:1,
    },

});
 
export default MyScreen;