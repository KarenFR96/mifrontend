import Image from "next/image";
import foto from "@/app/assets/foto.jpg"
import 'bootstrap/dist/css/bootstrap.css';
import "@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css";
import "@/app/componentes/navbar.css"
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <div>
            <div className="navegacion">
                <ul>
                    <li>
                        <a onClick={() =>{router.push("/home")}}>
                            <b><span className="titulo">ZTechnology</span></b>
                        </a>
                    </li>

                    <li>
                        <a onClick={() => {router.push ("/inventario")}}>
                            <span className="titulo">Inventario</span>
                        </a>
                    </li>

                    <li>
                        <a onClick={() => {router.push ("/producto_crear")}}>
                            <span className="titulo">Crear productos</span>
                        </a>
                    </li>

                    <li>
                        <a onClick={() => {router.push ("/productos")}}>
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