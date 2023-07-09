"use client";
import "@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css";
import "@/pages/css/login.css";
import "@/app/globals.css"
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Boton from "@/app/componentes/boton/boton";
import Input from "@/app/componentes/inputs/input";
import logo from "@/app/assets/shopTech.jpg";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  // React.useEffect(() => {
  //   if (sessionStorage.getItem("token") !== undefined) {
  //     router.push("home");
  //   }
  // }, []);

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  function handleInput(valor: string, name: string) {
    if (name === "correo") {
      setCorreo(valor);
    } else {
      setContrasena(valor);
    }
  }

  const SessionDataStorage = (valor: string, name: string) => {
    sessionStorage.setItem(name, valor);
  };

  const login = async () => {
    axios
      .post("http://localhost:3001/autenticacion/login", {
        correo: correo,
        contrena: contrasena,
      })
      .then(function (response) {
        SessionDataStorage(response.data.access_token, "token");
        SessionDataStorage(response.data.nombre, "nombre");
        router.push("/home");
      })
      .catch(function (error) {});
  };
  return (
    <div className="container">
      <div className="contenedor-principal mx-auto">
        <Image className="imagen" src={logo} alt="logo" />
        <div className="login">
          <div className="logo">
            <h2>zTech</h2>
          </div>
          <form className="formulario">
            <h2>
              Ingresa a <br />
              zTechnology
            </h2>
            <hr className="lineaTitulo" />

            <div className="inputslogin">
              <Input
                className="correo"
                type="text"
                hint="E-mail o usuario"
                id="correo"
                handleInput={handleInput}
              />
              <Input
                className="contrasena"
                type="text"
                hint="Contraseña"
                id="contrasena"
                handleInput={handleInput}
              />
            </div>
            <div className="olvidarContrasena">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="botonIniciar">
              <Boton texto="Iniciar" callBack={login} />
            </div>
            <div className="registropLogin">
              ¿No eres un miembro todavía?{" "}
              <a onClick = {() => {router.push("/registro")}}>
                Registrate aquí
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
