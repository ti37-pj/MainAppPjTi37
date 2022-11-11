import React from "react";
import { View } from "react-native";
import MyInput from "../Componentes/MyInput";
import MyScreen from "../Componentes/MyScreen";
import MyButton from "../Componentes/MyButton";
import MyTitle from "../Componentes/MyTitle";


const Cadastro = ({navigation}) => {

    

    return ( 
        <MyScreen>
            <MyInput label='Nome' variant='outlined' />
            <MyInput label='Cpf' variant='outlined' />
            <MyInput label='Telefone' variant='outlined' />
            <MyInput label='Email' variant='outlined' />
            <MyInput label='Senha' variant='outlined' />
            <MyInput label='Repetir Senha' variant='outlined' />
            <MyButton title='Salvar' onPress={()=>navigation.navigate('Mesa')} principal={true}/>
            <MyButton title='Cancelar' onPress={()=>navigation.navigate('Login')} principal={true} />
        </MyScreen>
     );
}

export default Cadastro;
