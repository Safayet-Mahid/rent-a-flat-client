import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import PropertyDetails from '../PropertyDetails/PropertyDetails';


const Property = () => {

    return (
        <div>
            <Navigation></Navigation>

            <h2>This is property page

            </h2>

            <PropertyDetails></PropertyDetails>
            <Footer></Footer>

        </div>
    );
};

export default Property;