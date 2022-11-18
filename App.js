import React from 'react';
import { StyleSheet,Button } from 'react-native';
import { UsuarioProvedor } from './Src/Contexto/UsuarioContexto';
import Menu from './Src/Telas/Menu';
import { MesaProvedor } from './Src/Contexto/MesaContexto';


export default function App() {
  	return (
		<UsuarioProvedor>
<<<<<<< HEAD
			<Menu/>
			
=======
			<MesaProvedor>
				<Menu/>
			</MesaProvedor>
>>>>>>> cd433b9db152610c6ba07d59e2068660e88255ed
		</UsuarioProvedor>
	)
}

const e = StyleSheet.create({
});
