import React from 'react'
import './Foter.css'
import { Link } from 'react-router-dom'
export default function FooterMedia() {
  return (
    <>
         <div className='ftr-fixed-botom'>
                <div className="container">
                    <div className='d-flex m-n-b-f-f-b'>
                        <Link to="/" className='m-n-b-f-f-b-box bomsed'>
                        <i class="fa-solid fa-house fw-bold mycolor"></i>
                            {/* <img  src="https://i.ibb.co/42zLtYN/Group-23649.png" alt="" /> */}
                            <p>Home</p>
                        </Link>
                        <Link to='/claims' className='m-n-b-f-f-b-box'>
                        <i class="fa-regular fa-flag"></i>
                            {/* <img src="https://i.ibb.co/h1ZJq82/Group-23583.png" alt="" /> */}
                            <p>Claims</p>
                        </Link>
                        <Link to='/policies' className='m-n-b-f-f-b-box bomsed-yop'>
                            <img style={{width:'50px',height:'50px'}} src="https://i.ibb.co/2ZC0g0z/Group-23580.png" alt="" />
                            <p>Policies</p>
                        </Link>
                        <Link to='/account' className='m-n-b-f-f-b-box'>
                        <i class="fa-regular fa-user "></i>
                            {/* <img src="https://i.ibb.co/NmtGNpx/Group-23574.png" alt="" /> */}
                            <p>Account</p>
                        </Link>
                        <Link to='./help' className='m-n-b-f-f-b-box'>
                        <i class="fa-regular fa-circle-question"></i>
                        {/* <i class="fa-solid fa-circle-question fw-bold "></i> */}
                            {/* <img src="https://i.ibb.co/MPkQvkc/Group-23575.png" alt="" /> */}
                            <p>Help</p>
                        </Link>
                    </div>
                </div>
            </div>        
    </>
  )
}
