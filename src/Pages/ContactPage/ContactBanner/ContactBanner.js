import React from 'react';
import { Container, Typography } from '@mui/material';
import agentbanner from "../../../images/agentbanner.jpg";


const ContactBanner = () => {
    const bg = {
        backgroundImage: `url(${agentbanner})`,
        width: "100%",
        height: "350px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <div style={bg}>
            <Container sx={{ textAlign: "left", height: "350px" }}>
                <Typography variant="h4" component="div" gutterBottom sx={{ my: "auto", ml: 5 }}>
                    Contacts
                </Typography>

            </Container>
        </div>
    );
};

export default ContactBanner;