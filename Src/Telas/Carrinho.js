import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Carrinho = () => {

    const [ num, setNum] = React.useState(0);
    
    const mudaNum = (contador) => {
        const numero = contador == false ? (num-1) : (num+1);
        setNum(numero)
    }

    return ( 
        <View style={e.container} >
            <Image style={e.img}  source={{uri:"https://via.placeholder.com/70x100"}} />
            <View style={e.containerInfo} >
                <Text style={e.text} >Nome do Produto</Text>
                <Text style={e.preco} >R$:29,90</Text>
                <View style={e.btnView} >
                    <TouchableOpacity onPress={()=> mudaNum(false)} >
                        <Text style={e.btnRound}>-</Text>
                    </TouchableOpacity>
                    <Text>{num}</Text>
                    <TouchableOpacity onPress={()=> mudaNum(true)} >
                        <Text style={e.btnRound}>+</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity>
                        <Text>Remover</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        </View>
     );
}

const e = StyleSheet.create({
    container:{
        margin:10,
        padding: 10,
        borderRadius: 5,
        flexDirection:"row",
        borderWidth: 1,
        borderColor: "#CCC",
        backgroundColor:"white"
    },
    containerInfo:{
        marginLeft:10,
    },
    text:{
        fontWeight:"bold",
        fontSize: 15,
    },
    title:{
        margin:20,
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 20,
    },
    btnView:{
        flexDirection:"row",
        alignItems:"center",
    },
    preco:{
        color:'#009688',
        fontWeight:"bold",
    },
    img:{
        width:70,
        height:85,
    },
    btnRound:{
        backgroundColor:"#009688",
        color:"white",
        borderRadius: 50,
        textAlign:"center",
        paddingTop: 10,
        width:40,
        height:40,
        margin:15,
    },
})
 
export default Carrinho;