import React from 'react';
import { StyleSheet,Button } from 'react-native';
import { UsuarioProvedor } from './Src/Contexto/UsuarioContexto';
import Menu from './Src/Telas/Menu';
import { MesaProvedor } from './Src/Contexto/MesaContexto';

export default function App() {
  	return (
		<UsuarioProvedor>
			<MesaProvedor>
				<Menu/>
			</MesaProvedor>
		</UsuarioProvedor>
	)
}

const e = StyleSheet.create({
});
