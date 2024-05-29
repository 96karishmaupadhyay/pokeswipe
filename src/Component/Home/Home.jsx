import React from 'react'
import styles from "./Home.module.css"
import {Link} from 'react-router-dom';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeCard}>
        <div className={styles.icon}>
        <LoyaltyIcon sx={{ fontSize: 50 ,color:"red"}}/>
        </div>
        <div>
        <h1>How to play PokeSwipe</h1>
        </div>
        <div>
            <p>Pokemon appears once at a time</p>
            <p>choose "like" or "dislike"</p>
            <p>Build your favorite team</p>
        </div>
        <div>
        <Link to="/play">
        <button className={styles.startbtn}>Let's start</button>
      </Link>
        </div>
        
        </div>
      </div>
    </>
  )
}

export default Home
