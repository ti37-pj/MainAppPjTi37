import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Cardapio from '../Telas/Cardapio';
import Login from '../Telas/Login';
import { UsuarioContexto } from '../Contexto/UsuarioContexto';
import { ProdutoProvedor } from '../Contexto/ProdutosContexto';
import { CategoriaProvedor } from '../Contexto/CategoriaContexto';
import { CarrinhoProvedor } from '../Contexto/CarrinhoContexto';
import Carrinho from "./Carrinho";
import Mesa from "./Mesa";
import { MesaContexto } from "../Contexto/MesaContexto";

const Drawer = createDrawerNavigator();

const Menu = ()=>{

    const [usuario, alteraUsuario] = React.useContext(UsuarioContexto);
    const [mesa,] = React.useContext(MesaContexto)
    
    return(
            <ProdutoProvedor>
                <CategoriaProvedor>
                    <CarrinhoProvedor>
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
                                        
                                    </>
                                )
                                }			
                            </Drawer.Navigator>
                        </NavigationContainer>
                    </CarrinhoProvedor>
                </CategoriaProvedor>
            </ProdutoProvedor>
    );
}

export default Menu;