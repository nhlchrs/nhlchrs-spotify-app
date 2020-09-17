import React from 'react'
import './Body.css';
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useDataLayerValue} from './DataLayer'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
function Body({spotify}) {
    const[{discover_weekly}] = useDataLayerValue();
    console.log({discover_weekly});
    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body_info">
                <img src={discover_weekly?.images[0]?.url} alt="Nha"/>
                <div className="body_infotext">
                    <strong>PLAYLIST</strong>
                    <h4>{discover_weekly?.name}</h4>
                    <p>{discover_weekly?.href}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>
                {discover_weekly?.tracks.items.map((item)=>(
                    <SongRow title={item.track}/>
                ))}
            </div>
        </div>
    )
}

export default Body