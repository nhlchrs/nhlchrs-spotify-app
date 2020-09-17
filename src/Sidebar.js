import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer'
function Sidebar() {
    const [{playlists}]= useDataLayerValue();
    return (
        <div className="Sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Logo"/>
            <SidebarOption title="Mihal" Icon= {HomeOutlinedIcon} />
            <SidebarOption title="Mihal" Icon={SearchIcon}/>
            <SidebarOption title="Mihal" Icon= {LibraryMusicIcon}/>
        <br/>
        <strong className="sidebar_title">PLAYLISTS</strong>
        <hr/>
        {playlists?.items?.map(playlist=>(
            <SidebarOption key={playlist.id} title={playlist.name}/>
        ))}

        </div> 
    )
}
export default Sidebar
