import React, { useState } from "react";
import { UsuarioContexto } from "../Contexto/UsuarioContexto";
import { MesaContexto } from "../Contexto/MesaContexto";
import MyInput from "../Componentes/MyInput";
import MyScreen from "../Componentes/MyScreen";
import MyButton from "../Componentes/MyButton";
import MyTitle from "../Componentes/MyTitle";

const Mesa = ({navigation}) => {

    // const [ inputMesa, alteraInputMesa ] = React.useState('')

    const [, alteraMesaContexto ] = React.useContext(MesaContexto);

    const [mesa, alteraMesa] = useState(0);

    const ContinuarClicado = () => {

        if ( mesa > 0 && mesa < 30) {
            alteraMesaContexto(mesa)
            navigation.navigate('Cardápio');
        } 
        
        else {

            alert('Mesa Não Existente!')

        }

    }

    const [usuario,alteraUsuario] = React.useContext(UsuarioContexto)
    console.log (usuario)
    return ( 
        <MyScreen>
            <MyTitle> Selecionar Mesa </MyTitle>
            <MyInput  label='Número da Mesa' variant='outlined' onChangeText={alteraMesa} placeholder='Digite sua Mesa' />
            <MyButton title="Continuar" onPress={ContinuarClicado } principal={true} /> 
        </MyScreen>
     );
}


 
export default Mesa;