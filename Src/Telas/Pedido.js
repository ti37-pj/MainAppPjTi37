import React, { useEffect } from 'react';
import { Divider } from '@mui/material';
import { StyleSheet, Text,  Image, Modal,View,TextInput } from 'react-native';
import { Box, select } from "@react-native-material/core";
import { Button } from "@react-native-material/core";
import { PedidoContexto } from "../Contexto/PedidoContexto";
import { CategoriaContexto } from '../Contexto/CategoriaContexto';
import SelectDropdown from 'react-native-select-dropdown'
import { UsuarioContexto } from '../Contexto/UsuarioContexto';
import api from '../../api';


const Pedido = () =>{

    const {pedidos, alteraPedidos, buscaPedidoDaMesa } = React.useContext(PedidoContexto)
    const buscaCategoria = React.useContext(CategoriaContexto)
    const ModoDePagamento =[ "Cartão", "Dinheiro", "Pix" ] 
    const [ pagamentoSelecionado, alteraPagemento ] = React.useState('')
    const [observacaoVenda, setObservacao] = React.useState('');
    const [usuario, alteraUsuario] = React.useContext(UsuarioContexto)

    const calculaTotal = () => {
        let precoTotal = 0
        pedidos.map(pedido=>{
            pedido.produtos.map(produto =>{
                precoTotal += parseFloat(produto.preco_venda * produto.quantidade)
            }

            )
            
        })
        return(
            precoTotal.toFixed(2).replace(".",",")
        )
    }
    

    const insereVenda  = () =>{
        const listaPedidos = [];
        pedidos.map(pedido=>{
            listaPedidos.push({
                id_pedidos:pedido.id
            })

        })
        const objVenda={
            pedidos:listaPedidos,
            total_custo:calculaTotal().replace(",","."),
            total_venda:calculaTotal().replace(",","."),
            forma_de_pagamento:pagamentoSelecionado,
            observacao:observacaoVenda,
            id_cliente:usuario.id,
        }
        
        api.post("/vendas/insere/",objVenda)
            .then(res => {
              //  console.log(res)
            })
            .catch(res=> console.log(res))
    }

    console.log("produtosPedido: ")
    console.log(pedidos)
    useEffect(() => {
        buscaPedidoDaMesa()
    }, []);

    return(
        
            <Box  >
                { pedidos == 0?
                 <Box style={e.Pedido} > 
                     <Text> Pedido Concluído </Text> 

                     <Image 
                        style={e.Imagem}
                        source={{
                            uri: 'https://i.imgur.com/lC6bl2e.jpg',
                        }}
                        />

                 </Box>
                 :
                 pedidos.map((p,i) => 

                    <Box style={e.Linha} key={i}>
                        <Image 
                            style={e.Imagem}
                            source={{
                        uri: p.imagem_url,
                        }}
                        />
                        <Box>
                            <Text style={e.Texto} > {p.nome} </Text>
                            <Box style={e.Linha2}>
                                <Text  style={e.Texto2} >  Id do Pedido: {p.id} </Text>
                                <Text style={e.Texto3} >  Observação: {p.observacao} </Text>
                                <Text style={e.Texto3} >  status: {p.status} </Text>
                            </Box>
                            <>
                                {
                                    p.produtos.map((produto, index) =>
                                    <Box  key={index}>
                                        <Image style={e.img}  source={{uri:produto.imagem_url}} />
                                        <View style={e.containerInfo} >
                                            <Text style={e.text}>{produto.nome}</Text>
                                            <View style={e.containerCategoriaPreco} >
                                                <Text>{buscaCategoria(produto.id_categoria)}</Text>
                                                <Text style={e.preco}>R$:{produto.preco_venda}</Text>
                                            </View>
                                            <Divider/> 
                                        </View>
                                    </Box>
                                    )
                                }
                            </>
                        </Box>
                    </Box>
                )}

                <Box style={e.BotaoPagar}>

                <TextInput placeholder='Observações sobre o pedido' style={e.textInput} multiline={true} numberOfLines={4} onChangeText={(e)=>setObservacao(e)}/>

                    <SelectDropdown
                        data={ModoDePagamento}
                        onSelect={(selectedItem, index) => {
                            alteraPagemento(selectedItem)
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />

                    <Button title='Pagar' onPress={() => {navigation.navigate('Login'), insereVenda()}} />
                    <Text style={e.TextoTotal} > Total: R$ {calculaTotal()} </Text>

                </Box>

            </Box>
        
    );
}

const e = StyleSheet.create({
    Imagem:{
        width:50,
        height:50,
        borderRadius: "100%",
        margin: 25
    },
    Pedido:{
        marginTop:70,
        flexDirection: "row",
        alignItems: "center",
        padding: 25,
    },
    Nome:{
        textAlign: "center",
        padding: 10,
        fontWeight:  "bold" ,
        fontSize: 25,
    },
    Texto:{
        padding: 1
    },
    Linha:{
        flexDirection: "row",
        alignItems: "center"
        
    },
    Linha2:{
        justifyContent:"space-between"
    },
    Botao:{
        borderRadius: 5,
        padding: 3,
        width: 100,
        marginTop: 8,
        marginLeft: 15,
        textAlign:"center",
        backgroundColor:"red",
        marginLeft:125
    },

    TextoTotal:{
        fontSize: 18,
        textAlign: "right",
        padding: 10,
        margin: 3,
    },
    BotaoPagar:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent:"space-between",
      padding:20,
      backgroundColor:"#fff"
    },
    img:{
        width:88,
        height:136,
        resizeMode: "cover",
        borderWidth: 2,
        borderColor: "#1a2426",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    containerInfo:{
        width:200,
        height:"100%",
        margin:0,
        padding:20,
    },
    text:{
        fontWeight:"bold",
        fontSize: 18,
        marginBottom:10,
    },
    containerCategoriaPreco:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:5,
    },
    preco:{
        color:'#000',
        fontWeight:"bold",
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
 
});

export default Pedido;