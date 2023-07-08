"use client";
import axios from "axios";
import '@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css'
import React from "react";

export default function Home() {
  const Home = async () => {
    var log = [{ nombres: "", apellidos: "", correo: "" }];
    await axios
      .get(`http://localhost:3001/usuarios`)
      .then(function (response) {
        console.log(response.data);
        log = response.data;
      })
      .catch(function (error) {});

      React.useEffect(() => {
        }, []);

    return (
      <div>
        <table className="table" border={5}>
          {log.map((number) => (
            <tr key={number.toString()}>
              <td>{number.apellidos}</td>
              <td>{number.nombres}</td>
              <td>{number.correo}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="contenedor-principal mx-auto">
        <li>{Home()}</li>
      </div>
    </div>
  );
}
