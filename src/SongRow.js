import React from 'react'
import './Songrow.css'
function SongRow({title}) {
    return (
        <div className="songrow">
        <img className="image_logo" src={title.album.images[0].url} alt="album"/>
        <div className="song_info">
            <h1>{title.name}</h1>
            {title.artists.map((artist) => artist.name).join(", ")} -{" "}
              {title.album.name}
              </div>
            <hr/>
        </div>
    )
}

export default SongRow
