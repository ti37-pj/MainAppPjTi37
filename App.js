import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Cardapio from './Src/Telas/Cardapio';
import Cadastro from './Src/Telas/Cadastro';
import Login from './Src/Telas/Login';
import Mesa from './Src/Telas/Mesa';
import Pedido from './Src/Telas/Pedido';
import { UsuarioProvedor } from './Src/Contexto/UsuarioContexto';
import { MesaProvedor } from './Src/Contexto/MesaContexto';

const Drawer = createDrawerNavigator();

export default function App() {
	
  	return (
		<UsuarioProvedor>
			<MesaProvedor>
				<NavigationContainer>
					<Drawer.Navigator>			
							<Drawer.Screen name="Login" component={Login} />
							<Drawer.Screen name="Cardápio" component={Cardapio} />
							<Drawer.Screen name="Pedido" component={Pedido} />
							<Drawer.Screen name="Mesa" component={Mesa} />
							<Drawer.Screen name="Cadastro" component={Cadastro} />
					</Drawer.Navigator>
				</NavigationContainer>
			</MesaProvedor>
		</UsuarioProvedor>
	)
}

const e = StyleSheet.create({
});
