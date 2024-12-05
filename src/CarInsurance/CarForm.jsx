import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom"; // Correct import
import "./CarForm.css";

const CarForm = () => {
  const fieldHeight = "2.5rem"; // Consistent height for all fields
  const placeholderFontSize = "0.8rem"; // Smaller font size for the placeholder
  const labelFontSize = "0.7rem"; // Smaller font size for the label

  return (
    <>
      <Box className="container" sx={{ marginTop: 5 }}>
        <Box className="form-container row">
          {/* Left Section */}
          <Box
            className="col-lg-4 col-md-4 buy_inc"
            sx={{ backgroundColor: "#f7fcff", padding: 3 }}
          >
            <Typography variant="h5" sx={{ fontWeight: 300 }}>
              Car Insurance
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 300, marginTop: 1 }}>
              Buy Car Insurance in 30 Seconds!
            </Typography>
            <Box sx={{ marginTop: 5 }}>
              <img
                style={{ marginTop: "50%" }}
                src="https://cdn.policybazaar.ae/pbuae/images/car-new-banner.svg"
                alt="car insurance banner"
                width="100%"
              />
            </Box>
          </Box>

          {/* Right Section */}
          <Box className="col-md-7">

            {/* Back Link */}
            <Link className='mycolor' to="/carvar" style={{ textDecoration: 'none', fontSize: '16px', color: '#007bff', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <i className="fas fa-arrow-left"></i> Back
            </Link>

            <Typography
              variant="h6"
              sx={{ marginBottom: 3 , marginTop:'20px'}}
            >
              Please Fill Your Details
            </Typography>

            <form>
              {/* Name and Email Inputs */}
              <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
                <TextField
                  fullWidth
                  required
                  label="Your Name"
                  variant="outlined"
                  size="medium"
                  InputProps={{
                    style: { height: fieldHeight },
                    inputProps: {
                      style: { fontSize: placeholderFontSize }, // Apply smaller font size to placeholder
                    },
                  }}
                  sx={{ "& .MuiFormLabel-root": { fontSize: labelFontSize } }} // Apply smaller font size to label
                />
                <TextField
                  fullWidth
                  required
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="medium"
                  InputProps={{
                    style: { height: fieldHeight },
                    inputProps: {
                      style: { fontSize: placeholderFontSize }, // Apply smaller font size to placeholder
                    },
                  }}
                  sx={{ "& .MuiFormLabel-root": { fontSize: labelFontSize } }} // Apply smaller font size to label
                />
              </Box>

              {/* Date and Mobile Inputs */}
              <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
                <TextField
                  fullWidth
                  required
                  label="Date of Birth (DD/MMM/YYYY)"
                  type="text"
                  variant="outlined"
                  size="medium"
                  InputProps={{
                    style: { height: fieldHeight },
                    inputProps: {
                      style: { fontSize: placeholderFontSize }, // Apply smaller font size to placeholder
                    },
                  }}
                  sx={{ "& .MuiFormLabel-root": { fontSize: labelFontSize } }} // Apply smaller font size to label
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    paddingLeft: "8px",
                    height: fieldHeight,
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  <Typography sx={{ fontSize: "14px" }}>+91</Typography>
                  <TextField
                    fullWidth
                    required
                    placeholder="Mobile Number"
                    type="number"
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      style: { height: fieldHeight },
                      inputProps: {
                        style: { fontSize: placeholderFontSize }, // Apply smaller font size to placeholder
                      },
                    }}
                    sx={{ "& .MuiFormLabel-root": { fontSize: labelFontSize } }} // Apply smaller font size to label
                  />
                </Box>
              </Box>

              {/* Declaration */}
              <Typography
                variant="body2"
                sx={{
                  marginBottom: 3,
                  color: "#666",
                  textAlign: "center",
                }}
              >
                By clicking on "Proceed", I declare that I am a resident of UAE
                and holding a valid Visa and agree to the website{" "}
                <a href="#" className="mycolor">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="mycolor">
                  Terms of Use
                </a>
                .
              </Typography>

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  padding: "5px",
                  backgroundColor: "#003d2b",
                  textTransform: 'none',
                  color: "#fff",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#c32e27",
                  },
                }}
              >
                Proceed
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CarForm;
