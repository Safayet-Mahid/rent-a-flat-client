import { Container, Grid } from '@mui/material';
import React from 'react';
import SingleAgent from '../SingleAgent/SingleAgent';

const AgentLists = () => {
    const agents = [
        {
            id: 0,
            name: "Polina Podolski",
            phone: "+ 123 4567 890",
            img: "https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/business-woman-with-digital-tablet-at-home-BDL6KDU-1.jpg"
        },
        {
            id: 1,
            name: "Polina Podolski",
            phone: "+ 123 4567 890",
            img: "https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/business-woman-with-digital-tablet-at-home-BDL6KDU-1.jpg"
        },
        {
            id: 2,
            name: "Polina Podolski",
            phone: "+ 123 4567 890",
            img: "https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/business-woman-with-digital-tablet-at-home-BDL6KDU-1.jpg"
        },
        {
            id: 3,
            name: "Polina Podolski",
            phone: "+ 123 4567 890",
            img: "https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/business-woman-with-digital-tablet-at-home-BDL6KDU-1.jpg"
        },
        {
            id: 4,
            name: "Polina Podolski",
            phone: "+ 123 4567 890",
            img: "https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/business-woman-with-digital-tablet-at-home-BDL6KDU-1.jpg"
        },
        {
            id: 5,
            name: "Polina Podolski",
            phone: "+ 123 4567 890",
            img: "https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/business-woman-with-digital-tablet-at-home-BDL6KDU-1.jpg"
        },
        {
            id: 6,
            name: "Polina Podolski",
            phone: "+ 123 4567 890",
            img: "https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/business-woman-with-digital-tablet-at-home-BDL6KDU-1.jpg"
        },
        {
            id: 7,
            name: "Polina Podolski",
            phone: "+ 123 4567 890",
            img: "https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/business-woman-with-digital-tablet-at-home-BDL6KDU-1.jpg"
        },

    ]
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {
                    agents.map(agent => <SingleAgent
                        key={agent.id}
                        agentInfo={agent}>


                    </SingleAgent>)
                }

            </Grid>
        </Container>
    );
};

export default AgentLists;