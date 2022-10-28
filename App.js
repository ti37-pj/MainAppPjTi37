import { StyleSheet, Text, View } from 'react-native';
import Menu from './Src/Componentes/Menu/Index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
	
  	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Cadarpio" component={Menu} />
			</Drawer.Navigator>
		</NavigationContainer>
	)
}

const e = StyleSheet.create({
});
