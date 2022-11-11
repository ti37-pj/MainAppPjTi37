import React from "react";
import MyInput from "../Componentes/MyInput";
import MyScreen from "../Componentes/MyScreen";
import MyButton from "../Componentes/MyButton";

const Cadastro = ({navigation}) => {

    

    return ( 
        <MyScreen>
            <MyInput label='Nome' variant='outlined' placeholder='Nome' />
            <MyInput label='Cpf' variant='outlined' placeholder='CPF'/>
            <MyInput label='Telefone' variant='outlined' placeholder='Telefone'/>
            <MyInput label='Email' variant='outlined' placeholder='Email'/>
            <MyInput label='Senha' variant='outlined' placeholder='Senha'/>
            <MyInput label='Repetir Senha' variant='outlined' placeholder='Repetir Senha'/>
            <MyButton title='Salvar' onPress={()=>navigation.navigate('Mesa')} principal={true}/>
            <MyButton title='Cancelar' onPress={()=>navigation.navigate('Login')} principal={true} />
        </MyScreen>
     );
}

export default Cadastro;
