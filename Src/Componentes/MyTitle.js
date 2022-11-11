
import React from "react";
import { StyleSheet, Text} from "react-native";

const MyTitle = (props) => {
    return ( 
        <Text style={e.texto}>{props.children}</Text>
     );
}
 
const e=StyleSheet.create({

texto:{
    textAlign: "center",
    fontSize: 36,
    color: '#rgb(33 33 33)',
    margin:5,
}
})
export default MyTitle;