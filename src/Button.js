import React, { useContext } from 'react'
import { Currency } from './Context'

export default function Button() {
    const productFasi = useContext(Currency)
    return (
        <div style={{ width: "130px", height: "70px", backgroundColor: '#d79922' , border : '2px solid black' , borderRadius:'50px' , display :'flex', alignItems:'center' , justifyContent :'center' }}>
            <button onClick={productFasi.fasisCvlilebaDolarshi} style={{ marginRight: '10px', borderRadius: '50%', width: '50px', cursor: 'pointer' }}>$</button>
            <button onClick={productFasi.fasisCvlileba} style={{ marginLeft: '10px', borderRadius: '50%', cursor: 'pointer' }}>₾</button>
        </div>
    )
}
