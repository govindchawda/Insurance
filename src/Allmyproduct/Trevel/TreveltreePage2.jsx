import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Avatar, Grid } from '@mui/material';

import './travel.css';
import { Checkbox, FormControlLabel, FormGroup, } from '@mui/material';

const TravelTreePage2 = () => {
    const steps = ['Destination', 'Trip date', 'Travellers', 'Contact details'];

    const countries = [
        { code: 'AD', label: 'Andorra', phone: '376' },
        { code: 'AE', label: 'United Arab Emirates', phone: '971' },
        { code: 'AF', label: 'Afghanistan', phone: '93' },
        { code: 'AL', label: 'Albania', phone: '355' },
        { code: 'AM', label: 'Armenia', phone: '374' },
    ];

    // const [fromDate, setFromDate] = useState(null);
    // const [toDate, setToDate] = useState(null);
    const destinations = [
        {
            label: 'Albania',
            image: 'https://cdn.policybazaar.ae/common/destinationCountry/Albania.png', // Replace with actual image URL
        },
        {
            label: 'USA',
            image: '	https://cdn.policybazaar.ae/common/destinationCountry/(USA).png', // Replace with actual image URL
        },
        {
            label: 'Armenia',
            image: '	https://cdn.policybazaar.ae/common/destinationCountry/Armenia.png', // Replace with actual image URL
        },
        {
            label: 'UK',
            image: 'https://cdn.policybazaar.ae/common/destinationCountry/(UK).png', // Replace with actual image URL
        },
        {
            label: 'France',
            image: 'https://cdn.policybazaar.ae/common/destinationCountry/France.png', // Replace with actual image URL
        },
        {
            label: 'India',
            image: 'https://cdn.policybazaar.ae/common/destinationCountry/India.png', // Replace with actual image URL
        },
    ];

    // Validation: Ensure "To" date is after "From" date
    // const isToDateValid = !toDate || !fromDate || dayjs(toDate).isAfter(fromDate);
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [selectedCountry, setSelectedCountry] = useState(null); // Track selected country

    const totalSteps = () => steps.length;

    const completedSteps = () => Object.keys(completed).length;

    const isLastStep = () => activeStep === totalSteps() - 1;

    const allStepsCompleted = () => completedSteps() === totalSteps();

    const isStepValid = (step) => {
        switch (step) {
            case 0:
                return selectedCountry !== null; // Step 1 valid if country selected
            default:
                return true; // Placeholder for other steps
        }
    };

    const handleNext = () => {
        if (!isStepValid(activeStep)) return; // Prevent navigation if invalid
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const handleStep = (step) => () => setActiveStep(step);

    const handleComplete = () => {
        if (!isStepValid(activeStep)) return; // Prevent completion if invalid
        setCompleted({ ...completed, [activeStep]: true });
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
        setSelectedCountry(null);
    };
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="container mt-4 travel2">
            <div className=''>

            </div>
            <Box sx={{ width: '80%', margin: '0 auto', paddingTop: '20px' }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {allStepsCompleted() ? (
                        <>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you're finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                                {(() => {
                                    switch (activeStep) {
                                        case 0:
                                            return (
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 300, mx: 'auto' }}>
                                                  
                                                    <Autocomplete
                                                        id="country-select-demo"
                                                        sx={{ width: '100%', mb: 2 }}
                                                        options={countries}
                                                        autoHighlight
                                                        getOptionLabel={(option) => option.label}
                                                        renderOption={(props, option) => (
                                                            <Box
                                                                component="li"
                                                                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                                                {...props}
                                                            >
                                                                <img
                                                                    loading="lazy"
                                                                    width="20"
                                                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                                    alt={`${option.label} flag`}
                                                                />
                                                                {option.label} ({option.code}) +{option.phone}
                                                            </Box>
                                                        )}
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                label="Choose a country"
                                                                error={activeStep === 0 && !selectedCountry}
                                                                helperText={
                                                                    activeStep === 0 && !selectedCountry
                                                                        ? 'Please select a country to proceed'
                                                                        : ''
                                                                }
                                                            />
                                                        )}
                                                        value={selectedCountry}
                                                        onChange={(event, newValue) => setSelectedCountry(newValue)}
                                                    />

                                                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', width: '100%' }}>
                                                        {/* <p style={{ textAlign: 'left' }}><b>Popular Destinations</b> (Based on your search history)</p> */}
                                                        {/* <div className="d-flex"> */}
                                                        <Box sx={{ textAlign: 'center', p: 4 }}>
                                                            {/* Title */}
                                                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'left' }}>
                                                                Popular Destinations <Typography variant="body2" component="span">(Based on your search history)</Typography>
                                                            </Typography>

                                                            {/* Grid of destinations */}
                                                            <Grid container spacing={2} justifyContent="center">
                                                                {destinations.map((destination, index) => (
                                                                    <Grid item xs={6} sm={4} md={2} key={index}>
                                                                        <Box
                                                                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
                                                                            onClick={() => {
                                                                                const country = countries.find((c) => c.label === destination.label);
                                                                                setSelectedCountry(country || null);
                                                                            }}
                                                                        >
                                                                            <Avatar
                                                                                src={destination.image}
                                                                                alt={destination.label}
                                                                                sx={{
                                                                                    width: 80,
                                                                                    height: 80,
                                                                                    mb: 1,
                                                                                    border: '2px solid #ccc',
                                                                                }}
                                                                            />
                                                                            <Typography variant="body2">{destination.label}</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                ))}
                                                            </Grid>

                                                        </Box>
                                                        {/* </div> */}
                                                    </Typography>
                                                </Box>
                                            );
                                        case 1:
                                            return <Typography>
                                                <h4 className='text-center'>Select the Plan type</h4>
                                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                                    <TabContext value={value}>
                                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                                <Tab label="Single Trip Plan" value="1" />
                                                                <Tab label="Multi-trip Plan" value="2" />
                                                            </TabList>
                                                        </Box>
                                                        <TabPanel value="1">
                                                            <h4 className='text-center'>What are your trip dates?</h4>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DemoContainer components={['DateRangePicker']}>
                                                                    <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
                                                                </DemoContainer>
                                                            </LocalizationProvider>
                                                        </TabPanel>
                                                        <TabPanel value="2">
                                                            <h4 className='text-center'>Please select your Multi-Trip start date:</h4>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DemoContainer components={['DatePicker']}>
                                                                    <DatePicker label="Basic date picker" />
                                                                </DemoContainer>
                                                            </LocalizationProvider>
                                                        </TabPanel>
                                                    </TabContext>
                                                </Box>
                                            </Typography>;
                                        case 2:
                                            return <Typography>
                                                <p className='text-center'> How are you traveling?</p>

                                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                                    <TabContext value={value}>
                                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                                <Tab label="Individual / Group" value="1" />
                                                                <Tab label="WIth Family" value="2" />
                                                            </TabList>
                                                        </Box>
                                                        <TabPanel value="1">
                                                            <h4 className='text-center'>How Many Peoples are Travelling?</h4>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DemoContainer components={['DatePicker']}>

                                                                    <DatePicker label="Basic date picker" />
                                                                </DemoContainer>
                                                            </LocalizationProvider>
                                                        </TabPanel>
                                                        <TabPanel value="2">
                                                            <h4 className='text-center'>Enter Member Details:</h4>
                                                            <FormGroup>
                                                                <FormControlLabel control={<Checkbox defaultChecked />} label="Self" />
                                                                <FormControlLabel control={<Checkbox />} label="Spouse" />
                                                                <FormControlLabel control={<Checkbox />} label="Daughter" />
                                                                <FormControlLabel control={<Checkbox />} label="Son" />
                                                            </FormGroup>
                                                        </TabPanel>
                                                    </TabContext>
                                                </Box>
                                            </Typography>;
                                        case 3:
                                            return <Typography>
                                                <h4 className='text-center'> Contact details form...</h4>

                                                <Box sx={{ width: '100%', typography: 'body1', }}>

                                                    <div className="upper-contacts-input" sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                                                        <TextField sx={{ width: '40%' }} label="Full Name" id="outlined-size-normal " defaultValue="Name" />
                                                        <TextField sx={{ width: '40%' }} label="Email" id="outlined-size-normal" defaultValue="Email" />
                                                    </div>
                                                    <div className="lower-contacts-input mt-4" sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                        <TextField sx={{ width: '40%' }} label="Mobile Number" id="outlined-size-normal" defaultValue="Number" />
                                                        <TextField sx={{ width: '40%' }} label="Nationality" id="outlined-size-normal" defaultValue="Country" />
                                                    </div>
                                                    <p className='aerp'>By Clicking on "View Quotes", I confirm that all travellers do not have a UAE residence visa and agree to the website Privacy Policy and Terms of Use.</p>
                                                    <div className='travel-btn-ceter' > <Button sx={{ marginLeft: 'auto', marginRight: 'auto' }} variant="contained">Contained</Button></div>
                                                </Box>
                                            </Typography>;
                                        default:
                                            return <Typography>Unknown step</Typography>;
                                    }
                                })()}
                            </Typography>
                        </>
                    )}
                </div>
            </Box>
            <div className='travel-icn-posi'>

                <Box className='traveliconpos' sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}

                    >
                        {/* Back */}
                        <i class="fa-solid fa-angle-left"></i>
                        {/* &nbsp;&nbsp;&nbsp;<div  className='d-flex travel-btn-media'><i class="fa-solid fa-arrow-left"></i>back</div> */}
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleNext} >
                        {/* Next */}
                        {/* &nbsp; <div className='d-flex travel-btn-media' style={{color:'#003d2b'}}>next<i class="fa-solid fa-arrow-right"></i></div> */}
                        <i class="fa-solid fa-angle-right mycolor"></i>
                    </Button>
                    {/* {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                            Step {activeStep + 1} already completed
                                        </Typography>
                                    ) : (
                                        <Button onClick={handleComplete}>
                                            {completedSteps() === totalSteps() - 1 ? 'Finish' : 'next'}
                                        </Button>
                                    ))} */}
                </Box>
            </div>
        </div>
    );
};

export default TravelTreePage2;













