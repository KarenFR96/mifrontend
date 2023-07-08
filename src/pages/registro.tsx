"use client";
import "bootstrap/dist/css/bootstrap.css"
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css";
import "@/pages/css/registro.css";
import Boton from '@/app/componentes/boton/boton'
import Input from "@/app/componentes/inputs/input";
import logo from "@/app/assets/shop.jpg"
import Image from "next/image";


export default function Registro() {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [repcontrasena, setRepetirContrasena] = useState('');

  const handleNombre = (e: string) => {
    setNombres(e)
  }

  const handleApellidos = (e: string) => {
    setApellidos(e)
  }

  const handleCorreo = (e: string) => {
    setCorreo(e)
  }

  const handleContrasena = (e: string) => {
    setContrasena(e)
  }

  const handleRepetirContrasena = (e: string) => {
    setRepetirContrasena(e)
  }

  const registrar = () => {

    axios.post("http://localhost:3001/usuarios", {
      correo: correo,
      nombres: nombres,
      apellidos: apellidos,
      contrena: contrasena,
      repcontrasena: repcontrasena,
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
    <div className="container">
      <div className="contenedor-principal mx-auto">
        <Image className="imagen" src={logo} alt="logo" />
        <div className="crearCuenta">
          <div className='logo'><h2>zTech</h2></div>
          <form className="formulario">
            <h2 className="registro">Registrate</h2>
            <hr className="lineaTitulo" />
            <Input className="nombres" type="text" hint="Nombres" id="userN" handleInput={handleNombre} />
            <Input className="apellidos" type="text" hint="Apellidos" id="userA" handleInput={handleApellidos} />
            <Input className="email" type="email" hint="E-mail o usuario" id="userEmail" handleInput={handleCorreo} />
            <Input className="contrasena" type="password" hint="Contraseña" id="userContrasena" handleInput={handleContrasena} />
            <Input className="contrasena2" type="password" hint="Repetir Contraseña" id="userContrasena2" handleInput={handleRepetirContrasena} />
            <div className="divboton">
              <Boton texto="Registrarse" callBack={registrar} />
            </div>
            <div className="ingreso">¿Ya eres miembro? <a href="C:\Users\57321\Desktop\PROYECTO\mifrontend\src\pages\login.tsx">Ingresa aquí</a></div>
          </form>
        </div>
      </div>
    </div>
  )
}