"use client";
import axios from "axios";
import '@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css'
import React, { useState } from "react";
import NavBar from "@/app/componentes/navbar";
import Productos from "./productos";

export default function Home() {
  return (
    <div className="">
      <div className="">
       <NavBar/>
       <Productos/>
      </div>
    </div>
  );
}
