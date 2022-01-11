import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import footerbg from "../../../images/footerbg.jpeg"

const Footer = () => {
    return (
        <Box style={{ backgroundImage: `url(${footerbg})` }}>
            <Container sx={{ flexGrow: 1, mt: 5 }} >
                <Grid container spacing={2} sx={{ textAlign: "left" }} >
                    <Grid item xs={6} md={8}>
                        <Typography variant="h4" component="div" gutterBottom>
                            A special and qualified service dedicated to luxury properties for rent
                        </Typography>
                        <Box>
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={6}>
                                    <Typography variant="p" component="div" gutterBottom >
                                        -Properties</Typography>
                                    <Typography variant="p" component="div" gutterBottom >
                                        -Agents</Typography>
                                    <Typography variant="p" component="div" gutterBottom >
                                        -Locations</Typography>
                                    <Typography variant="p" component="div" gutterBottom >
                                        -Clients Support</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="p" component="div" gutterBottom >
                                        -Home</Typography>
                                    <Typography variant="p" component="div" gutterBottom >
                                        -About</Typography>
                                    <Typography variant="p" component="div" gutterBottom >
                                        -Blog</Typography>
                                    <Typography variant="p" component="div" gutterBottom >
                                        -Contacts</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 700 }}>
                            <i class="fa fa-map-marker fa-lg"></i> Rent A Car</Typography>
                        <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 700 }}>
                            <i class="fa fa-phone fa-lg"></i> Rent A Car</Typography>
                        <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 700 }}>
                            <i class="fa fa-envelope fa-lg"></i> Rent A Car</Typography>
                        <Box>
                            <Typography variant="span" component="span" gutterBottom sx={{ fontWeight: 700 }}>
                                <i class="fa fa-twitter fa-lg"></i></Typography>
                            <Typography variant="span" component="span" gutterBottom sx={{ fontWeight: 700 }}>
                                <i class="fa fa-facebook fa-lg"></i></Typography>
                            <Typography variant="span" component="span" gutterBottom sx={{ fontWeight: 700 }}>
                                <i class="fa fa-instagram fa-lg"></i></Typography>
                        </Box>

                    </Grid>

                </Grid>
            </Container >
        </Box>
    );
};

export default Footer;

