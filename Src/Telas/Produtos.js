import { Divider } from '@mui/material';
import { height } from '@mui/system';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import BtnRound from '../Componentes/btns/BtnRound';
import BtnSquare from '../Componentes/btns/BtnSquare';
import ProdutosContexto from '../Contexto/ProdutosContexto';
import ProdutoModal from '../Componentes/ProdutoModal';
import api from '../../api';

import { ProdutoContexto } from '../Contexto/ProdutosContexto';
import { CategoriaContexto } from '../Contexto/CategoriaContexto';

const Produtos = () => {

    const [produto, setProduto]= React.useContext(ProdutoContexto)
    //const [categorias, setCategoria]= React.useContext(CategoriaContexto)
    const buscaCategoria = React.useContext(CategoriaContexto)

    const [ produtoSelecionado, setProdutoSelecionado ] = React.useState(null);
    const [ openModal, setOpenModal ] = React.useState(false);

    const abreModal = (p) =>{
        setOpenModal(!openModal)
        setProdutoSelecionado(p)
    }

    return ( 
        <View>
            {
                produto==0 ? <Text>Nenhum Produto Encontrado</Text>
                :
                <View>
                {
                    produto.map(p =>{
                    return<View style={e.container} key={p.id} >
                        <Image style={e.img}  source={{uri:p.imagem_url}} />
                        <View style={e.containerInfo} >
                                <Text style={e.text}>{p.nome}</Text>
                                <View style={e.containerCategoriaPreco} >
                                    <Text>{buscaCategoria(p.id_categoria)}</Text>
                                    <Text style={e.preco}>R$:{p.preco_venda}</Text>
                                </View>
                                <Divider/>
                                <View style={e.btnView} >
                                    <TouchableOpacity onPress={() => abreModal(p) } >
                                        <Text style={e.btnSquare}>Detalhes</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={e.btnRound}>+</Text>
                                    </TouchableOpacity>     
                                </View> 
                            </View>
                    </View>
                    })
                }
                </View>
            }
            <ProdutoModal produto={produtoSelecionado} visible={openModal} onClose={() => setOpenModal(false)} />
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