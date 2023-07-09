"use client";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css";
import "@/pages/css/usuarios.css";
import React from "react";
import NavBar from "@/app/componentes/navbar";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([
    { nombre: "", correo: 0, tipo: "", id: 0 },
  ]);

  function traerUsuarios() {
    axios.get("http://localhost:3001/usuarios").then((response) => {
      setUsuarios(response.data);
    });
  }

  React.useEffect(() => {
    traerUsuarios()
    }, []);

  const tabla = usuarios.map((usuarios, i) => (
    <tr key={i}>
      <td>{usuarios.id}</td>
      <td>{usuarios.nombre}</td>
      <td>{usuarios.correo}</td>
      <td>{usuarios.tipo}</td>
    </tr>
  ));

  return (
    <div>
      <NavBar />
      {/*<!-- ================ Lista de usuarios ================= -->*/}
        <div className="lista offset-md-2">
          <div className="usuarios">
            <div className="tituloLista">
              <h2>Usuarios</h2>
            </div>
            <table>
              <thead>
                <tr>
                  <td>IdUsuario</td>
                  <td>Nombre</td>
                  <td>Correo</td>
                  <td>Tipo</td>
                </tr>
              </thead>

              <tbody>{tabla}</tbody>
            </table>
          </div>
        </div>
      </div>
  );
}
