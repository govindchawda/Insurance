import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Stepper,
  Step,
  StepLabel,
  MenuItem,
  TextField,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";

const insurers = [
  "Cigna",
  "Daman",
  "Sukoon Insurance",
  "Dubai Insurance",
  "Dubai National",
  "Takaful Emarat",
  "Orient Insurance",
  "Dubai National",
  'Sehteq',
  'Abu Dhabi',
  'Alliance',
  'Metlife',
  'United Insurance',
  'Qatar Insurnce',
  'Others',
];

const Previous = () => {
  const [selectedInsurer, setSelectedInsurer] = useState("");
  const [showMore, setShowMore] = useState(false);

  const steps = ["Contact Details", "Existing Policy", "Personal Details", "Demographic Details"];

  const handleSelect = (insurer) => {
    setSelectedInsurer(insurer);
  };

  return (
    <Box
      sx={{
        width: "50%",
        padding: "20px",
        display: "flex",
        flexDirection: "column", // Ensure the content is stacked vertically
        alignItems: "center",    // Horizontally center the content
        justifyContent: "center", // Vertically center the content
        margin: "0 auto",         // Center the container horizontally
        minHeight: "100vh",        // Ensure it takes up at least the full height of the screen
      }}
    >
      {/* Stepper */}
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Form */}
      <Box sx={{ marginTop: "40px", width: "100%" }}>
        <Typography variant="h6" align="center">
          Previous Insurer
        </Typography>
        <Box sx={{ marginY: "20px", textAlign: "center" }}>
          <TextField
            select
            label="Select Insurer"
            value={selectedInsurer}
            onChange={(e) => handleSelect(e.target.value)}
            sx={{ width: "250px" }}
          >
            {insurers.map((insurer, index) => (
              <MenuItem key={index} value={insurer}>
                {insurer}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        {selectedInsurer  && (
          <Typography  align="center" sx={{ marginBottom: "20px" }}>
            <strong>Currently Selected:</strong> {selectedInsurer}
          </Typography>
        )}

        {/* Insurer Buttons */}
        <Grid container spacing={2} justifyContent="center">
          {(showMore ? insurers : insurers.slice(0, 6)).map((insurer, index) => (
            <Grid item key={index} xs={4}> {/* Adjusted to 4 columns (3 buttons per row) */}
              <Button className="country_btn" style={{border:'1px solid #003d2b', color:'#003d2b'}}
                variant={selectedInsurer === insurer ? "contained" : "outlined"}
                onClick={() => handleSelect(insurer)}
                fullWidth
              >
                {insurer}
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Show More */}
        {!showMore && (
          <Typography
            align="center"
            sx={{ marginTop: "20px", color: "#003d2b", cursor: "pointer" }}
            onClick={() => setShowMore(true)}
          >
            Show more
          </Typography>
        )}
      </Box>

      {/* Navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
          width: "100%", // Ensure the navigation is centered
        }}
      >
        <IconButton>
        <NavLink to='/premiums'><ArrowBackIosIcon /></NavLink></IconButton>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Previous;
