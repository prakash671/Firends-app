import React from 'react'
import spotifyimg from './images/spotify.jpg'
import blackFriday from './images/blackfriday.jpg'
import './Pagehome2.css'

export default function Pagehome2(){
    return(
        <section className='feature'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={blackFriday}></img>
                    <div class="overlay">
                   <div class="text"><b>Grab This Free Sale Soon!</b></div>
                   </div>
                   </div>
                <div className='col-md-6'>
                    <div className='styles'>
                        <img src={spotifyimg}></img>
                        </div>
                
                </div>
               
            </div>
        </div>
        
    </section>
    )
}