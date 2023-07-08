import Boton from "@/app/componentes/boton/boton";
import Input from "@/app/componentes/inputs/input";
import "@/app/componentes/inputs/input.css"
import NavBar from "@/app/componentes/navbar";
import { handleClientScriptLoad } from "next/script";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function ProductoCrear() {
    const [nombre, setNombre ] =useState("");
    const [precio, setPrecio ] =useState("");
    const [descripcion, setDescripcion ] =useState("");
    const [especificaciones, setEspecificaciones ] =useState("");

    const handleNombre = (e: string) => {
        setNombre(e)
    }

    const handlePrecio = (e: string) => {
        setPrecio(e)
    }

    const handleDescripcion = (e: string) => {
        setDescripcion(e)
    }

    const handleEspecificaciones = (e: string) => {
        setEspecificaciones(e)
    }

    const crearProducto=()=>{

        
    axios.post("http://localhost:3001/productos", {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        especificaciones: especificaciones,
      }).then((response) => {
        Swal.fire({
          title: 'Registro exitoso',
          position: 'bottom-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        })
      })
    }

  return (
    <div>
      <NavBar />
      <div className="lista offset-md-3">
        <div className="listaP container">
          <div className="tituloLista">
            <h2>Crear producto</h2>
                  <form className="formulario">
                    <Input
                      className="form-control"
                      type="text"
                      hint="Nombres"
                      id="userN"
                      handleInput={handleNombre}
                    />
                    <Input
                      className="form-control"
                      type="text"
                      hint="precio"
                      id="userA"
                      handleInput={handlePrecio}
                    />
                    <Input
                      className="form-control"
                      type="text"
                      hint="descripción"
                      id="userEmail"
                      handleInput={handleDescripcion}
                    />
                    <Input
                      className="form-control"
                      type="text"
                      hint="Especificaciones"
                      id="userContrasena"
                      handleInput={handleEspecificaciones}
                    />
                    <Boton texto="Crear Producto" callBack={()=>{crearProducto()}}/>
                  </form>
                </div>
              </div>
            </div>
          </div>
  );
}
