"use client";
import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css";
import "@/pages/css/productos.css";
import NavBar from "@/app/componentes/navbar";
import Boton from "@/app/componentes/boton/boton";
import { useRouter } from "next/router";

export default function Productos() {
  const router = useRouter();
  const [productos, setProductos] = useState([
    {
      nombre: "",
      precio: 0,
      descripcion: "",
      especificaciones_tecnicas: "",
      id: 0,
    },
  ]);

  React.useEffect(() => {
    axios.get("http://localhost:3001/productos").then((response) => {
      setProductos(response.data);
    });
  }, []);

  const tabla = productos.map((producto, i) => (
    <tr key={i}>
      <td>{producto.id}</td>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.descripcion}</td>
      <td>{producto.especificaciones_tecnicas}</td>
    </tr>
  ));

  return (
    <div>
      <NavBar />

      {/*<!-- ================ Lista de Productos ================= -->*/}
      <div className="lista  offset-md-2">
        <div className="infoProductos container">
          <div className="listadoHeader">
            <h2>Listado de Productos</h2>
            <Boton texto="agregar inventario" callBack={()=>{router.push("/producto_crear")}}/>
          </div>
          <table>
            <thead>
              <tr>
                <td>Código</td>
                <td>Producto</td>
                <td>Precio</td>
                <td>Descripción</td>
                <td>Especificaciones técnicas</td>
              </tr>
            </thead>

            <tbody>{tabla}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
