import React from 'react'
import Email from './Images/email.png'
import Telephone from './Images/telephone.png'
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer style={{ width: "100%", backgroundColor: "#4056a1", padding: "60px",  }}>
          <nav style={{width : "100%" , display :"flex" , justifyContent : "center"}} >
                <ul style={{ width : "80%", display: "flex", justifyContent: "space-beetwen" ,   }}>
                <li>
                    <img style={{width : "30px"}} src={Email}></img>
                    <p>kotekhatiskatsi@gmail.com</p>
                </li>
                <li>
                        <img style={{ width: "30px" ,  }} src={Telephone}></img>
                        <p>+99599234790</p>
                </li>
                <li style={{width:"15%", justifyContent:"space-between"}} >
                        <SocialIcon url="https://twitter.com/jaketrent" />
                        <SocialIcon url="https://instagram.com/jaketrent" />   
                        <SocialIcon  url="https://whatsapp.com/jaketrent" />
                </li>
            </ul>
          </nav>
            
        </footer>
    )
}
