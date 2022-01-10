import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import newyork from "../../../images/newyork.jpg"

const CityWiseInfo = () => {
    return (
        <Grid container justifyContent="flex-end" style={{ marginTop: "10px" }}>
            <Grid item xs={12} md={2} sx={{ border: "1px solid red", px: "2px", my: "auto" }} >
                <Box style={{ textAlign: "left" }}>
                    <Typography sx={{ fontWeight: 500 }} variant="h2" component="div" gutterBottom>

                        Sunny Loft <br />Apartments
                    </Typography>
                    <Typography sx={{ fontWeight: 200 }} variant="p" component="div" gutterBottom>

                        From the rooftop terrace, down to the first floor gym, every detail of eight floors provides amenities filled with convenience, class
                    </Typography>
                    <Button variant="contained" sx={{ px: 5, py: 1 }}>
                        -View
                    </Button>

                </Box>
            </Grid>
            <Grid item xs={12} md={2} sx={{ border: "1px solid red" }}>
                <img style={{ width: "100%", height: "100%" }} src={newyork} alt="" />
            </Grid>
            <Grid item xs={12} md={2} sx={{ border: "1px solid red" }}>
                <img style={{ width: "100%", height: "100%" }} src={newyork} alt="" />
            </Grid>
            <Grid item xs={12} md={2} sx={{ border: "1px solid red" }}>
                <img style={{ width: "100%", height: "100%" }} src={newyork} alt="" />
            </Grid>
            <Grid item xs={12} md={2} sx={{ border: "1px solid red" }}>
                <img style={{ width: "100%", height: "100%" }} src={newyork} alt="" />
            </Grid>
        </Grid>
    );
};

export default CityWiseInfo;