import { Button, TextInput } from "@react-native-material/core";
import React from "react";

import { View, StyleSheet } from "react-native";

const Cadastro = ({navigation}) => {

    

    return ( 
        <View>
            <TextInput label='Nome' variant='outlined' />
            <TextInput label='Cpf' variant='outlined' />
            <TextInput label='Telefone' variant='outlined' />
            <TextInput label='Email' variant='outlined' />
            <TextInput label='Senha' variant='outlined' />
            <TextInput label='Repetir Senha' variant='outlined' />
            <Button title='Salvar' onPress={()=>navigation.navigate('Mesa')} style={e.botao}/>
            <Button title='Cancelar' onPress={()=>navigation.navigate('Login')} style={e.botao}/>
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
 
export default Cadastro;
