import React, { useContext } from 'react'
import Card2 from './Card2'
import { Currency } from './Context'

export default function Basket() {

  let productFasi = useContext(Currency)
  return (
    <>
    <div style={{display: 'flex' , justifyContent : "space-around" }}>
        <button onClick={()=>productFasi.deleteCards()}  style={{ width: "230px", height: "70px", marginTop: "200px", borderRadius: "20px", color: "white", backgroundColor: "red", fontSize: "30px", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent:"center", cursor:"pointer" , border : "none" }}>Clear Cart</button>
        <h1 style={{ width: "230px", height: "70px", marginTop: "200px", borderRadius: "20px", color: "white", backgroundColor: "#0c5dd7", fontSize: "30px", fontWeight: "bold", display: "flex", alignItems: "center" }}>Total Price: {productFasi.fasi == '$' ? productFasi.jami : productFasi.jami * 3}{productFasi.fasi} </h1>
      </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '70px', alignItems: 'center', justifyContent: 'center', marginTop: '200px' }}>
      
      {productFasi.mtlianiInfo.map((item)=>{     
        if(item.status == 'Added') {
          return <Card2 surati={item.image} saxeli={item.name} fasi={productFasi.fasi == '$' ? item.price : item.price * 3} addBasket={item.status} key={item.id} id={item.id} cardisGaqroba={() => productFasi.cardisGaqroba(item.id)} />
        }
       
      })}

    </div>
    </>
  )
}
