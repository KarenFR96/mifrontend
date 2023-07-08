"use client"
import React from "react";
import "@/app/componentes/boton/boton.css"

const Boton = ( props: { texto: string, callBack: Function  }) => {
    return (
        <button className="boton" onClick={function(){props.callBack()}}>{props.texto}</button>
    )
}

export default Boton;