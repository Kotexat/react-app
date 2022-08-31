import React from 'react'

export default function Card(props) {
  return (
      <div style={{ width: 300, height: 300, backgroundColor: '#d79922' , display:'flex' , flexDirection:'column' , justifyContent:'space-between' , borderRadius:'30px'}}>
        <img style={{width: '100%' , height:'150px' , borderRadius:'30px'}} src={props.surati}></img>
        <h1 style={{marginLeft:'20px', fontSize:"25px" , fontWeight:'bold' , color:"blue"}}>{props.saxeli}</h1>
        <h4 style={{marginLeft:"20px", marginBottom:'20px' , fontSize : '25px', color:"blue"}}>Price : {props.fasi}</h4>
    </div>
  )
}
