import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Cardapio from '../Telas/Cardapio';
import Login from '../Telas/Login';
import { UsuarioContexto } from '../Contexto/UsuarioContexto';
import { MesaProvedor } from '../Contexto/MesaContexto';
import { ProdutoProvedor } from '../Contexto/ProdutosContexto';
import { CategoriaProvedor } from '../Contexto/CategoriaContexto';
import { CarrinhoProvedor } from '../Contexto/CarrinhoContexto';

const Drawer = createDrawerNavigator();

const Menu = ()=>{

    const [usuario, alteraUsuario] = React.useContext(UsuarioContexto);
    
    return(
        <MesaProvedor>
            <ProdutoProvedor>
                <CategoriaProvedor>
                    <CarrinhoProvedor>
                        <NavigationContainer>
                            <Drawer.Navigator>
                                {usuario.id == undefined ?(
                                    <Drawer.Screen name="Login" component={Login} />
                                ): (
                                    <Drawer.Screen name="Cardápio" component={Cardapio} />
                                )
                                }			
                            </Drawer.Navigator>
                        </NavigationContainer>
                    </CarrinhoProvedor>
                </CategoriaProvedor>
            </ProdutoProvedor>
        </MesaProvedor>
    );
}

export default Menu;