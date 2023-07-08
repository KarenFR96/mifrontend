"use client"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import "@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css";
import "@/pages/css/productos.css";
import Image from "next/image";
import foto from "@/app/assets/foto.jpg"

export default function Productos() {

    const [productos, setProductos] = useState([{ nombre: "", precio: 0, descripcion:"", especificaciones_tecnicas:"", id:0}]);

    axios.get("http://localhost:3001/productos")
    .then((response) => {
        setProductos(response.data)
    })

    const tabla = productos.map((producto, i ) => (
        <tr key = {i}>
        <td>{producto.id}</td>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>{producto.descripcion}</td>
        <td>{producto.especificaciones_tecnicas}</td>
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

           {/*<!-- ================ Lista de Productos ================= -->*/}
            <div className="lista">
                <div className="infoProductos">
                    <div className="listadoHeader">
                        <h2>Listado de Productos</h2>
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