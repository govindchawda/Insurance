import React from 'react'
import './carname.css'
import { Link } from 'react-router-dom'

function Carname() {
    return (
        <>

            <div className="container mt-3">
                <div className="row">


                    <div style={{ backgroundColor: '#f7fcff', }} className="col-lg-4 col-md-4 buy_inc">
                        <div className="p-5">
                            <h3 style={{ fontSize: '20px', fontWeight: '300' }}>Car Insurance</h3>
                            <p style={{ fontSize: '12px', fontWeight: '300' }}>Buy Car Insurance in 30 Seconds!</p>
                        </div>
                        <div className="mt-5">
                            <img style={{ marginTop: '50%' }} src="https://cdn.policybazaar.ae/pbuae/images/car-new-banner.svg" alt="car insurance banner" width='100%' />
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-12 col-sm-12 left_srch">
                        <div className="p-3 shadow">
                            <Link className='mycolor' to="/proceed"><i class="fa-solid fa-arrow-left"></i> back</Link>
                            <Link  className='mycolor'style={{ float: 'inline-end' }} to="/carvar"><i class="fa-solid fa-arrow-right"></i> Next</Link>

                            <div className="p-4">
                                 <h6>Select your Car </h6>
                                <select class="insurance-form-dropdown">
                                    <option value="Toyota">Select  your Car</option>
                                    <option value="Nissan">Altina</option>
                                    <option value="Honda">Sunny</option>
                                    <option value="Mitsubishi">X-Trail</option>
                                    <option value="Ford">Sentra</option>
                                    <option value="Other">Kicks</option>
                                </select>
                                <div class="insurance-form-brands">
                                    <button class="car_names mt-3">Altina</button>
                                    <button class="car_names mt-3">Sunny</button>
                                    <button class="car_names mt-3">X-trail</button>
                                    <button class="car_names mt-3">Sentra</button>
                                    <button class="car_names mt-3">Patrol</button>
                                    <button class="car_names mt-3">Pathfinder</button>
                                    <button class="car_names mt-3">Kicks</button>
                                    <button class="car_names mt-3">Maxima</button>
                                </div>
                                <div className="mt-5">
                                    <a className='mycolor' style={{ fontSize: '12px', float: 'inline-end' }} href="#next"> Show More</a>

                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>



        </>
    )
}

export default Carname
