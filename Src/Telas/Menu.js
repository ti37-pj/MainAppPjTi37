import React from "react";
import { MesaContexto } from "../Contexto/MesaContexto";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { UsuarioContexto } from '../Contexto/UsuarioContexto';
import { ProdutoProvedor } from '../Contexto/ProdutosContexto';
import { CategoriaProvedor } from '../Contexto/CategoriaContexto';
import { CarrinhoProvedor } from '../Contexto/CarrinhoContexto';
import {PedidoProvedor} from '../Contexto/PedidoContexto';

import Carrinho from "./Carrinho";
import Mesa from "./Mesa";
import Cardapio from '../Telas/Cardapio';
import Login from '../Telas/Login';
import Pedido from "./Pedido";

import Icon from 'react-native-vector-icons/FontAwesome5'

const Drawer = createDrawerNavigator();

const Menu = ()=>{

    const [usuario, alteraUsuario] = React.useContext(UsuarioContexto);
    const [mesa,] = React.useContext(MesaContexto)
    
    return(
            <ProdutoProvedor>
                <CategoriaProvedor>
                    <CarrinhoProvedor>
                        <PedidoProvedor>
                        <NavigationContainer> 
                            <Drawer.Navigator>
                                {usuario.id == undefined ?(
                                    <Drawer.Screen name="Login" component={Login} />
                                ): (
                                    
                                    <>
                                        <Drawer.Screen name="Cardápio" component={Cardapio} options={{
                                            drawerIcon: ()=> <Icon name="utensils" size={24}></Icon>
                                        }} />
                                        <Drawer.Screen name="Carrinho" component={Carrinho} options={{
                                            drawerIcon: ()=> <Icon name="shopping-cart" size={24}></Icon>
                                        }} />
                                        {(mesa === 0) && (
                                            <Drawer.Screen name="Mesa" component={Mesa} />
                                        )}
                                        <Drawer.Screen name="Pedido" component={Pedido} options={{
                                            drawerIcon: ()=> <Icon name="file-invoice" size={24}></Icon>
                                        }} />
                                    </>
                                )}
                                </Drawer.Navigator>
                            </NavigationContainer>
                        </PedidoProvedor>                           
                    </CarrinhoProvedor>
                </CategoriaProvedor>
            </ProdutoProvedor>
    );
}

export default Menu;