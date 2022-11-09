import React from "react";
import {Button, Text, TextInput } from '@react-native-material/core';
import { View, StyleSheet } from "react-native";
import { UsuarioContexto } from "../Contexto/UsuarioContexto";
import { MesaContexto } from "../Contexto/MesaContexto";
import MyInput from "../Componentes/MyInput";

const Mesa = ({navigation}) => {

    // const [ inputMesa, alteraInputMesa ] = React.useState('')

    const [ mesa, alteraMesa ] = React.useContext(MesaContexto);

    const ContinuarClicado = () => {

        if ( mesa > 0 && mesa < 30) {
        navigation.navigate('Cardápio');
        } 
        
        else {

            alert('Mesa Não Existente!')

        }

    }

    const [usuario,alteraUsuario] = React.useContext(UsuarioContexto)
    console.log (usuario)
    return ( 
        <View>
            <Text> Selecionar Mesa </Text>
            <TextInput label="Numero da Mesa"  />
            <MyInput  label='Número da Mesa' variant='outlined' onChangeText={alteraMesa} placeholder='Digite sua Mesa' />
            <Button style={e.botao} title="Continuar" onPress={ContinuarClicado } /> 
        </View>
     );
}

const e=StyleSheet.create({
    botao:{
        borderRadius: 22,
        padding: 5,
        fontSize: 16,
        marginTop: 20,
        backgroundColor: '#F2A922',
        color: "#000"
    }
})
 
export default Mesa;