import React from "react";
import { Box, Button, Typography, Stepper, Step, StepLabel, Grid, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import './ExistingPolicy.css'
const ExistingPolicy = () => {
  const steps = ["Contact Details", "Existing Policy", "Personal Details", "Demographic Details"];

  return (
    <Box sx={{ padding: "16px", maxWidth: "900px", margin: "0 auto" }}>

      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
        Home &gt; Health Insurance
      </Typography>

      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box textAlign="center" sx={{ margin: "32px 0" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Do you have any existing health insurance in the UAE?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Coverage and premiums based on your policy
        </Typography>
      </Box>
      <div className="exisiting-css">
      <NavLink to='/stepppperform'>
      <IconButton
          className="icn-exixiting-left"
            edge="start"
            aria-label="backward"
            sx={{ color: "#003d2b", backgroundColor: "#f7f7f7", marginRight: "16px" }}  // Increased gap
          >
            <ArrowBackIosIcon />
          </IconButton>
      </NavLink>
      
      <NavLink to='/myrender'>
      <IconButton
      className="icn-exixiting-right"
            edge="end"
            aria-label="forward"
            sx={{ color: "#003d2b", backgroundColor: "#f7f7f7", marginLeft: "16px" ,position:'absolute',top:"10px",Left:'auto'}}  // Increased gap
          >
            <ArrowForwardIosIcon />
          </IconButton>
      </NavLink>
     
      </div>
      {/* First Row of Buttons */}
      <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: 4 }}>
        <Grid  item xs={9} sm={9} md={5} display="flex" justifyContent="center" alignItems="center">
          {/* <IconButton
            edge="start"
            aria-label="backward"
            sx={{ color: "#003d2b", backgroundColor: "#f7f7f7", marginRight: "16px" }}  // Increased gap
          >
            <ArrowBackIosIcon />
          </IconButton> */}
          <Button
            fullWidth
            variant="outlined"
            sx={{
              textTransform: "none",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #003d2b",
              color: "#000",
            }}
          >
            Yes
          </Button>
        </Grid>
        <Grid item xs={9} sm={9} md={5} display="flex" justifyContent="center" alignItems="center">
          <Button
            fullWidth
            variant="outlined"
            sx={{
              textTransform: "none",
              fontSize: "14px",
              padding: "10px",
              border: "1px solid #003d2b",
              color: "#000",
            }}
          >
            The policy expired within the last 30 days
          </Button>
          {/* <IconButton
            edge="end"
            aria-label="forward"
            sx={{ color: "#003d2b", backgroundColor: "#f7f7f7", marginLeft: "16px" }}  // Increased gap
          >
            <ArrowForwardIosIcon />
          </IconButton> */}
        </Grid>
      </Grid>

      {/* Second Row of Buttons (No icon buttons now) */}
      <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: 4 }}>
        <Grid item xs={9} sm={9} md={5}>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              textTransform: "none",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #003d2b",
              color: "#000",
            }}
          >
            The policy expired within the last 30 days
          </Button>
        </Grid>
        <Grid item xs={9} sm={9} md={5}>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              textTransform: "none",
              fontSize: "14px",
              padding: "10px",
              border: "1px solid #003d2b",
              color: "#000",
            }}
          >
            No
          </Button>
        </Grid>
      </Grid>

                
    </Box>
  );
};

export default ExistingPolicy;
