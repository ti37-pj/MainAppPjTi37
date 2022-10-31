import { Divider } from '@mui/material';
import { height } from '@mui/system';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import BtnRound from '../Componentes/btns/BtnRound';
import BtnSquare from '../Componentes/btns/BtnSquare';
import ProdutosContexto from '../Contexto/ProdutosContexto';
import ProdutoModal from '../Componentes/ProdutoModal';

const Produtos = () => {

    const [ openModal, setOpenModal ] = React.useState(false);

    const abreModal = () =>{
        setOpenModal(!openModal)
    }

    return ( 
        <View>
            <View style={e.container} >
            <Image style={e.img}  source={{uri:'https://via.placeholder.com/88x136'}} />
            <View style={e.containerInfo} >
                <Text style={e.text} >Nome do Produto</Text>
                <View style={e.containerCategoriaPreco} >
                    <Text>Categoria</Text>
                    <Text style={e.preco} >R$:29,90</Text>
                </View>
                <Divider/>
                <View style={e.btnView} >
                    <TouchableOpacity onPress={() => abreModal() } >
                        <Text style={e.btnSquare}>Detalhes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={e.btnRound}>+</Text>
                    </TouchableOpacity>     
                </View> 
            </View>
            </View>
            <ProdutoModal visible={openModal} onClose={() => setOpenModal(false)} />
        </View>
     );
}

const e = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"white",
        margin:10,
    },
    img:{
        width:88,
        height:136,
    },
    text:{
        fontWeight:"bold",
        fontSize: 18,
        marginBottom:10,
    },
    containerInfo:{
        marginLeft:10,
        backgroundColor:"red",
        width:200
    },
    btnView:{
        flexDirection:"row",
        alignItems:"center",
    },
    containerCategoriaPreco:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:5,
    },
    preco:{
        color:'#009688',
        fontWeight:"bold",
    },
    btnView:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:5,
        justifyContent:"space-between",
    },
    btnRound:{
        backgroundColor:"#009688",
        color:"white",
        borderRadius: 50,
        textAlign:"center",
        paddingTop: 10,
        width:40,
        height:40,
    },
    btnSquare:{
        backgroundColor:"#009688",
        color:"white",
        padding:10,
        borderRadius: 5,
    },
})
 
export default Produtos;