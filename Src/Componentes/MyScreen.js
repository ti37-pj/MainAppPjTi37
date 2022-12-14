import React from "react";
import { View, StyleSheet, ImageBackground, image, ScrollView} from "react-native-web";

const MyScreen = (props) => {
    return ( 
        <View style={e.screen}>
            <ImageBackground source={{uri:"https://i.imgur.com/Kc2nNNz.png"}} resizeMode="cover" style={e.image}></ImageBackground>
                <View style={e.content}>
                    <ScrollView>
                        {props.children}
                    </ScrollView>
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
        height:"80%",
        width:"100%", 
        borderTopLeftRadius:32,
        borderTopRightRadius:32,
        backgroundColor:"#F2A922",
        bottom:0, 
        position: "absolute",
        paddingTop:20,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:80,
    },
    image:{
        height:"29%",
        flex:1,
    },

});
 
export default MyScreen;