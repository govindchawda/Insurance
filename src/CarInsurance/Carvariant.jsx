import React from 'react'
import { Link } from 'react-router-dom'


function Carvariant() {
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
                            <Link className='mycolor' to="/carname"><i class="fa-solid fa-arrow-left"></i> back</Link>
                            <Link className='mycolor' style={{ float: 'inline-end' }} to="/specify"><i class="fa-solid fa-arrow-right"></i> Next</Link>

                            <div className="p-4">
                            <h6>Car Variant</h6>
                                    <div class="insurance-form-brands">
                                    <button class="car_names mt-3">SV 1.5L</button>
                                    <button class="car_names mt-3">SV 1.5L</button>
                                    <button class="car_names mt-3">SV 1.6L</button>
                                    <button class="car_names mt-3">SV 1.6L</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



    </>
  )
}

export default Carvariant
