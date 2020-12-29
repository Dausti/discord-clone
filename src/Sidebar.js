import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';


function Sidebar() {
    return (
    <div className="sidebar">
    
    {/* top section/channel selector */}
        <div className="sidebar__top">
        <h3>Channel</h3>
        <ExpandMoreIcon />
        </div>

        <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
                <div className="sidebar__header">
                    <ExpandMoreIcon />
                    <h4>Your Channels</h4>
                </div>
                <AddIcon className="sidebar__addChannel" />
            </div>
        </div>  

    </div>
    )
}

export default Sidebar
