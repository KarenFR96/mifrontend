"use client"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import "@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css";
import "@/pages/css/inventario.css";
import Image from "next/image";
import foto from "@/app/assets/foto.jpg"

export default function Inventario() {

    const [inventario, setInventario] = useState([{ nombre: "", precio: 0, cantidad_inicial:"", vendidos:"", cantidad_actual:"", id:0}]);

    axios.get("http://localhost:3001/inventario")
    .then((response) => {
        setInventario(response.data)
    })

    const tabla = inventario.map((inventario, i ) => (
        <tr key = {i}>
        <td>{inventario.id}</td>
        <td>{inventario.nombre}</td>
        <td>{inventario.precio}</td>
        <td>{inventario.cantidad_inicial}</td>
        <td>{inventario.cantidad_actual}</td>
        </tr>
    ))

    return (
        <div>
        <div className="navegacion">
            <ul>
                <li>
                    <a href="#">
                        <b><span className="titulo">ZTechnology</span></b>
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
                        <li><button type="button">Mejorar plan</button></li>
                        <li><button type="button" >Contáctanos</button></li>
                </div>
                <div className="usuario">
                <Image className="imagen" src={foto} alt="logo"/> 
                </div>
            </div>

           {/*<!-- ================ Inventario ================= -->*/}
           <div className="lista">
                <div className="listaP">
                    <div className="tituloLista">
                        <h2>Inventario</h2>
                    </div>
        
                    <table>
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
                        <tbody>
                            {tabla}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}