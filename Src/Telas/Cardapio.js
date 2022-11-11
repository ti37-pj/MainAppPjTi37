import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtos from './Produtos';
import {Button} from 'react-native'

const Stack = createNativeStackNavigator();

const Cardapio = ({navigation}) => {

    const botaoCarrinhoPressionado = () =>  {
        navigation.navigate('Carrinho');
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button title='Carrinho' onPress={botaoCarrinhoPressionado} />
        });
    }, [navigation])

    return (
        <Produtos/>
    )
}
 
export default Cardapio;