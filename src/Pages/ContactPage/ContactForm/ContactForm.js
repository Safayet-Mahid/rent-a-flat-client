import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Container, Typography, TextField, InputLabel, Button } from '@mui/material';

const ContactForm = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ border: "1px solid red" }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' }, textAlign: "left",
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div style={{ display: "flex" }}>
                            <div>
                                <InputLabel htmlFor="name" >Name</InputLabel>

                                <TextField id="name" variant="outlined" style={{ width: "100%", flex: 1 }} />
                            </div>

                            <div style={{ marginLeft: "20px" }}>
                                <InputLabel htmlFor="email">Email</InputLabel>

                                <TextField id="email" variant="outlined" style={{ width: "100%", flex: 1 }} />
                            </div>

                        </div>
                        <InputLabel htmlFor="message" >Message</InputLabel>
                        <TextField
                            id="message"
                            multiline
                            rows={4}
                            placeholder="Enter your message"
                        />
                        <Button variant="outlined" style={{ width: "50%", justifyContent: "center" }}>- Send</Button>
                    </Box>




                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterbgottom>Our Contacts</Typography>
                    <Typography variant="p" gutterbgottom>Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device</Typography>
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
        </Container>
    );
};

export default ContactForm;