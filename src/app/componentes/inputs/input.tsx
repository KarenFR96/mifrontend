"use client"
import React from "react";
import axios from 'axios';

const Input = ( props: { className: string, hint: string, type:string, id:string, handleInput: any }) => {
    return (
        <div className="input">
            <input className={props.className} type={props.type} placeholder={props.hint} id={props.id} name={props.id} onChange={e => props.handleInput(e.target.value, e.target.name)}></input>
        </div>
    )
}

export default Input;