"use client";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css";
import "@/pages/css/inventario.css";
import NavBar from "@/app/componentes/navbar";
import React from "react";
import Boton from "@/app/componentes/boton/boton";

export default function Inventario() {
  const [inventario, setInventario] = useState([
    {
      nombre: "",
      precio: 0,
      cantidad_inicial: "",
      vendidos: "",
      cantidad_actual: "",
      id: 0,
    },
  ]);
  React.useEffect(() => {
    axios.get("http://localhost:3001/inventario").then((response) => {
      setInventario(response.data);
    });
  }, []);

  const tabla = inventario.map((inventario, i) => (
    <tr key={i}>
      <td>{inventario.id}</td>
      <td>{inventario.nombre}</td>
      <td>{inventario.precio}</td>
      <td>{inventario.cantidad_inicial}</td>
      <td>{inventario.cantidad_actual}</td>
    </tr>
  ));

  return (
    <div>
      <NavBar />

      {/*<!-- ================ Inventario ================= -->*/}
      <div className="lista offset-md-3">
        <div className="listaP container">
          <div className="tituloLista">
            <h2>Inventario</h2>
            <Boton texto="agregar inventario" callBack={()=>{}}/>
          </div>
         
          <table className="table table.striped">
            <thead>
              <tr>
                <td>Codigo</td>
                <td>Producto</td>
                <td>Precio</td>
                <td>Cantidad inicial</td>
                <td>Vendidos</td>
                <td>Cantidad actual</td>
              </tr>
            </thead>
            <tbody>{tabla}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
