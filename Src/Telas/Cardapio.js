import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BtnNavi from '../Componentes/btns/BtnNavi';
import Produtos from './Produtos';
import Carrinho from './Carrinho';

const Stack = createNativeStackNavigator();

const Cardapio = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen name="Produtos" component={Produtos} />
            <Stack.Screen name="Carrinho" component={Carrinho} />
        </Stack.Navigator>
     );
}
 
export default Cardapio;