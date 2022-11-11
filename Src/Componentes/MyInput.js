
import React from "react";
import { StyleSheet, TextInput} from "react-native";

const MyInput = ({label, variant, onChangeText, placeholder}) => {
    return ( 
        <TextInput label={label} variant={variant} style={e.texto} onChangeText={onChangeText} placeholder={placeholder}/>
     );
}
 
const e=StyleSheet.create({

texto:{
    borderRadius: 56,
    textAlign: "center",
    fontSize: 16,
    color: '#rgb(33 33 33)',
    placeholderTextColor:'#99999',
    marginTop:16,
    marginBottom:16,
    borderWidth: 1,
    borderColor: "#CCC",
    padding:15,
    backgroundColor:"#Fff",
}
})
export default MyInput;