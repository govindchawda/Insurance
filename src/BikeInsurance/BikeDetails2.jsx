import React from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  Button,
  FormControl,
  InputLabel,
  Paper,
} from "@mui/material";
import './BikeForm.css';
const BikeDetails2 = () => {
  return (
    <>
    <Paper 
    className="bikenav-detail"
      elevation={2}
      sx={{
        padding: "1.5rem",
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    >
      {/* Header */}
      <Typography
        variant="p"
        fontWeight="600"
        sx={{
          fontSize: {
            xs: "1rem",  // Mobile font size
            sm: "1.2rem",  // Tablet font size
            md: "1.1rem",  // Desktop font size
          },
        }}
      >
        Secure your bike in a few easy clicks
      </Typography>

      {/* Model Year */}
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel
          id="model-year-label"
          sx={{
            fontSize: {
              xs: "0.7rem", // Mobile font size
              sm: "0.8rem", // Tablet font size
              md: "0.8rem", // Desktop font size
            },
          }}
        >
          Model Year
        </InputLabel>
        <Select
          labelId="model-year-label"
          label="Model Year"
          id="model-year"
          defaultValue=""
          sx={{
            fontSize: "0.85rem",
            height: "2.9rem",
            "& .MuiOutlinedInput-root": {
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#003D2B", // Change border color on hover
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#003D2B", // Change border color when focused
              },
              "&.Mui-focused .MuiInputLabel-root": {
                color: "#003D2B", // Change label color when focused
              },
            },
          }}
        >
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
        </Select>
      </FormControl>

      {/* Registration City */}
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel
          id="registration-city-label"
          sx={{
            fontSize: {
              xs: "0.7rem", // Mobile font size
              sm: "0.8rem", // Tablet font size
              md: "0.8rem", // Desktop font size
            },
          }}
        >
          Registration City
        </InputLabel>
        <Select
          labelId="registration-city-label"
          label="Registration City"
          id="registration-city"
          defaultValue=""
          sx={{
            fontSize: "0.85rem",
            height: "2.9rem",
            "& .MuiOutlinedInput-root": {
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#003D2B", // Change border color on hover
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#003D2B", // Change border color when focused
              },
              "&.Mui-focused .MuiInputLabel-root": {
                color: "#003D2B", // Change label color when focused
              },
            },
          }}
        >
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
        </Select>
      </FormControl>

      {/* Engine Capacity */}
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel
          id="Engine-Capacity-label"
          sx={{
            fontSize: {
              xs: "0.7rem", // Mobile font size
              sm: "0.8rem", // Tablet font size
              md: "0.8rem", // Desktop font size
            },
          }}
        >
          Engine Capacity
        </InputLabel>
        <Select
          labelId="Engine-Capacity-label"
          label="Engine Capacity"
          id="Engine-Capacity"
          defaultValue=""
          sx={{
            fontSize: "0.85rem",
            height: "2.9rem",
            "& .MuiOutlinedInput-root": {
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#003D2B", // Change border color on hover
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#003D2B", // Change border color when focused
              },
              "&.Mui-focused .MuiInputLabel-root": {
                color: "#003D2B", // Change label color when focused
              },
            },
          }}
        >
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
        </Select>
      </FormControl>

      {/* UAE Driving Experience */}
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel
          id="UAE-Driving-Experience-label"
          sx={{
            fontSize: {
              xs: "0.7rem", // Mobile font size
              sm: "0.8rem", // Tablet font size
              md: "0.8rem", // Desktop font size
            },
          }}
        >
          UAE Driving Experience
        </InputLabel>
        <Select
          labelId="UAE-Driving-Experience-label"
          label="UAE Driving Experience"
          id="UAE-Driving-Experience"
          defaultValue=""
          sx={{
            fontSize: "0.85rem",
            height: "2.9rem",
            "& .MuiOutlinedInput-root": {
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#003D2B", // Change border color on hover
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#003D2B", // Change border color when focused
              },
              "&.Mui-focused .MuiInputLabel-root": {
                color: "#003D2B", // Change label color when focused
              },
            },
          }}
        >
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
        </Select>
      </FormControl>

      {/* Disclaimer */}
      <Typography
        variant="body2"
        sx={{
          fontSize: {
            xs: "0.6rem", 
            sm: "0.7rem", 
            md: "0.68rem", 
          },
          mt: 2,
          color: "gray",
        }}
      >
        By Clicking on "View Quotes", I declare that I am a resident of UAE and holding a valid Visa and agree to the website{" "}
        <a href="/" style={{ color: "#003d2b", textDecoration: "none" }}>
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/" style={{ color: "#003d2b", textDecoration: "none" }}>
          Terms of Use
        </a>
        .
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          gap: "1rem",
          flexDirection: {
            xs: "column",  // Stack buttons on mobile
            sm: "row",     // Arrange buttons horizontally on tablets and larger
          },
        }}
      >
      
        <Button
          variant="outlined"
          size="large"
          sx={{
            fontSize: {
              xs: "0.6rem", // Mobile font size
              sm: "0.7rem",    // Tablet font size
              md: "0.7rem",  // Desktop font size
              flex: "1",
              backgroundColor: '#003D2B', 
              color: "white"
            },
            '&:hover': {
              backgroundColor: '#F9491F', // Background color on hover
              borderColor: '#F9491F',     // Border color on hover
              color: '#ffffff',           // Text color on hover
            },
          }}
        >
          View Quotes
        </Button>
      </Box>
    </Paper>
    </>
  );
};

export default BikeDetails2;
