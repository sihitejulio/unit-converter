import React from "react";
import BottomNav from '../components/BottomNav';
import HeaderProfile from '../components/HeaderProfile';
import BallanceCard from '../components/BallanceCard';
import TranscationNav from '../components/TransctionNav';
import LatestTransaction from '../components/LatestTransaction';

class Home extends React.Component {
    render() {
        return (
        <div>
            <HeaderProfile/>        
            <BallanceCard/>
            <TranscationNav/>        
            <LatestTransaction/>        
            <BottomNav/>        
        </div>
        )
    }
}

export default Home;