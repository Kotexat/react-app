import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Currency } from './Context'

export default function Card(props) {
    const [name, setName] = useState ('Remove')
    let products = require("./data (1).json")
    const navigate = useNavigate()
    let productFasi = useContext(Currency)



    return (
        <div style={{ width: 300, height: 400, backgroundColor: '#d79922', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '30px', position: "relative" }}>
            <button onClick={props.cardisGaqroba}  style={{ width: "150px", height: "50px", color: "white", backgroundColor: "red", fontSize: "20px", top: "30px", left: "120px", borderRadius: "30px", cursor: "pointer", border: "none", fontWeight: "bold", position: "absolute" }}>{name}</button>
            <img style={{ width: '100%', height: '200px', borderRadius: '30px' }} src={props.surati}></img>
            <h1 style={{ marginLeft: '20px', marginBottom: "50px", fontSize: "25px", fontWeight: 'bold', color: "blue" }}>{props.saxeli}</h1>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: "20px" }}>
                <h4 style={{ fontSize: '25px', color: "blue" }}>Price : {props.fasi} {productFasi.fasi}</h4>
                <button onClick={() => { navigate(`/menu/${props.id}`) }} style={{ width: "100px", height: "50px", borderRadius: "30%", backgroundColor: "red", color: "black", fontWeight: "bold", fontSize: "20px", cursor: "pointer", border: "none" }}>Details</button>
            </div>
        </div>
    )
}
