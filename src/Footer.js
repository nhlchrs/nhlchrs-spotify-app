import React from 'react'
import './Footer.css'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { Grid ,Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img src="https://pbs.twimg.com/profile_images/1229341136948363265/iimDpcQ3_400x400.jpg" className="album_logo" alt="thumbnail"/>
                <div className="footerSong_info">
                    <h4>hi headre</h4>
                    <p>ERock nr olll</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleFilledOutlinedIcon classN    ame="footer_icon" fontSize="large"/>
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_green"/>
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon/>
                </Grid>
                <Grid item>
                    <VolumeDownIcon/>
                </Grid>
                <Grid item xs>
                    <Slider/>
                </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Footer
