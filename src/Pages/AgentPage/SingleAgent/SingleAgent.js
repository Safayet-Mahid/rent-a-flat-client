import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SingleAgent = ({ agentInfo }) => {
    const { id, name, phone, img } = agentInfo;
    return (
        <Grid item xs={12} md={3}>
            <img src={img} alt="" />
            <Box sx={{ p: 2 }}>
                <Typography variant="h5" component="div" gutterbottom>
                    {name}
                </Typography>
                <Typography variant="h6" component="div" gutterbottom>
                    {phone}
                </Typography>

            </Box>
        </Grid >
    );
};

export default SingleAgent;