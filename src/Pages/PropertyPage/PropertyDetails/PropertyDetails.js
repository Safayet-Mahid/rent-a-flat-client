import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

import SingleProperty from '../SingleProperty/SingleProperty';

const PropertyDetails = () => {

    const [properties, setProperties] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/properties")
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])
    return (
        <Container>
            <Grid container spacing={2}>


                {
                    properties.map(property => <SingleProperty
                        key={property._id}
                        propertyInfo={property}

                    ></SingleProperty>)
                }


            </Grid>
        </Container>
    );
};

export default PropertyDetails;