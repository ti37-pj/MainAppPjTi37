import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BtnRound = (props) => {
    return ( 
        <View>
            <TouchableOpacity>
                <Text style={e.btnRound}>{props.title}</Text>
            </TouchableOpacity>
        </View>
     );
}

const e = StyleSheet.create({
    btnRound:{
        backgroundColor:"#009688",
        color:"white",
        borderRadius: 50,
        textAlign:"center",
        paddingTop: 10,
        width:40,
        height:40,
    },
})
 
export default BtnRound;