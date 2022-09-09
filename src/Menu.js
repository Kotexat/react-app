import React, { useContext } from 'react'
import Card from './Card'
import { Currency } from './Context'


let data = require("./data (1).json")

export default function Menu() {

  let productFasi = useContext(Currency)
 
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '70px', alignItems: 'center', justifyContent: 'center', marginTop: '200px' , paddingBottom : "20px" }}>
      {productFasi.mtlianiInfo.map((item) => {
        return <Card surati={item.image} saxeli={item.name} fasi={productFasi.fasi  == '$' ? item.price : item.price * 3} addBasket={item.status} key={item.id} id={item.id} statusisShecvla={() => productFasi.statusisShecvla(item.id)}/>
      })}
    </div>
  )
}
