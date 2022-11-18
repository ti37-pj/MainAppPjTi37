import React from 'react';
import { StyleSheet, Text,  Image, Modal } from 'react-native';
import { Box } from "@react-native-material/core";
import { Button } from "@react-native-material/core";
import { PedidoContexto } from "../Contexto/PedidoContexto";
import axios from 'axios';

const Pedido = () =>{

  const [produtosPedido, alteraProdutosPedido ] = React.useContext(PedidoContexto) 
  console.log(produtosPedido)

    const calculaTotal = () => {
        let precoTotal = 0
        produtosPedido.map(p=>{
            precoTotal += parseFloat(p.preco_venda * p.quantidade)
        })
        return(
            precoTotal.toFixed(2).replace(".",",")
        )
    }

    return(
        
            <Box  >
                { produtosPedido == 0?
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
                  produtosPedido.map((p,i) => 

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
                                <Text  style={e.Texto2} >  Preço: {p.preco_venda} </Text>
                                <Text style={e.Texto3} >  Qtd: {p.quantidade} </Text>
                                <Text> Total: R$ {(p.preco_venda * p.quantidade).toFixed(2).replace(".",",")} </Text>
                            </Box>
                        </Box>
                    </Box>
                )}

                <Box style={e.BotaoPagar}>

                    <Button title='Pagar' />
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
    }
 
});

export default Pedido;