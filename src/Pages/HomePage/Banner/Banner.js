import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import bannerbuilding from "../../../images/istockphoto-1056874398-612x612.jpg"

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }} >
            <Grid container spacing={2} >
                <Grid item xs={12} md={5} sx={{ my: "auto" }}>
                    <Box style={{ textAlign: "left" }}>
                        <Typography sx={{ fontWeight: 500 }} variant="h2" component="div" gutterBottom>
                            Apartments <br /> for life
                        </Typography>
                        <Typography sx={{ fontWeight: 500 }} variant="h6" component="div" gutterBottom>
                            In the heart of Brooklyn, in a vibrant neighborhood just east of Prospect Park,
                            stands an eight-story, full-service, strikingly beautiful apartment building
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} sx={{ px: 5 }}>
                    <img style={{ width: "100%" }} src={bannerbuilding} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Banner;