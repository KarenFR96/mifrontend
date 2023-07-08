import Image from "next/image";
import foto from "@/app/assets/foto.jpg"

import 'bootstrap/dist/css/bootstrap.css';
import "@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css";
import "@/pages/css/productos.css";

export default function NavBar() {
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
                        <Image className="imagen" src={foto} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}