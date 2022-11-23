
import React from "react";
import { StyleSheet, Text} from "react-native";

const MyText = (props) => {
    return ( 
        <Text style={[e.texto, props.fixed ? e.fixed: e.dinamic]}>{props.children} </Text>
     );
}
 
const e=StyleSheet.create({

    texto:{
        textAlign: "center",
        fontSize: 16,
        color: '#rgb(33 33 33)',
        margin:5,
        wordBreak: "break-all",
    },
    fixed:{
        position: "absolute",
        zIndex: 999,
        bottom:0,
        left:"5%",
        marginBottom:16,
        padding:15,
        fontWeight:700,
    },
    dinamic:{
        position:"relative",
    },
})
export default MyText;