import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className="footer-content">

            <div className="footer-content-left">

                <img src={assets.logo} alt="" />
                <p>Tomato is your go-to food delivery service that brings the best dishes from your favorite local restaurants straight to your doorstep. Whether you're craving a gourmet meal or a quick snack, our extensive menu and user-friendly platform make ordering food easy and convenient. At Tomato, we are committed to delivering delicious meals with the highest quality and efficiency. Experience the taste of your city with Tomato - where every meal is a delightful journey!</p>

                

            </div>

            <div className="footer-content-center">

                <h2>COMPANY</h2>
                <ul>

                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">

                <h2>Contact US</h2>
                <ul>

                    <li>9025587169</li>
                    <li>tomatosupport@gmail.com</li>
                </ul>

            </div>

            
        </div>

        <hr/>

        <p className="footer-copyright">
            Copyright 2024 @Tomato.com - All rights reserved
        </p>

    </div>
  )
}

export default Footer