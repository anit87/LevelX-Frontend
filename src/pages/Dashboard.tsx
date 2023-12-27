// import React from 'react';
import ScoreBoard from '../components/ScoreBoard';
import PlayerSection from '../components/playerSection/Index';
import SocialSection from '../components/socialSection/Index';

const Dashboard = () => {
    return (
        <div className="background-image">
            {/* first section */}
            <div className="image-container">
                <ScoreBoard />
            </div>

            {/* <div className="left-container">
                <PlayerSection />
            </div>
            <div className="right-container">
                <SocialSection />
            </div> */}
            {/* Combined section */}
            <div className="combined-container">
                <div className="left-container">
                    <PlayerSection />
                </div>
                <div className="right-container">
                    <SocialSection />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
