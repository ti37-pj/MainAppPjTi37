import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Cardapio from '../Telas/Cardapio';
import Login from '../Telas/Login';
import  Carrinho  from './Carrinho';
import  Pedido  from './Pedido';
import Status from "./Status";
import { UsuarioContexto } from '../Contexto/UsuarioContexto';
import { MesaProvedor } from '../Contexto/MesaContexto';
import { ProdutoProvedor } from '../Contexto/ProdutosContexto';
import { CategoriaProvedor } from '../Contexto/CategoriaContexto';
import { CarrinhoProvedor } from '../Contexto/CarrinhoContexto';
import { PedidoProvedor } from "../Contexto/PedidoContexto";


const Drawer = createDrawerNavigator();

const Menu = ()=>{

    const [usuario, alteraUsuario] = React.useContext(UsuarioContexto);
    
    return(
        <MesaProvedor>
            <ProdutoProvedor>
                <CategoriaProvedor>
                    <CarrinhoProvedor>
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
                                }			
                                </Drawer.Navigator>
                            </NavigationContainer>
                        </PedidoProvedor>                           
                    </CarrinhoProvedor>
                </CategoriaProvedor>
            </ProdutoProvedor>
        </MesaProvedor>
    );
}

export default Menu;