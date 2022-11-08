import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { CarrinhoContexto } from '../Contexto/CarrinhoContexto';

const Carrinho = () => {

    useEffect(()=>{
        atualizaTotal()
    },produtosCarrinho)

    const [produtosCarrinho, setProdutosCarrinho] = React.useContext(CarrinhoContexto)
    const [totalCarrinho, setTotalCarrinho] = React.useState(0)

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
        console.log(removeProduto)
        setProdutosCarrinho(removeProduto)
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
            <Text>Preço do Pedido:R${totalCarrinho}</Text>
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
})
 
export default Carrinho;