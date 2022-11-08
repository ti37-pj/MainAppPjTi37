import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtos from './Produtos';
import Carrinho from './Carrinho';
import { ProdutoProvedor } from '../Contexto/ProdutosContexto';
import { CategoriaProvedor } from '../Contexto/CategoriaContexto';
import { CarrinhoProvedor } from '../Contexto/CarrinhoContexto';

const Stack = createNativeStackNavigator();

const Cardapio = () => {
    return (
        <CarrinhoProvedor>
            <CategoriaProvedor>
                <ProdutoProvedor>
                    <Stack.Navigator>
                        <Stack.Screen name="Produtos" component={Produtos} />
                        <Stack.Screen name="Carrinho" component={Carrinho} />
                    </Stack.Navigator>
                </ProdutoProvedor>
            </CategoriaProvedor> 
        </CarrinhoProvedor>
     );
}
 
export default Cardapio;