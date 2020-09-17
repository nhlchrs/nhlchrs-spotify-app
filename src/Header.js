import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{user}] = useDataLayerValue();
    console.log({user})
    return (
        <div className="header">
        
            <div className="header_left">
            <SearchIcon/>
            <input type="text"
                placeholder="Enter album/artists/Track"
            />
            </div>
            <div className="header_right">
            <Avatar src={user?.images[0]?.url} alt="Nihal"/>

                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
