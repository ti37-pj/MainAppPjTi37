import React from 'react';
import { StyleSheet, Text,  Image, Modal } from 'react-native';
import { Box } from "@react-native-material/core";
import { Button } from "@react-native-material/core";
import { PedidoContexto } from "../Contextos/PedidoContexto";
import axios from 'axios';

const Detalhes = ({exibeModal, alteraExibeModal}) =>{

    const [produtosPedido, alteraProdutosPedido ] = React.useContext(PedidoContexto) 
    console.log(produtosPedido)
    return(
        <Modal visible={exibeModal}>
            <Box  >
                <Button title="X" onPress={() => alteraExibeModal(!exibeModal)} style={e.Botao} />

                { produtosPedido == 0?
                 <Box style={e.Pedido} > 
                     <Text> Pedido Concluído </Text> 

                     <Image 
                        style={e.Imagem2}
                        source={{
                            uri: 'https://i.imgur.com/lC6bl2e.jpg',
                        }}
                        />

                 </Box>
                 :
                  produtosPedido.map(p => 

                    <Box style={e.Linha} >
                        <Image 
                            style={e.Imagem}
                            source={{
                        uri: p.imagem_url,
                        }}
                        />
                        <Box>
                            <Text style={e.Texto} > {p.nome} </Text>
                            <Box style={e.Linha2}>
                                <Text  style={e.Texto2} >  Preço: {p.preco_venda} </Text>
                                <Text style={e.Texto3} >  Qtd: {p.quantidade} </Text>
                                <Text> Total: R$ {(p.preco_venda * p.quantidade).toFixed(2).replace(".",",")} </Text>
                            </Box>
                        </Box>

                    </Box>
                )}

            </Box>
        </Modal>
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
        flexDirection: "row",
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
 
})  

export default Detalhes;