import React, { useEffect, useState } from 'react'
import img1 from './Images/1.jpg'
import img2 from './Images/2.webp'
import img3 from './Images/3.webp'

let images = [img1, img2, img3]


export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let x = setInterval(() => {
      if (index < images.length - 1) {
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
    }, 2000)
    return (
      ()=>clearInterval(x)
    )

  })

  return (
    <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#c5cbe3' , padding :"100px"}}>
      <div style={{ width: 1000, height: 700, borderRadius: '30px', border: '10px solid #4056a1', backgroundImage: `url('${images[index]}' )`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
    </section>
  )
}
