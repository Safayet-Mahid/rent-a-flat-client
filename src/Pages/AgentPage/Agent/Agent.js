import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AgentBanner from '../AgentBanner/AgentBanner';
import AgentLists from '../AgentLists/AgentLists';

const Agent = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AgentBanner></AgentBanner>
            <AgentLists></AgentLists>
            <Footer></Footer>
        </div>
    );
};

export default Agent;