import React from 'react'
import styles from "./Nav.module.css"
function Nav() {
  
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logoSection}><img src="./favicon.ico" alt="img" height={50} width={50}/>
        <h1>PokeSwipe</h1>
        </div>
        {/* <div><button>Mode</button></div> */}
      </div>
    </>
  )
}

export default Nav
