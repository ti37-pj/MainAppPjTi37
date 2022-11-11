
import React from "react";
import { StyleSheet, Text} from "react-native";

const MyText = (props) => {
    return ( 
        <Text style={e.texto}>{props.children}</Text>
     );
}
 
const e=StyleSheet.create({

texto:{
    textAlign: "center",
    fontSize: 16,
    color: '#rgb(33 33 33)',
    margin:5,
}
})
export default MyText;