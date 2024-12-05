import React from "react";
import { TextField, Button, Typography, Box, Container, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./healthform.css"; // Assuming you still want to keep custom CSS
import { NavLink } from "react-router-dom";

const Healthform = () => {
  return (
    <>
      <Container maxWidth="sm" className="mt-5">
        {/* Step Navigation */}
        <Box display="flex" alignItems="center" mb={4}>
          <div className="step  text-center">
            <Typography className="step_main" variant="body2" color="success.main">
              Contact Details
            </Typography>
            <div className="circle circle_details border mb-2 mx-auto mt-2">1</div>
          </div>

          {/* Progress Line */}
          <Box flex="1" height="2px" bgcolor="grey.300" mx={2} />

          <div className="step text-center">
            <Typography className="step_main" variant="body2">Existing Policy</Typography>
            <div className="circle circle_details border mb-2 mx-auto mt-2">2</div>
          </div>

          {/* Progress Line */}
          <Box flex="1" height="2px" bgcolor="grey.300" mx={2} />

          <div className="step text-center">
            <Typography className="step_main" variant="body2">Personal Details</Typography>
            <div className="circle circle_details border mb-2 mx-auto mt-2">3</div>
          </div>

          {/* Progress Line */}
          <Box flex="1" height="2px" bgcolor="grey.300" mx={2} />

          <div className="step text-center">
            <Typography className="step_main" variant="body2">Demographic Details</Typography>
            <div className="circle circle_details border mb-2 mx-auto mt-2">4</div>
          </div>
        </Box>

        {/* Form Section */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h4">Enter Your Details</Typography>
          <Typography variant="body2" color="textSecondary">
            Your personal data is safe with us!
          </Typography>
        </Box>

        {/* Form */}
        <form>
          <Box display="flex" justifyContent="center" alignItems="center">
            <NavLink to="/stepper">
            <IconButton
              edge="start"
              aria-label="backward"
              style={{ marginRight: 10 , color: '#003d2b' , backgroundColor:"#f7f7f7" }}
            >
              <ArrowBackIos />
            </IconButton>
            </NavLink>
            

            <Box width="100%" maxWidth={600}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
                required
              />
              <TextField
                fullWidth
                label="Mobile Number"
                variant="outlined"
                margin="normal"
                type="tel"
                required
              />
            </Box>

             <NavLink to='/premiums'> <IconButton
              edge="end"
              aria-label="forward"
              style={{ marginLeft: 10 , color: '#003d2b' , backgroundColor:"#f7f7f7"}}
            >
              <ArrowForwardIos />
            </IconButton></NavLink>
           
          </Box>

          {/* Legal Notice */}
          <Box textAlign="center" mt={2}>
            <Typography variant="caption" color="textSecondary">
              By Clicking on "Continue", I declare that I am a resident of UAE and
              holding a valid Visa and agree to the website{" "}
              <a href="#" className="text-decoration-none">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-decoration-none">
                Terms of Use
              </a>
              .
            </Typography>
          </Box>

          {/* Continue Button */}
          <Box textAlign="center" mt={4}>
          <NavLink to='/premiums'>
          <Button
              style={{ backgroundColor: "#003d2b", padding: "10px", textTransform: "none" }}
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
            >
              Continue
            </Button>
          </NavLink>
            
          </Box>
        </form>
      </Container>
    </>
  );
};

export default Healthform;
