import React from 'react';
import { View, Text } from 'react-native';
import Link from '../Link';

const BtnNavi = (props) => {
    return ( 
        <View>
            <Link to={props.rota} >
                <Text>{props.title}</Text>
            </Link>
        </View>
     );
}
 
export default BtnNavi;