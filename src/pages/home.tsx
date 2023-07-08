"use client";
import axios from "axios";
import '@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css'
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [productos, setProductos] = useState([{ nombre: "", precio: 0, descripcion:"", especificaciones_tecnicas:"", id:0}]);

    axios.get("http://localhost:3001/productos")
    .then((response) => {
        setProductos(response.data)
    })

  return (
    <div className="container">
      <div className="contenedor-principal mx-auto">
        <li>{Home()}</li>
      </div>
    </div>
  );
}
