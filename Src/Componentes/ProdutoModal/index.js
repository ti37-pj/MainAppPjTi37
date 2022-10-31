import React, {useEffect} from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const ProdutoModal = (props) => {

    const [ visible, setVisible ] = React.useState(props.visible)

    useEffect(() => {
        setVisible(props.visible)
    }, [props.visible])

    const mandarParaCarrinho = () => {
    }

    return ( 
        <View>
            <Modal visible={visible} >
                <TouchableOpacity onPress={ () => {
                    setVisible(false);
                    props.onClose();
                }}>
                    <Text style={e.fechar} >X</Text>
                </TouchableOpacity>
                <Text style={e.titulo}>nome</Text>
                <Text style={e.subtitulo}>Ingredientes</Text>
                <Text style={e.descricao}>descricao</Text>
                <Text style={e.preco}> Preço: R$preco</Text>
                <TouchableOpacity onPress={()=>mandarParaCarrinho()} >
                    <Text style={e.btnCarrinho} >Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </Modal>
        </View>
     );
}

const e = StyleSheet.create({
    container:{
        flexDirection:"row",
    },
    fechar:{
        textAlign:"right",
        fontSize:25,
        fontWeight: 'bold',
        padding:20,
    },
    titulo:{
        fontSize:30,
        fontWeight: 'bold',
        textAlign:"center",

    },
    subtitulo:{
        marginTop:20,
        marginBottom:20,
        fontSize:20,
        textAlign:"center",
    },
    descricao:{
        margin:5,
        padding:10,
        borderWidth:1,
        borderColor:"#CCC",
        fontSize:15
    },
    preco:{
        marginTop:20,
        marginBottom:20,
        textAlign:"center",
        fontSize:25

    },
    btnCarrinho:{
        marginTop:20,
        backgroundColor:"#303F9F",
        padding: 10,
        borderRadius: 5,
        flex: 1,
        margin: 5,
        margin:"auto",
        color:"white",
        fontSize:25
    }
})
 
export default ProdutoModal