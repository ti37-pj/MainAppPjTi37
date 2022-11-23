import React, { useEffect } from 'react';
import { Divider } from '@mui/material';
import { StyleSheet, Text,  Image, Modal,View,TextInput, ScrollView } from 'react-native';
import { Box, select } from "@react-native-material/core";
import { PedidoContexto } from "../Contexto/PedidoContexto";
import { CategoriaContexto } from '../Contexto/CategoriaContexto';
import SelectDropdown from 'react-native-select-dropdown'
import { UsuarioContexto } from '../Contexto/UsuarioContexto';
import api from '../../api';

import MyButton from "../Componentes/MyButton";
import MyText from "../Componentes/MyText";
import MyScreen from "../Componentes/MyScreen";
import MyDropdown from "../Componentes/MyDropdown";
import MyTitle from '../Componentes/MyTitle';

const Pedido = () =>{

    const {pedidos, alteraPedidos, buscaPedidoDaMesa } = React.useContext(PedidoContexto)
    const buscaCategoria = React.useContext(CategoriaContexto)
    const ModoDePagamento =[
        { label: 'Cartão', value: '1' },
        { label: 'Dinheiro', value: '2' },
        { label: 'Pix', value: '3' },
    ];
    const [ pagamentoSelecionado, alteraPagemento ] = React.useState('')
    const [observacaoVenda, setObservacao] = React.useState('');
    const [usuario, alteraUsuario] = React.useContext(UsuarioContexto)

    const [pedidoZerado, alteraPedidoZerado] = React.useState();

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

    
    const cicloChamadaPedido = () => {
        
        buscaPedidoDaMesa()
        setTimeout(() => {
            cicloChamadaPedido();
        }, 3000);

    }
    // cicloChamadaPedido();

    useEffect(() => {
        cicloChamadaPedido();
    }, []);

    return(
        <View style={e.screenView}>
            <View style={e.headerVenda}>
                <TextInput placeholder='Observações para o garçom' style={e.textInput} multiline={true} numberOfLines={2} onChangeText={(e)=>setObservacao(e)}/>
                <MyDropdown label="Forma de pagamento" data={ModoDePagamento} onSelect={alteraPagemento} />


            </View>
            <MyScreen>
                <MyText style={e.Texto}>  </MyText>
                { pedidoZerado == true?
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
                        <Box style={e.Pedido} key={i}>
                            <Box style={e.Linha2}>
                                <View style={e.Linha}><MyTitle >  #{p.id} </MyTitle>:<MyText > {p.status} </MyText></View>
                                <MyText > {p.observacao} </MyText>
                            </Box>
                            <View style={e.scrollx}>
                            {
                                p.produtos.map((produto, index) =>
                                <Box style={e.produto} key={index}>
                                    <Image style={e.img}  source={{uri:produto.imagem_url}} />
                                    <Text>{produto.nome}</Text>
                                    <Text>{buscaCategoria(produto.id_categoria)}</Text>
                                    <View style={e.Linha}> <Text style={e.preco}>{produto.quantidade}</Text> X <Text style={e.preco}>R$:{produto.preco_venda}</Text></View>

                                </Box>
                                )
                            }
                            </View>
                            <Divider/> 
                        </Box>
                    )
                }
            </MyScreen>
        
            <MyText fixed={true} > Total: R$ {calculaTotal()} </MyText>
            <MyButton title='Pagar' right={true} principal={true} onPress={() => {navigation.navigate('Login'), insereVenda()}} />
        </View>
    );
}
const e = StyleSheet.create({
    produto:{
        width:160,
        alignItems: "center",
        padding:10,
        paddingTop:0,
        margin:10,
        marginTop:0,
    },
    Imagem:{
        width:50,
        height:50,
        borderRadius: "100%",
        margin: 25
    },
    Pedido:{
        width:"100%",
        marginTop:10,
        padding: 25,
        position: "relative"
    },
    Nome:{
        textAlign: "center",
        padding: 10,
        fontWeight:  "bold" ,
        fontSize: 25,
    },
    Texto:{
        padding: 10
    },
    content:{
    },
    scrollx:{
        flexDirection: "row",
        alignItems: "center",
        overflow: "auto"
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
        marginHorizontal:"auto",
        width:120,
        height:120,
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
        marginHorizontal:5,
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