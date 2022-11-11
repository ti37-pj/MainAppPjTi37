import { Box } from "@react-native-material/core";
import { StyleSheet, Text, View, Image } from 'react-native';
import { PedidoContexto } from "../Contextos/PedidoContexto";
import React from "react";

const StatusPedido = ({pedido}) => {

    //const [ pedido, alteraPedido ] = React.useContext(PedidoContexto)
    const status = [
        { id:0, status:"aguardando",texto:"Aguardando" },
        { id:1, status:"confirmado",texto:"Confirmado" },
        { id:2, status:"preparando",texto:"Preparando" },
        { id:3, status:"concluido",texto:"Concluído" },
    ]
    let statusEncontrado = false

    console.log(pedido)
    return(
        <Box>
            {pedido == null? <Text> Carregando </Text> : status.map((s)=>{
                console.log(s.status)
                if( statusEncontrado == true ){
                    return
                }
                if( s.status == pedido.status ){
                    statusEncontrado=true
                }

                return <Box style={e.Pedido} >
                    <Image 
                        style={e.Imagem}
                        source={{ 
                            uri: statusEncontrado == true? "https://i.imgur.com/DvKmYCe.gif" : "https://i.imgur.com/lC6bl2e.jpg",
                        }}
                        />
                        
                    <Text style={e.Texto2} > {s.texto} </Text>
                </Box>
            })}

        </Box>
    
    );
}

const e = StyleSheet.create({
    Pedido:{
        marginTop:70,
        alignItems: "center",
        padding: 25,
    },
    Imagem:{
        width:50,
        height:50,
        borderRadius: "100%",
        marginRight: 25,
    },
    Texto2:{
        fontSize: 20
    }
})

export default StatusPedido;