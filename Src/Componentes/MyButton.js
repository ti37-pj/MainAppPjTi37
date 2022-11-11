import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { color } from "react-native-reanimated";

const MyButton = ({onPress, title, principal}) => {
    return ( 
        <TouchableOpacity onPress={onPress} style={[e.botao, principal ? e.principal:e.secundary]}>
            <Text style={principal ? e.principal:e.secundary}>{title}</Text>
        </TouchableOpacity>
     );
}
 const e=StyleSheet.create({
    botao:{
        borderRadius: 56,
        textAlign: "center",
        fontSize: 16,
        placeholderTextColor:'#99999',
        marginTop:16,
        marginBottom:16,
        borderWidth: 1,
        borderColor: "#CCC",
        padding:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,
    },

    principal:{
        backgroundColor:"#1a2426",
        color:"#fff"
    },
    secundary:{
        backgroundColor:"#Fff",
        color:"#000"
    }
 })

export default MyButton;