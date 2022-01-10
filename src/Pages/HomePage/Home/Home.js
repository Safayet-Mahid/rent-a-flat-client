import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import CityWiseInfo from '../CityWiseInfo/CityWiseInfo';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <CityWiseInfo></CityWiseInfo>
            {/* <Footer></Footer> */}

        </div>
    );
};

export default Home;