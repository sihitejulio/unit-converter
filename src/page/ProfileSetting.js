import React from "react";
import BottomNav from '../components/BottomNav';
import HeaderProfile from '../components/HeaderProfile';
import Settings from '../components/Settings';

class ProfileSettting extends React.Component {
    render() {
        return (
        <div>
            <HeaderProfile/>         
            <Settings/>        
            <BottomNav/>        
        </div>
        )
    }
}

export default ProfileSettting;