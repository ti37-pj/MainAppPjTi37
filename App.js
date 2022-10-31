import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Cardapio from './Src/Telas/Cardapio';
import Teste from './Src/Telas/Teste';

const Drawer = createDrawerNavigator();

export default function App() {
	
  	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Cadarpio" component={Cardapio} />
				<Drawer.Screen name="Teste" component={Teste} />
			</Drawer.Navigator>
		</NavigationContainer>
	)
}

const e = StyleSheet.create({
});
