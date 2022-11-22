import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput } from 'react-native';

import MyScreen from "../Componentes/MyScreen";
import MyButton from "../Componentes/MyButton";
import MyText from "../Componentes/MyText";


import { CarrinhoContexto } from '../Contexto/CarrinhoContexto';
import { MesaContexto } from '../Contexto/MesaContexto';
import { UsuarioContexto } from '../Contexto/UsuarioContexto';

import Icon from 'react-native-vector-icons/FontAwesome'

import api from '../../api';

const Carrinho = ({navigation}) => {

    useEffect(()=>{
        atualizaTotal()
    },produtosCarrinho)

    const btnVoltar = () => {
        navigation.navigate('Cardápio')
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Icon.Button
                    name='chevron-left' 
                    onPress={btnVoltar}
                    size={24}
                    color="#000"
                    backgroundColor="transparent"
                />
            )
        });
    }, [navigation])

    const [produtosCarrinho, setProdutosCarrinho] = React.useContext(CarrinhoContexto)
    const [totalCarrinho, setTotalCarrinho] = React.useState(0)
    const [observacao, setObservacao] = React.useState('');
    const [mesa, setMesa] = React.useContext(MesaContexto);
    const [usuario, alteraUsuario] = React.useContext(UsuarioContexto)
    //console.log(produtosCarrinho)

    const atualizaTotal = () => {
        let precoTotal = 0
        produtosCarrinho.map(c=>{
            precoTotal += parseFloat(c.total)
        })
        setTotalCarrinho(precoTotal)
    }

    const removeDoCarrinho = (remove) => {

        const removeProduto = produtosCarrinho.filter(c=>{
            if (c.id != remove.id){
                return c
            }
        })
        setProdutosCarrinho(removeProduto)
    }


    const pagarClicado = () => {
        inserePedido()
    }

    const inserePedido = () => {
        //console.log(usuario)
        const produtos=[]
        produtosCarrinho.map(cp =>{
            produtos.push({
                id_produtos:cp.id,
                quantidade:cp.quantidade
            })
        })
        // console.log('produtos')
        // console.log(produtos)
        const objPedido={
            mesa:mesa,
            observacao:observacao,
            id_cliente:usuario.id,
            produtos:produtos
        }
        // console.log('objPedido')
        // console.log(objPedido)
        api.post("/pedidos/insere",objPedido)
            .then(res => {
                console.log('resposta')
                console.log(res)
            })
            .catch(res=> console.log(res))
    }
    
    const contador = (produto,contado) => {

        produto.quantidade += contado == false ? -1: 1;
        produto.quantidade = produto.quantidade < 1 ? 1 : produto.quantidade
        
        produto.total = produto.quantidade * produto.preco

        const novoCarrinho = produtosCarrinho.map(c=>{
            if (c.id == produto.id){
                return produto
            }
            return c
        })

        setProdutosCarrinho(novoCarrinho)

    }

    return (
        <View style={e.screenView}>
<MyScreen>
            {
                produtosCarrinho == 0 ? <MyText>Nenhum Produto no Carrinho</MyText>:
                <View>
                {   
                    produtosCarrinho.map(c =>{
                    return<View style={e.container} key={c.id} >
                        <Image style={e.img}  source={{uri:c.imagem}} />
                        <View style={e.containerInfo} >
                            <Text style={e.text}>{c.nome}</Text>
                            <Text style={e.preco} >R$:{c.total}</Text>
                            <View style={e.btnView} >
                                <TouchableOpacity onPress={()=> contador(c,false)} >
                                    <Text style={e.btnRound}>-</Text>
                                </TouchableOpacity>
                                <Text>{c.quantidade}</Text>
                                <TouchableOpacity onPress={()=> contador(c,true)} >
                                    <Text style={e.btnRound}>+</Text>
                                </TouchableOpacity>  
                                <TouchableOpacity onPress={()=> removeDoCarrinho(c)}>
                                    <Text>Remover</Text>
                                </TouchableOpacity>
                            </View> 
                        </View>
                    </View>
                    })
                }
                </View>
            }
            <TextInput placeholder='Observações sobre o pedido' style={e.textInput} multiline={true} numberOfLines={4} onChangeText={(e)=>setObservacao(e)}/>
            <Text style={e.total} >Preço do Pedido:R${totalCarrinho}</Text>
            
        </MyScreen>
        <MyButton principal={true} fixed={true}
                title="Fazer Pedido"
                onPress={() => {navigation.navigate('Pedido'), pagarClicado()}}
            />
        </View>

        
     );
}

const e = StyleSheet.create({
    container:{
        margin:10,
        padding: 10,
        borderRadius: 1,
        flexDirection:"row",
        borderWidth: 1,
        borderColor: "#CCC",
        backgroundColor:"1a2426",
    },
    containerInfo:{
        marginLeft:10,
    },
    text:{
        fontWeight:"bold",
        fontSize: 15,
        textAlign: "center",
        color: '#rgb(33 33 33)',
        margin:5,
    },
    title:{
        margin:20,
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 36,
        color: '#rgb(33 33 33)',
        margin:5,
    },
    btnView:{
        flexDirection:"row",
        alignItems:"center",
    },
    preco:{
        color:'#1a2426',
        fontWeight:"bold",
    },
    img:{
        width:70,
        height:100,
        resizeMode: "cover",
        borderWidth: 5,
        borderColor: "#1a2426",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    btnRound:{
        backgroundColor:"#fff",
        borderRadius: 50,
        textAlign:"center",
        paddingTop: 10,
        width:40,
        height:40,
        margin:15,
    },
    textInput:{
        textAlign: "center",
        fontSize: 16,
        color: '#rgb(33 33 33)',
        placeholderTextColor:'#99999',
        marginTop:16,
        marginBottom:16,
        borderWidth: 1,
        borderColor: "#CCC",
        padding:15,
        backgroundColor:"#Fff",
    },
    total:{
        color:"#1a2426",
        margin:20,
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 20,
    },
    screenView:{
        height:'100%',
    }
})
 
export default Carrinho;