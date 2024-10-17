import React from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'

const Player = () => {
  return (
    <div className='player'>
        <img src={back_arrow} alt="" />
        <iframe width='90%' height= '90%' src='https://www.youtube.com/embed/2givpoVOaNo'></iframe>
           </div>
  )
}

export default Player