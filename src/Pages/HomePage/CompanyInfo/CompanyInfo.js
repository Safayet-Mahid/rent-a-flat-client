import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import company1 from "../../../images/company1.jpg";
import company2 from "../../../images/company2.jpg";
import { Container, Typography } from '@mui/material';

const CompanyInfo = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 5 }} >
            <Grid container spacing={2} style={{ textAlign: 'left' }}>
                <Grid item xs={12} md={5}>
                    <img src={company1} alt="" style={{ width: "100%", height: "100%" }} />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography sx={{ fontWeight: 200 }} variant="h2" component="div" gutterBottom>

                        Something About Our Company
                    </Typography>
                    <Typography sx={{ fontWeight: 200 }} variant="p" component="div" gutterBottom>

                        Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device
                    </Typography>
                    <Box>
                        <Grid container spacing={2} style={{ textAlign: 'left' }}>
                            <Grid item xs={12} md={4}>
                                <Typography sx={{ fontWeight: 200 }} variant="h4" component="div" gutterBottom>

                                    15+
                                </Typography>
                                <Typography sx={{ fontWeight: 200 }} variant="p" component="div" gutterBottom>

                                    Years of Expirience
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography sx={{ fontWeight: 200 }} variant="h4" component="div" gutterBottom>

                                    15+
                                </Typography>
                                <Typography sx={{ fontWeight: 200 }} variant="p" component="div" gutterBottom>

                                    Years of Expirience
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography sx={{ fontWeight: 200 }} variant="h4" component="div" gutterBottom>

                                    15+
                                </Typography>
                                <Typography sx={{ fontWeight: 200 }} variant="p" component="div" gutterBottom>

                                    Years of Expirience
                                </Typography>
                            </Grid>
                        </Grid>

                    </Box>
                    <img src={company2} alt="" style={{ width: "100%" }} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default CompanyInfo;