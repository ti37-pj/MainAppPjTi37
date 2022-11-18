import React, { createContext } from "react";

export const MesaContexto = createContext();
 
export function MesaProvedor (props) {

    const [ mesa, alteraMesa ] = React.useState(0);

    return (

        <MesaContexto.Provider value={[mesa, alteraMesa]}>

            {props.children}

        </MesaContexto.Provider>

    );

}
