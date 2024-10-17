import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import TitleCard from '../../components/TItleCard/TitleCard'
import Footer from '../../components/Footer/Footer'



const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero} alt="" className='banner' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption' />
          <p>Discovering his ties to a secret ancient order, a young 
            man living in mordern Istanbul embarks on a quest to save
             the city from immortal enemy.</p>
       <div className="hero-btn">
        <button className='btn'><img src={play} alt="" />Play</button>
        <button className='btn dark-btn'><img src={info} alt="" />More Info</button>   
       </div>
       <TitleCard />
        </div>
      </div>
      <div className="more-cards">
      <TitleCard title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCard title={"Only on Netflix"} category={"popular"}/>
      <TitleCard title={"Upcoming"} category={"upcoming"}/>
      <TitleCard title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home