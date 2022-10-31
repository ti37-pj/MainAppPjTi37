import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BtnRound from '../Componentes/btns/BtnRound';
import BtnSquare from '../Componentes/btns/BtnSquare';

const Carrinho = () => {
    return ( 
        <View style={e.container} >
            <Text style={e.text} >Nome do Produto</Text>
            <View style={e.btnView} >
                <BtnRound title="-"/>
                <BtnRound title="+"/>
            </View> 
            <Text style={e.preco} >R$:29,90</Text>
        </View>
     );
}

const e = StyleSheet.create({
    container:{
        margin:20,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        margin: 5,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderWidth: 1,
        borderColor: "#CCC",
        height:"136",
        width:"344",
    },
    text:{
        fontWeight:"bold",
        fontSize: 15,
    },
    title:{
        margin:20,
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 20,
    },
    btnView:{
        flexDirection:"row",
        alignItems:"center",
    },
    preco:{
        color:'#009688',
        fontWeight:"bold",
    },
})
 
export default Carrinho;