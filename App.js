import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Cardapio from './Src/Telas/Cardapio';

const Drawer = createDrawerNavigator();

export default function App() {
	
  	return (
		<NavigationContainer>
			<Drawer.Navigator>			
					<Drawer.Screen name="Cadarpio" component={Cardapio} />
			</Drawer.Navigator>
		</NavigationContainer>
	)
}

const e = StyleSheet.create({
});
