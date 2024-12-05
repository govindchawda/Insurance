import React from 'react'
import { Link } from 'react-router-dom'
import './carmodel.css'


function Carmodel() {
    return (
        <>

            <div className="container mt-3">
                <div className="row">


                <div style={{backgroundColor:'#f7fcff',}} className="col-lg-4 col-md-4 buy_inc">
                    <div className="p-5">
                        <h3 style={{fontSize:'20px',fontWeight:'300'}}>Car Insurance</h3>
                        <p style={{fontSize:'12px',fontWeight:'300'}}>Buy Car Insurance in 30 Seconds!</p>
                        </div>
                         <div className="mt-5">
                         <img style={{marginTop:'50%'}} src="https://cdn.policybazaar.ae/pbuae/images/car-new-banner.svg" alt="car insurance banner" width='100%'/>
                         </div>
                   </div>

                    <div className="col-lg-8 col-md-12 col-sm-12 left_srch">
                    <div className="p-3 shadow">
                        <Link className='mycolor' to="/car"><i class="fa-solid fa-arrow-left"></i> back</Link>
                        <Link className='mycolor' style={{float:'inline-end'}} to="/carname"><i class="fa-solid fa-arrow-right"></i> Next</Link>
                    
                        <div className="p-4">
                        <h6>Search your Car Model year</h6>
                            <select class="insurance-form-dropdown">
                                <option value="Toyota">2025</option>
                                <option value="Nissan">2024</option>
                                <option value="Honda">2023</option>
                                <option value="Mitsubishi">2022</option>
                                <option value="Ford">2021</option>
                                <option value="Other">2020</option>
                            </select>
                            <div class="insurance-form-brands">
                                <button class="insurance-form-brand-button mt-3">2024</button>
                                <button class="insurance-form-brand-button mt-3">2023</button>
                                <button class="insurance-form-brand-button mt-3">2022</button>
                                <button class="insurance-form-brand-button mt-3">2021</button>
                                <button class="insurance-form-brand-button mt-3">2020</button>
                                <button class="insurance-form-brand-button mt-3">2019</button>
                                <button class="insurance-form-brand-button mt-3">2018</button>
                                <button class="insurance-form-brand-button mt-3">2017</button>
                                <button class="insurance-form-brand-button mt-3">2016</button>
                            </div>
                            <div className="mt-5">
                            <a className='mycolor' style={{fontSize:'12px',float:'inline-end'}} href="#next"> Show More</a>

                            </div>
                            </div>
                        </div>
                    </div>

                   


                </div>
            </div>



            <br />
        </>
    )
}

export default Carmodel
