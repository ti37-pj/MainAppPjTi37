import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Cardapio from '../Telas/Cardapio';
import Login from '../Telas/Login';
import  Carrinho  from './Carrinho';
import  Pedido  from './Pedido';
import Status from "./Status";
import { UsuarioContexto } from '../Contexto/UsuarioContexto';
import { ProdutoProvedor } from '../Contexto/ProdutosContexto';
import { CategoriaProvedor } from '../Contexto/CategoriaContexto';
import { CarrinhoProvedor } from '../Contexto/CarrinhoContexto';
<<<<<<< HEAD
import { PedidoProvedor } from "../Contexto/PedidoContexto";

=======
import Carrinho from "./Carrinho";
import Mesa from "./Mesa";
import { MesaContexto } from "../Contexto/MesaContexto";
import Pedido from "./Pedido";
>>>>>>> cd433b9db152610c6ba07d59e2068660e88255ed

const Drawer = createDrawerNavigator();

const Menu = ()=>{

    const [usuario, alteraUsuario] = React.useContext(UsuarioContexto);
    const [mesa,] = React.useContext(MesaContexto)
    
    return(
            <ProdutoProvedor>
                <CategoriaProvedor>
                    <CarrinhoProvedor>
<<<<<<< HEAD
                        <PedidoProvedor>
                            <NavigationContainer>
                                <Drawer.Navigator>
                                    {usuario.id == undefined ?(
                                        <>
                                            <Drawer.Screen name="Pedido" component={Pedido} />  
                                            <Drawer.Screen name="Status" component={Status} />     
                                        </> 
                                            ): (
                                                <>
                                        <Drawer.Screen name="Login" component={Login} />
                                        <Drawer.Screen name="Cardápio" component={Cardapio} />
                                        <Drawer.Screen name="Carrinho" component={Carrinho} />
                                    </>
                                    )
=======
                        <NavigationContainer> 
                            <Drawer.Navigator>
                                {usuario.id == undefined ?(
                                    <Drawer.Screen name="Login" component={Login} />
                                ): (
                                    
                                    <>
                                        <Drawer.Screen name="Cardápio" component={Cardapio} />
                                        <Drawer.Screen name="Carrinho" component={Carrinho} />
                                        {(mesa === 0) && (
                                            <Drawer.Screen name="Mesa" component={Mesa} />
                                        )}
                                        <Drawer.Screen name="Pedido" component={Pedido} />
                                    </>
                                )
>>>>>>> cd433b9db152610c6ba07d59e2068660e88255ed
                                }			
                                </Drawer.Navigator>
                            </NavigationContainer>
                        </PedidoProvedor>                           
                    </CarrinhoProvedor>
                </CategoriaProvedor>
            </ProdutoProvedor>
    );
}

export default Menu;