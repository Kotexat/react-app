import React, { useContext } from 'react'
import { Currency } from './Context'

export default function Button() {
    const productFasi = useContext(Currency)
    

    return (
        <div style={{ width: "130px", height: "70px", backgroundColor: '#d79922' , borderRadius:'50px' , display :'flex', alignItems:'center' , justifyContent :'center' }}>
            <button onClick={productFasi.fasisCvlileba} style={{ marginRight: '10px', fontSize:"30px", fontWeight: "bold",borderRadius:"50%", width: '50px', cursor: 'pointer', backgroundColor : "White" , color : "red" , border : "none" }}>{productFasi.fasi === '$' ? '₾' : '$'}</button>
           
        </div>
    )
}
