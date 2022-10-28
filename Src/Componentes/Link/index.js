import {useNavigation} from '@react-navigation/native'
import {Pressable} from "react-native";

const Link = ({to, children}) => {

    const navigation = useNavigation();

    const botaoPressionado = () => {
        navigation.navigate(to);
    }

    return ( 
        <Pressable onPress={botaoPressionado} >
            {children}
        </Pressable>
     );
}
 
export default Link;