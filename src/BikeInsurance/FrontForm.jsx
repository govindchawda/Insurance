import { Box, Grid, Paper, TextField, Typography, MenuItem, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FrontForm = () => {
    return (
        <>
            <Paper
                elevation={2}
                sx={{
                    padding: "1.5rem",
                    backgroundColor: "white",
                    borderRadius: "8px",
                }}
            >
                <Typography variant="subtitle1" gutterBottom align="start">
                    Secure your bike in a few easy clicks
                </Typography>

                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <TextField
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        InputProps={{
                            style: {
                                fontSize: '0.7rem',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                fontSize: '0.7rem',
                            },
                        }}
                    />

                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                            style: {
                                fontSize: '0.7rem',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                fontSize: '0.7rem',
                            },
                        }}
                    />

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Date of Birth (DD/MM/YYYY)"
                                variant="outlined"
                                margin="normal"
                                InputProps={{
                                    style: {
                                        fontSize: '0.7rem',
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: '0.7rem',
                                    },
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                select
                                label="Nationality"
                                variant="outlined"
                                margin="normal"
                                InputProps={{
                                    style: {
                                        fontSize: '0.7rem',
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: '0.7rem',
                                    },
                                }}
                            >
                                <MenuItem value="UAE">UAE</MenuItem>
                                <MenuItem value="India">India</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>

                    <TextField
                        fullWidth
                        label="Mobile Number"
                        type="tel"
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                            style: { fontSize: '1rem' },
                        }}
                        InputProps={{
                            startAdornment: (
                                <Typography sx={{ pr: 1, fontSize: '0.7rem' }}>+91</Typography>
                            ),
                            style: {
                                fontSize: '0.8rem',
                            },
                        }}
                    />
                    <Link to='/bikedetainav'>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                backgroundColor: "#003d2b",
                                "&:hover": {
                                    backgroundColor: "#d43f1b",
                                },
                            }}
                            >
                            Proceed
                        </Button>
                            </Link>

                    <Typography
                        variant="body2"
                        sx={{
                            mt: 2,
                            textAlign: "start",
                            fontSize: "0.6rem",
                            color: "gray",
                        }}
                    >
                        By clicking on "Proceed", I declare that I am a resident of
                        UAE and holding a valid Visa and agree to the website{" "}
                        <a
                            href="#"
                            style={{ textDecoration: "none", color: "#003d2b" }}
                        >
                            Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a
                            href="#"
                            style={{ textDecoration: "none", color: "#003d2b    " }}
                        >
                            Terms of Use
                        </a>
                        .
                    </Typography>
                </Box>
            </Paper>
        </>
    );
};

export default FrontForm;
