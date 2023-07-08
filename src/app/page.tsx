"use client";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Registro from "@/pages/registro";
import Productos from "@/pages/productos";
import Inventario from "@/pages/inventario";
import React from "react";
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Usuarios from "@/pages/usuarios";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={Home()} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
