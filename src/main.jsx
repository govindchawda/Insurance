import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Home from './Pages/Home.jsx';
import TrevelHome from './Allmyproduct/Trevel/TrevelHome.jsx';
import TreveltreePage1 from './Allmyproduct/Trevel/TreveltreePage1.jsx';
import Homes from './Hero-pages/Homes.jsx';
import Profile from './Fot-Forms/Profile.jsx'
import Profileg from './Fot-Forms/Profile-g.jsx'
import Servicerequests from './Fot-Forms/Servicerequests.jsx';
import Policy from './Fot-Forms/Policy.jsx';
import Policycontact from './Fot-Forms/Policycontact.jsx';
import Treveltreepage2 from './Allmyproduct/Trevel/TreveltreePage2.jsx';
// import BikeHome from './BikeInsurance/BikeHome.jsx';
import LifeInsurance from './LifeInsurance/LifeInsurance.jsx';
import Healthhome from './Health Insurance/Healthhome.jsx';
import Selfhealth from './Health Insurance/Selfhealth.jsx';
import Healthform from './Health Insurance/Healthform.jsx';
import Insurancehome from './CarInsurance/Insurancehome.jsx';
import Carmodel from './CarInsurance/Carmodel.jsx';
import Carname from './CarInsurance/Carname.jsx';
import Carvariant from './CarInsurance/Carvariant.jsx';
import Vehiclespecification from './CarInsurance/Vehiclespecification.jsx';
import CarForm from './CarInsurance/CarForm.jsx';
import BikeForm from './BikeInsurance/BikeForm.jsx';
import BikeDetails from './BikeInsurance/BikeDetails.jsx';
import ExistingPolicy from './Health Insurance/ExistingPolicy.jsx';
import Previous from './Health Insurance/Previous.jsx';
// import StepperForm from './StepperForm/StepperForm.jsx';
// import InsuranceSelection from './InsuranceSelection/InsuranceSelection.jsx';
// import Healthcoverage from './healthcoverage/Healthcoverage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Homes />} />

      {/* 
      trevel product routing */}
      {/* <Route path="/trevelHome" element={<TrevelHome />} /> */}
      <Route path="/treveltreePage1" element={<TreveltreePage1 />} />
      <Route path="/claims" element={<Policycontact/>} />
      <Route path="/policies" element={<Policy/>} />
      <Route path="/account" element={<Profileg/>} />
      <Route path="/help" element={<Servicerequests/>} />
      <Route path="/travel" element={<TrevelHome/>} />
      <Route path="/treveltreePage2" element={<Treveltreepage2/>} />
      <Route path="/bikein" element={<BikeForm/>} />
      {/* <Route path="/bikein" element={<BikeHome/>} /> */}
      <Route path="/life" element={<LifeInsurance/>} />
      <Route path="/health" element={<Healthhome/>} />
      <Route path="/stepper" element={<Selfhealth/>} />
      <Route path="/stepppperform" element={<Healthform/>} />
      <Route path="/car" element={<Insurancehome/>} />
      <Route path="/proceed" element={<Carmodel/>} />
      <Route path="/carname" element={<Carname/>} />
      <Route path="/carvar" element={<Carvariant/>} />
      <Route path="/specify" element={<Vehiclespecification/>} />
      <Route path="/carform" element={<CarForm/>} />
      <Route path="/bikedetainav" element={<BikeDetails/>} />
      <Route path="/premiums" element={<ExistingPolicy/>} />
      <Route path="/myrender" element={<Previous/>} />
      
      {/* <Route path="/bikedetailedetails" element={<BikeDetails/>} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





