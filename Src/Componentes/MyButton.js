import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const MyButton = ({onPress, title, principal, fixed}) => {
    return ( 
        <TouchableOpacity onPress={onPress} style={[e.botao, principal ? e.principal:e.secundary, fixed ? e.fixed: e.dinamic]}>
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
        marginLeft:"auto",
        marginRight:"auto",
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
        width:'80%',
        elevation: 10,
    },

    principal:{
        backgroundColor:"#1a2426",
        color:"#fff"
    },
    secundary:{
        backgroundColor:"#Fff",
        color:"#000"
    },
    fixed:{
        position: "absolute",
        zIndex: 999,
        bottom:10,
        left:"10%",
    },
    dinamic:{
        position:"relative",
    },

 })

export default MyButton;