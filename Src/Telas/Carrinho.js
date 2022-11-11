import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput } from 'react-native';

import { CarrinhoContexto } from '../Contexto/CarrinhoContexto';
import { MesaContexto } from '../Contexto/MesaContexto';
import { UsuarioContexto } from '../Contexto/UsuarioContexto';

import api from '../../api';

const Carrinho = ({navigation}) => {

    useEffect(()=>{
        atualizaTotal()
    },produtosCarrinho)

    const [produtosCarrinho, setProdutosCarrinho] = React.useContext(CarrinhoContexto)
    const [totalCarrinho, setTotalCarrinho] = React.useState(0)
    const [pedido, setPedido] = React.useState();
    const [observacao, setObservacao] = React.useState('');
    const [mesa, setMesa] = React.useContext(MesaContexto);
    const [usuario, alteraUsuario] = React.useContext(UsuarioContexto)

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
        console.log(usuario)
        const produtos=[]
        produtosCarrinho.map(cp =>{
            produtos.push({
                id_produto:cp.id,
                quantidade:cp.quantidade
            })
        })
        const objPedido={
            //mesa:mesa,
            mesa:20,
            observacao:observacao,
            id_cliente:1,
            //id_cliente:usuario.id,
            produto:produtos
        }
        setPedido(objPedido)
        objPedido.produtos = []
        api.post("/pedidos/insere",objPedido)
            .then(res => {
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
        <View>
            {
                produtosCarrinho == 0 ? <Text>Nenhum Produto no Carrinho</Text>:
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
            <Button
                title="Fazer Pedido"
                onPress={() => {navigation.navigate('Pagamento'), pagarClicado()}}
            />
        </View>
     );
}

const e = StyleSheet.create({
    container:{
        margin:10,
        padding: 10,
        borderRadius: 5,
        flexDirection:"row",
        borderWidth: 1,
        borderColor: "#CCC",
        backgroundColor:"white"
    },
    containerInfo:{
        marginLeft:10,
    },
    text:{
        fontWeight:"bold",
        fontSize: 15,
    },
    title:{
        margin:20,
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 20,
    },
    btnView:{
        flexDirection:"row",
        alignItems:"center",
    },
    preco:{
        color:'#009688',
        fontWeight:"bold",
    },
    img:{
        width:70,
        height:100,
    },
    btnRound:{
        backgroundColor:"#009688",
        color:"white",
        borderRadius: 50,
        textAlign:"center",
        paddingTop: 10,
        width:40,
        height:40,
        margin:15,
    },
    textInput:{
        padding:15,
        borderWidth: 1,
        margin:5,
        borderColor: "#CCC"
    },
    total:{
        color:"#009688",
        margin:20,
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 20,
    },
})
 
export default Carrinho;