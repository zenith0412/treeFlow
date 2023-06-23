import React from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssistantIcon from '@mui/icons-material/Assistant';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className='profile_picture'>
                </div>
                <div className='icon_div'>
                    <div><GridViewIcon /></div>
                    <div><BeenhereIcon /></div>
                    <div><CalendarTodayIcon /></div>
                    <div><AssistantIcon /></div>
                    <div><PeopleAltIcon /></div>
                    <div><CorporateFareIcon /></div>
                    <div style={{ marginTop: "110px" }}>
                        <div> <NotificationsIcon /></div>
                        <div> <img src={require(".././image/download.jpg")} alt="profile" className='sidebar_profile' /> </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;