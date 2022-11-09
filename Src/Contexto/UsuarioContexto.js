import React, {createContext} from "react";


export const UsuarioContexto = createContext();


export const UsuarioProvedor = (props) => {

    const [usuario, alteraUsuario] = React.useState({})

    return ( 
        <UsuarioContexto.Provider value={[usuario,alteraUsuario]}>
            {props.children}
        </UsuarioContexto.Provider>
     );
}

