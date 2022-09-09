import React, { useState } from 'react'

export default function ContactUs() {

  const [name,setName]= useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')


  function submitEvent (e){
    e.preventDefault()
    if(name === '' || name.length < 3){
      alert('Please enter valid name')
    }else if (mail === '' || mail.length < 5){
      alert('Please enter valid E-mail')
    }else if (phone === '' || phone.length < 8) {
      alert('Please enter valid Phone number')
    }else if(message=== '' || message.length < 8) {
      alert('Please enter valid Message')
    }else{
      alert('Thanks for registration')
    }
  }


  function changeName (e){
    setName(e.target.value)
    console.log(e);
  }

  function changeMail(e){
    setMail(e.target.value)
  }

  function changePhone(e){
    setPhone(e.target.value)
  }
  
  function changeMessage(e){
    setMessage(e.target.value)
  }

  return (
    <section style={{width : '100%' , padding : "150px" , backgroundColor : "skyblue"}}>
      <div style={{weight:"90%" , height : "600px", display:"flex" }}>

        <iframe style={{width  : "45%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.5143041784277!2d44.800697214701636!3d41.7094196839335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440ccd352e52b5%3A0xf42bc14f3c7d7a1a!2z4YOk4YOQ4YOR4YOg4YOY4YOZ4YOQ!5e0!3m2!1ska!2sge!4v1662019171614!5m2!1ska!2sge" ></iframe>

        <form onSubmit={submitEvent} style={{width:"55%", display : "flex" , flexDirection :"column" , justifyContent : "space-evenly" , paddingLeft:"50px",   }}>
          <h1 style={{fontSize : "30px"}}>Quick Contact</h1>
          <label style={{fontSize : '20px' }}>Name</label>
          <input onChange={(e)=>changeName(e)} value={name} style={{width : "90%", height:"40px" , borderRadius :"10px", border : "none" , fontSize:"20px" }} type='text'></input>
          <label style={{ fontSize: '20px' }}>Email adress</label>
          <input onChange={(e) => changeMail(e)} value={mail} style={{ width: "90%", height: "40px", borderRadius: "10px", border: "none", fontSize: "20px" }} type='text' ></input>
          <label style={{ fontSize: '20px' }}>Phone number</label>
          <input onChange={(e) => changePhone(e)} value={phone} style={{ width: "90%", height: "40px", borderRadius: "10px", border: "none", fontSize: "20px" }} type='text'></input>
          <label style={{ fontSize: '20px' }}>Message</label>
          <input onChange={(e) => changeMessage(e)} value={message} style={{ width: "90%", height: "80px", borderRadius: "10px", border: "none", fontSize: "20px"  }} type='text'></input>
          <input style={{width:"20%" , height:"40px" , fontSize : "20px" ,  backgroundColor : "red" , color : "white" , borderRadius : "100px" , border:"none", cursor:"pointer"}} type='submit'></input>
        </form>
      </div>
    </section>
  )
}
