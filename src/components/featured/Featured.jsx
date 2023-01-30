// import { OptionUnstyled } from '@mui/base'
import { InfoRounded, PlayArrowRounded,  } from '@mui/icons-material'
import React from 'react'
import "./featured.scss"

export default function Featured(type) {
  return (
     <div className='featured'>
     {type &&(
        <div className='category'>
          {/* if type is movie then title will be Movies Else Series */}
            {/* <span>{type === "movies" ? "Drama":"Adventure"}</span> */}
            <span>{type ===("movies") ? "Movies":"Series"}</span>
            <select name='genre' id='genre'>
                <option>Genre</option>
                <option value='adventure'>Adventure</option>
                <option value='comedy'>Comedy</option>
                <option value='crime'>Crime</option>
                <option value='fantasy'>Fantasy</option>
                <option value='historical'>Historical</option>
                <option value='horror'>Horror</option>
                <option value='romance'>Romance</option>
                <option value='sci-fi'>Sci-fi</option>
                <option value='western'>Western</option>
                <option value='animation'>Animation</option>
                <option value='drama'>Drama</option>
                <option value='documentary'>Documentary</option>
            </select>
        </div>
     )}
        <img src='https://images.ctfassets.net/usf1vwtuqyxm/2ALpKvBMkEBbw6qL3BfOVV/28e0d10b59b62e9bb64af6236d5578a8/HP-F1-philosophers-stone-harry-ron-hermione-courtyard-happy-web-landscape?fm=jpg&q=70&w=2560 ' alt='img'></img>
        <div className='info'>
            {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-c8NfakKvIr9PWM15LrIqGRBEdDrm0Fr5Skqd8hLwXuVlQGPaMZ1puCxKnvPPynxNxmA&usqp=CAU' alt='logo'></img> */}
            <img src='https://kids.scholastic.com/content/kids64/en/books/harry-potter/_jcr_content/root/responsivegrid/responsivegrid_copy_/image.coreimg.100.1285.png/1633456741254/header-hp-overlay.png' alt='movie-title'></img>
            <span className='desp'> This is the tale of Harry Potter , an ordinary eleven-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry.Famous for an incident that happened at his birth, Harry makes friends easily at his new school. </span>
            <div className='buttons'>
                <button className='play'>
                    <PlayArrowRounded/>
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoRounded/>
                    <span>Info</span>
                </button>
            </div>
          </div>
     </div>
  )
}
