import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BtnSquare = (props) => {
    return ( 
        <View>
            <TouchableOpacity>
                <Text style={e.btnSquare}>{props.title}</Text>
            </TouchableOpacity>
        </View>
     );
}

const e = StyleSheet.create({
    btnSquare:{
        backgroundColor:"#009688",
        color:"white",
        padding:10,
        borderRadius: 5,
        margin:20,
    },
})

export default BtnSquare;