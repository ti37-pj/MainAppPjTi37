import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const MyButton = ({onPress, title}) => {
    return ( 
        <TouchableOpacity onPress={onPress} style={e.botao}>
            <Text>{title}</Text>
        </TouchableOpacity>
     );
}
 const e=StyleSheet.create({
    botao:{
    borderRadius: 56,
    textAlign: "center",
    fontSize: 16,
    color: '#rgb(33 33 33)',
    placeholderTextColor:'#99999',
    marginTop:16,
    marginBottom:16,
    borderWidth: 1,
    borderColor: "#CCC",
    width:"98%",
    }
 })

export default MyButton;