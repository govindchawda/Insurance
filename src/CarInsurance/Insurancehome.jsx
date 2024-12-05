import React from 'react'
import './insurance.css'
import { Link } from 'react-router-dom'

function Insurancehome() {
  return (
    <>

            <div className="container shadow mt-5 p-3 incadd">
                <div className="row">


                    <div className="col-md-7 lightimg mt-3">
                        <div className="">
                            <img src="https://cdn.policybazaar.ae/pbuae/images/nds_car_banner_v2.jpg" class="img-fluid light--mode" alt="Car Insurance" />
                        </div>
                    </div>

                    <div className="col-md-5 mt-4">
                        <div class="insurance-form-container">
                            <h1 class="insurance-form-title">Compare & <span style={{ fontWeight: '800', borderBottom: '2px solid #003d2b' }}>Save Up to 30%</span><br />on Car Insurance</h1>
                            <select class="insurance-form-dropdown in-fo-dr">
                                <option className='' value="Toyota">Select-|-</option>
                                <option className='' value="Toyota">Toyota</option>
                                <option value="Nissan">Nissan</option>
                                <option value="Honda">Honda</option>
                                <option value="Mitsubishi">Mitsubishi</option>
                                <option value="Ford">Ford</option>
                                <option value="Other">Other</option>
                            </select>
                            <div class="insurance-form-brands">
                                <button class="insurance-form-brand-button mt-3">Toyota</button>
                                <button class="insurance-form-brand-button mt-3">Nissan</button>
                                <button class="insurance-form-brand-button mt-3">Honda</button>
                                <button class="insurance-form-brand-button mt-3">Mitsubishi</button>
                                <button class="insurance-form-brand-button mt-3">Ford</button>
                                <button class="insurance-form-brand-button mt-3">Other</button>
                            </div>
                            <Link to={"/proceed"}><button  class="insurance-form-proceed">Proceed</button></Link>
                        </div>

                    </div>


                </div>
            </div>



            <div className="container bodycount shadow mt-3">
                <div className="row">

                <div className="col-md-3">
                        <div class="card txtbody">
                            <div class="card-body">
                                <div class="stats-value">We Are Rated</div>
                                <div className="stats-label"> 4.6/5 <span style={{color : "#FAAA24", fontSize : "1.2rem"}}>★★★★★</span></div>
                            
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div class="card txtbody">
                            <div class="card-body d-flex gap-3 alitment">
                                <div class="stats-value">23,923</div>
                                <div class="stats-label d-flex align-items-center gap-2"> <img class="img-fluid" src="https://cdn.policybazaar.ae/pbuae/images/google-logo-banner.svg" alt="google-logo"/>
                                 Reviews</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div class="card txtbody">
                            <div class="card-body">
                                <div class="stats-value">23,923</div>
                                <div class="stats-label"> <img class="img-fluid" src="https://cdn.policybazaar.ae/pbuae/images/google-logo-banner.svg" alt="google-logo"/>
                                 Reviews</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div class="card txtbody">
                            <div class="card-body">
                                <div class="stats-value">50+</div>
                                <div class="stats-label">Insurance Partners</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div class="card txtbody">
                            <div class="card-body">
                                <div class="stats-value">1 Million+</div>
                                <div class="stats-label">Trusted Customers</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


                {/*Only For Mobile View */}

               <div style={{borderRadius:'5px'}} className="container mobile_look shadow pt-3 text-center mt-3">
                <div className="row">

                  <div className="col-md-4 col-sm-4">
                   <div className="">
                    <h5 style={{color:'blue',fontSize:'15px',fontWeight:'600'}}>50+</h5>
                     <p style={{fontSize:'12px',fontWeight:'300'}}>Insurance Partners</p>
                   </div>
                  </div>

                  <div className="col-md-4 col-sm-4">
                   <div className="">
                    <h5 style={{color:'blue',fontSize:'15px',fontWeight:'600'}}>1 Million+</h5>
                     <p style={{fontSize:'12px',fontWeight:'300'}}>Trusted Customers</p>
                   </div>
                  </div>

                  <div className="col-md-4 col-sm-4">
                   <div className="">
                    <h5 style={{color:'blue',fontSize:'15px',fontWeight:'600'}}>250 k+</h5>
                     <p style={{fontSize:'12px',fontWeight:'300'}}>Policies Sold</p>
                   </div>
                  </div>


                </div>
               </div>

    </>
  )
}

export default Insurancehome
