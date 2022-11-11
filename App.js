import { StyleSheet,Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Cardapio from './Src/Telas/Cardapio';
import Cadastro from './Src/Telas/Cadastro';
import Login from './Src/Telas/Login';
import Mesa from './Src/Telas/Mesa';
import Pedido from './Src/Telas/Pedido';
import Carrinho from './Src/Telas/Carrinho';
import { UsuarioProvedor } from './Src/Contexto/UsuarioContexto';
import { MesaProvedor } from './Src/Contexto/MesaContexto';
import { ProdutoProvedor } from './Src/Contexto/ProdutosContexto';
import { CategoriaProvedor } from './Src/Contexto/CategoriaContexto';
import { CarrinhoProvedor } from './Src/Contexto/CarrinhoContexto';

const Drawer = createDrawerNavigator();

export default function App() {
	
  	return (
		<UsuarioProvedor>
			<MesaProvedor>
				<ProdutoProvedor>
					<CategoriaProvedor>
						<CarrinhoProvedor>
							<NavigationContainer>
								<Drawer.Navigator>			
									<Drawer.Screen name="Login" component={Login} />
									<Drawer.Screen name="Mesa" component={Mesa} />
									<Drawer.Screen name="Cardápio" component={Cardapio} />
									<Drawer.Screen name="Carrinho" component={Carrinho} />
									<Drawer.Screen name="Pedido" component={Pedido} />
									<Drawer.Screen name="Cadastro" component={Cadastro} />
								</Drawer.Navigator>
							</NavigationContainer>
						</CarrinhoProvedor>
					</CategoriaProvedor>
				</ProdutoProvedor>
			</MesaProvedor>
		</UsuarioProvedor>
	)
}

const e = StyleSheet.create({
});
