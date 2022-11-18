import React, {useEffect} from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { CategoriaContexto } from '../../Contexto/CategoriaContexto';
import { CarrinhoContexto } from '../../Contexto/CarrinhoContexto';
import MyScreen from '../MyScreen';
import MyText from '../MyText';
import MyButton from '../MyButton';

import Icon from 'react-native-vector-icons/FontAwesome'

const ProdutoModal = (props) => {

    const [carrinho, setCarrinho] = React.useContext(CarrinhoContexto)
    const buscaCategoria = React.useContext(CategoriaContexto)
    const [ visible, setVisible ] = React.useState(props.visible)

    useEffect(() => {
        setVisible(props.visible)
    }, [props.visible])

    const colocarNoCarrinho = (produto) => {
        setCarrinho([...carrinho, produto])
    };

    const mandarParaCarrinho = () => {
        colocarNoCarrinho({
            id:props.produto.id,
			nome:props.produto.nome,
			preco:props.produto.preco_venda,
            quantidade:1,
            total:props.produto.preco_venda,
            imagem:props.produto.imagem_url
        })
        alert("Produto Inserido com Sucesso")
    }

    return ( 
        <View>
            <Modal animationType='slide' visible={visible} >
                <Icon.Button
                    size={24}
                    color="#000"
                    backgroundColor="transparent"
                    name='close'
                    onPress={ () => {
                        setVisible(false);
                        props.onClose();
                    }}>
                </Icon.Button>
                <MyScreen>
                    <MyText>{props.produto?.nome}</MyText>
                    <MyText>{buscaCategoria(props.produto?.id_categoria)}</MyText>
                    <MyText>{props.produto?.descricao}</MyText>
                    <MyText> Preço: R${props.produto?.preco_venda}</MyText>
                    <MyButton principal={true} title="Adicionar ao Carrinho" onPress={()=>{mandarParaCarrinho(); setVisible(false); props.onClose()} } />
                </MyScreen>
            </Modal>
        </View>
     );
}

/*const e = StyleSheet.create({
    container:{
        flexDirection:"row",
    },
    fechar:{
        textAlign:"right",
        fontSize:25,
        fontWeight: 'bold',
        padding:20,
    },
    titulo:{
        fontSize:30,
        fontWeight: 'bold',
        textAlign:"center",

    },
    subtitulo:{
        marginTop:20,
        marginBottom:20,
        fontSize:20,
        textAlign:"center",
    },
    descricao:{
        textAlign: "center",
        fontSize: 16,
        color: '#rgb(33 33 33)',
        margin:5,
    },
    preco:{
        textAlign: "center",
        fontSize: 16,
        color: '#rgb(33 33 33)',
        margin:5,

    },
    btnCarrinho:{
        marginTop:20,
        backgroundColor:"#009688",
        padding: 10,
        borderRadius: 5,
        flex: 1,
        margin: 5,
        margin:"auto",
        color:"white",
        fontSize:25
    }
})*/
 
export default ProdutoModal;