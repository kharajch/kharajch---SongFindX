
"use client"
import { music } from "./music-data"
import { useState } from "react"

function AudioFiles({ index }) {
  return (<audio src={`/music/audio/${music[index].name}.mp3`} index={index}></audio>)
}

const Card = (props) => {



  var music_files = [];

  for (let i = 0; i < music.length; i++) {
    music_files.push(<audio src={`/music/audio/${music[i].name}.mp3`} index={i} key={i}></audio>)

  }

  const [Play, setPlay] = useState(false)


  const PlayMusic = () => {
    const allaudios = document.querySelectorAll("audio");

    allaudios.forEach(allaudios => {
      allaudios.muted = true;
    });
    setPlay(!Play);
  }

  return (
    <div className="projects_card" lang={props.lang} name={props.name} singer={props.singer} genre={props.genre}>
      <img src={`/music/img/${props.img}`} alt={props.name} />
      <br />
      <h3>{props.singer}</h3>
      <p>{props.name}</p>
      <div className="card_btn">
        <button onClick={PlayMusic}><img src="/buttons/play.svg" alt="Play" /></button>
        <button><a href={`/music/audio/${music[props.index].name}.mp3`} download><img src="/buttons/download.png" alt="Download" /></a></button>
      </div>
      <div className="audio-tags">
        {Play && <audio autoPlay={true} src={`/music/audio/${music[props.index].name}.mp3`} index={props.index}></audio>}
        {Play && music_files}
      </div>
    </div>
  )
}

export default Card