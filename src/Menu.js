import React from 'react'
import Card from './Card'

let data = require("./data (1).json")

export default function Menu() {
  return (
    <div style={{display:'flex' , flexWrap:'wrap' , gap : '70px' , alignItems:'center' , justifyContent:'center' , marginTop : '200px'}}>
      {data.map((item)=>{
        return <Card surati = {item.image} saxeli = {item.name} fasi={item.price} key={item.id}/>
      })}
    </div>
  )
}
