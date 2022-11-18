import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtos from './Produtos';

const Stack = createNativeStackNavigator();

const Cardapio = ({navigation}) => {

    const botaoCarrinhoPressionado = () =>  {
        navigation.navigate('Carrinho');
    };

    /*React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <MyButton principal={true} title='Carrinho' onPress={botaoCarrinhoPressionado} />
        });
    }, [navigation])*/  

    return (
        <Produtos/>
    )
}
 
export default Cardapio;