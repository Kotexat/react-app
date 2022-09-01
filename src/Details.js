import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Currency } from './Context'
export default function Details() {
    let productFasi = useContext(Currency)
    let products = require("./data (1).json")
    let navigate = useNavigate()
    let { menuID } = useParams()

    let productinfo = products.find((product) => {
        return product.id == menuID
    })
    console.log(productinfo);
    return (
        <section style={{ width: "100%", padding: "200px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "ivory" }}>
            <div style={{ width: '90%', height: "600px", backgroundColor: "pink" ,display:"flex" }}>
                <img style={{ width: "50%", height: "100%" }} src={productinfo.image}></img>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" , justifyContent :'space-around'}}>
                    <button style={{width:"200px", height : '60px', borderRadius : "40%" , color:"white", backgroundColor : "red" , fontSize : "20px", fontWeight:"bold" , border :"none", cursor:"pointer"}} onClick={() => { navigate('/menu') }}>Back to menu</button>
                    <h1 style={{fontSize : "40px" , paddingLeft:"50px" , fontWeight:"bold", color:"red"}}>{productinfo.name}</h1>
                    <h4 style={{ fontSize: "30px", fontWeight: 'bold', color: "red" }}>price : {productinfo.price} {productFasi.fasi}</h4>
                    <p style={{fontSize : "20px", fontWeight : "bold" , paddingLeft : "20px" , color : "red"}}>{productinfo.description}</p>
                </div>
            </div>
        </section>
    )
}
