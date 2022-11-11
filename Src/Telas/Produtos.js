import { Divider } from '@mui/material';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';
import ProdutoModal from '../Componentes/ProdutoModal';
import { MesaContexto } from "../Contexto/MesaContexto";
import { ProdutoContexto } from '../Contexto/ProdutosContexto';
import { CategoriaContexto } from '../Contexto/CategoriaContexto';
import { CarrinhoContexto } from '../Contexto/CarrinhoContexto';



const Produtos = ({navigation}) => {

    const [ mesa, alteraMesa ] = React.useContext(MesaContexto)
    const [produto, setProduto]= React.useContext(ProdutoContexto)
    const [carrinho, setCarrinho] = React.useContext(CarrinhoContexto)
    const buscaCategoria = React.useContext(CategoriaContexto)

    const [ produtoSelecionado, setProdutoSelecionado ] = React.useState(null);
    const [ openModal, setOpenModal ] = React.useState(false);

    const abreModal = (p) =>{
        setOpenModal(!openModal)
        setProdutoSelecionado(p)
    }

    const colocarNoCarrinho = (produto) => {
        setCarrinho([...carrinho, produto])
    };

    const mandarParaCarrinho = (p) => {

        let idProduto = null;
        //console.log(p.id)
        carrinho?.map((pm,i) => {
            ///console.log(pm.id)
            idProduto = pm.id == p.id ? i : idProduto;
        })

        //console.log(idProduto)
        if(idProduto == null){
            
            colocarNoCarrinho({
                id:p.id,
                nome:p.nome,
                preco:p.preco_venda,
                quantidade:1,
                total:p.preco_venda,
                imagem:p.imagem_url
            })
        }else{
            carrinho[idProduto].quantidade += 1
        }

        alert("Produto Inserido com Sucesso")
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
                                    <TouchableOpacity onPress={()=>mandarParaCarrinho(p)} >
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
        width:200,
        height:"100%",
        margin:0,
        padding:20,
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