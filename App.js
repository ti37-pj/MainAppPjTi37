import React from 'react';
import { StyleSheet,Button } from 'react-native';
import { UsuarioProvedor } from './Src/Contexto/UsuarioContexto';
import Menu from './Src/Telas/Menu';

export default function App() {
  	return (
		<UsuarioProvedor>
			<Menu/>
		</UsuarioProvedor>
	)
}

const e = StyleSheet.create({
});
