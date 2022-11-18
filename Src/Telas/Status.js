import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from "@react-native-material/core";
import { Box } from "@react-native-material/core";
import React from 'react';

import Resumo from '../Componentes/Resumo';
import StatusPedido from '../Componentes/StatusPedido'
import Detalhes from '../Componentes/Detalhes'
import { PedidoProvedor, PedidoContexto } from '../Contexto/PedidoContexto';


export default function Status() {

  const [ exibeModal , alteraExibeModal ] = React.useState( false );
  const [ pedido, alteraPedido ] = React.useState(9)


  return (
    <Box>
      <PedidoProvedor>
        <Box>
          <Resumo alteraPedido={alteraPedido}/>
          { pedido == null?
            <Box style={e.Pedido} > 
              <Text> Pedido Concluído </Text> 

              <Image 
                style={e.ImagemConcluido}
                  source={{
                   uri: 'https://i.imgur.com/lC6bl2e.jpg',
                   }}
               />

               <Button title="Voltar" />

            </Box>
          :
          <Box>
            
            <StatusPedido pedido={pedido} />

             {/* <Button title='Detalhes' style={e.Botao} onPress={() => alteraExibeModal( !exibeModal )  } />  */}
            {/* <Detalhes exibeModal={exibeModal} alteraExibeModal={alteraExibeModal} /> */}
          </Box>
          }
        </Box>    
      </PedidoProvedor>
    </Box> 
  );
}

const e = StyleSheet.create({
  Botao:{
    borderRadius: 5,
    padding: 3,
    width: 125,
    marginTop: 8,
    marginLeft: 15,

  },
  Imagem:{
    width:50,
    height:50,
    borderRadius: "100%",
    marginRight: 25,
  },
  ImagemConcluido:{
    width:85,
    height:85,
  },
  Pedido:{
    marginTop:70,
    alignItems: "center",
    padding: 25,
  },
    
})


