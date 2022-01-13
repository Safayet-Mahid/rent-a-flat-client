import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import CityWiseInfo from '../CityWiseInfo/CityWiseInfo';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import TraditionalApartments from '../TraditionalApartments/TraditionalApartments';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <TraditionalApartments></TraditionalApartments>
            <CityWiseInfo></CityWiseInfo>
            <CompanyInfo></CompanyInfo>
            <Footer></Footer>

        </div>
    );
};

export default Home;