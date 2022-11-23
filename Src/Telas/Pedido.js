import React, { useEffect } from 'react';
import { Divider } from '@mui/material';
import { StyleSheet, Text,  Image, Modal,View,TextInput } from 'react-native';
import { Box, select } from "@react-native-material/core";
import { PedidoContexto } from "../Contexto/PedidoContexto";
import { CategoriaContexto } from '../Contexto/CategoriaContexto';
import SelectDropdown from 'react-native-select-dropdown'
import { UsuarioContexto } from '../Contexto/UsuarioContexto';
import api from '../../api';

import MyButton from "../Componentes/MyButton";
import MyText from "../Componentes/MyText";
import MyScreen from "../Componentes/MyScreen";
import MyInput from "../Componentes/MyInput";

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
            })
            .catch(res=> console.log(res))
    }

    console.log("produtosPedido: ")
    console.log(pedidos)

    useEffect(() => {
        buscaPedidoDaMesa();
    }, [pedidos]);

    return(
        <View style={e.screenView}>
            <View style={e.headerVenda}>
                <TextInput placeholder='Observações sobre o pedido' style={e.textInput} multiline={true} numberOfLines={2} onChangeText={(e)=>setObservacao(e)}/>
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
                <MyButton title='Pagar' onPress={() => {navigation.navigate('Login'), insereVenda()}} />
                <MyText> Total: R$ {calculaTotal()} </MyText>

            </View>
            <MyScreen>
                { pedidos == 0?
                    <Box style={e.Pedido} > 
                        <MyText> Pedido Concluído </MyText> 

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
                            <MyText style={e.Texto} > {p.nome} </MyText>
                            <Box style={e.Linha2}>
                                <MyText >  Id do Pedido: {p.id} </MyText>
                                <MyText >  Observação: {p.observacao} </MyText>
                                <MyText >  status: {p.status} </MyText>
                            </Box>
                            <>
                                {
                                    p.produtos.map((produto, index) =>
                                    <Box  key={index}>
                                        <Image style={e.img}  source={{uri:produto.imagem_url}} />
                                        <View  >
                                            <MyText>{produto.nome}</MyText>
                                            <View style={e.containerCategoriaPreco} >
                                                <MyText>{buscaCategoria(produto.id_categoria)}</MyText>
                                                <MyText style={e.preco}>R$:{produto.preco_venda}</MyText>
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
            </MyScreen>
        </View>
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
    headerVenda:{
        position:"absolute",
        height:"29%",
        width:"100%", 
        borderTopLeftRadius:32,
        borderTopRightRadius:32,
        top:0, 
        paddingLeft:10,
        paddingRight:10,
        zIndex: 999,
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
        height:99,
        textAlign: "center",
        fontSize: 16,
        color: '#f8f8f8',
        placeholderTextColor:'#99999',
        marginTop:16,
        marginBottom:16,
        borderWidth: 1,
        borderColor: "#CCC",
        padding:15,
        backgroundColor:"#FFF",
    },
    screenView:{
        height:'100%',
    },
 
});

export default Pedido;