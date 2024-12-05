import React from 'react'
import './Foter.css'
import FooterMedia from './FooterMedia'
import { Link } from 'react-router-dom'
export default function Foter() {
  return (
    <>
        <footer className='foetr-mainbox'>
            <div className="container">
                <div className="footeR-box">
                    <div className='footer-box ftr-fir'>
                    <h4><img  src="https://i.ibb.co/rfNr9jq/oshopinuloo.png" width={'160px'} alt="" /></h4>
                    <ul>
                        <li>
                            <img src="https://i.ibb.co/N9MC3JL/car-insurance-icon-svg.png" alt="" />&nbsp;  Motor Insurance
                        </li>
                        <li>
                            <img src="https://i.ibb.co/gVVJrbn/Group-4498.png" alt="" />&nbsp; Life Insurance
                        </li>
                        <li>
                            <img src="https://i.ibb.co/VWyTnZS/health-insurance-icon-svg.png" alt="" />&nbsp; Medical Insurance
                        </li>
                        <li>
                            <img src="https://i.ibb.co/N9MC3JL/car-insurance-icon-svg.png" alt="" />&nbsp; Travel Insurance
                        </li>
                    </ul>
                    </div>
                    <div className='footer-box'>
                        <h4>Resources</h4>
                    <ul>
                        <li>
                          Articles
                        </li>
                        <li>
                            Customer Reviews
                        </li>
                        <li>
                            Insurance Companies
                        </li>
                        <li>
                            Newsroom
                        </li>
                        <li>
                            Awards
                        </li>
                    </ul>
                    </div>
                    <div className='footer-box'>
                        <h4>Company</h4>
                    <ul>
                        <li>
                            Company
                        </li>
                        <li>
                            Life Insurance
                        </li>
                        <li>
                            Sitemap
                        </li>
                        <li>
                            Contact Us
                        </li>
                    </ul>
                    </div>
                    <div className='footer-box'>
                        <h4>Follow us on</h4>
                    <ul>
                        <li>
                            <img src="https://i.ibb.co/ZxzsTVr/Group-23499.png" alt="" /> &nbsp; Whats app
                        </li>
                        <li>
                            <img src="https://i.ibb.co/vQkPbPC/Vector.png" alt="" /> &nbsp;   Facebook
                        </li>
                        <li>
                            <img src="https://i.ibb.co/PWNBst5/Vector-1.png" alt="" /> &nbsp; YouTube
                        </li>
                    </ul>
                    </div>
                </div>
                <div className='ftr-botom'>
                    <div className='ftr-paymet'>
                        <h4>Payment Methods</h4>
                    </div>
                    <div className='ftr-botttom-img'>
                        <img
                src="https://img.icons8.com/color/48/000000/visa.png"
                alt="Visa"
              />
              <img
                src="https://img.icons8.com/color/48/000000/mastercard.png"
                alt="MasterCard"
              />
              <img
                src="https://img.icons8.com/color/48/000000/paypal.png"
                alt="PayPal"
              />
              <img
                src="https://img.icons8.com/color/48/000000/amex.png"
                alt="Amex"
              />
              <img
                src="https://img.icons8.com/color/48/000000/rupay.png"
                alt="Rupay"
              />
                    </div>
                </div>
            </div>
            <FooterMedia/>
        </footer>
    </>
  )
}
