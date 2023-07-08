"use client";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css";
import "@/pages/css/usuarios.css";
import Image from "next/image";
import foto from "@/app/assets/foto.jpg";
import React from "react";

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
      <div className="navegacion">
        <ul>
          <li>
            <a href="#">
              <b>
                <span className="titulo">ZTechnology</span>
              </b>
            </a>
          </li>

          <li>
            <a href="src\pages\usuarios.tsx">
              <span className="titulo">Usuarios</span>
            </a>
          </li>

          <li>
            <a href="src\pages\inventario.tsx">
              <span className="titulo">Inventario</span>
            </a>
          </li>

          <li>
            <a href="src\pages\productos.tsx">
              <span className="titulo">Productos</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="titulo">Cerrar sesión</span>
            </a>
          </li>
        </ul>
      </div>

      {/*<-- ========================= barraSuperior ==================== -->*/}
      <div className="barraSuperior">
        <div className="topbar">
          <div className="botones">
            <li>
              <button type="button">Mejorar plan</button>
            </li>
            <li>
              <button type="button">Contáctanos</button>
            </li>
          </div>
          <div className="usuario">
            <Image className="imagen" src={foto} alt="logo" />
          </div>
        </div>

        {/*<!-- ================ Lista de usuarios ================= -->*/}
        <div className="lista">
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
    </div>
  );
}
