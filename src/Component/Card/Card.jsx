
import React, { useState } from "react";
import styles from "./Card.module.css"
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
// import { Link } from "react-router-dom";
const Card = ({ pokedata, loading, pokedetails }) => {
    const [currIndex, setcurrIndex] = useState(0)//to handle each pokemon
    const [like,setLike]=useState("false") //for handle color of icon
    const [dislike,setDislike]=useState("false")//for handle color of icon
//for handling the next pokemon
    const handleNext = () => {
        setcurrIndex((prevIndex) => (prevIndex + 1) % pokedata.length)
    }
    //for handling previous pokemon
     const handlePrev = () => {
        setcurrIndex((prevIndex) => (prevIndex - 1 + pokedata.length) % pokedata.length);
    }
   
    const handleLike=()=>{
        setLike(true);
        setDislike(false);
    }
    const handleDislike=()=>{
        setLike(false);
        setDislike(true);
    }
    //condition for page loading or not
    if (loading) {
        return <h1>Cards Loading</h1>;
    }

    if (pokedata.length == 0) {
        return <h1>No Pokémon Cards are available</h1>;
    }

    const currentPokemon = pokedata[currIndex];

    return (
        <div className={styles.cardContainer}>
       {/* <Link to="/team">
        <button className={styles.teambtn}>See your team</button>
      </Link> */}
        <div className={styles.prevbtn}>
        <button onClick={handlePrev} disabled={pokedata.length <= 1} style={{ marginRight: '10px' }} >Previous</button>
        </div>
            <div className={styles.card} key={currentPokemon.id} onClick={() => pokedetails(currentPokemon)}>
              <div>
              <FavoriteBorderRoundedIcon style={{fontSize:40,position:"absolute",top:20 ,right:20 ,color: dislike ? "black" : "red"}}/>
              </div>
             <img src={currentPokemon.sprites?.other?.dream_world?.front_default} alt={currentPokemon.name}  height={200} width={200}/>
                <h2>{currentPokemon.name}</h2>
                <div className={styles.btnsection}>
                    {currentPokemon.abilities.map((ability, index) => (
                        <button key={index} className={styles.abilitybtn}>{ability.ability.name}</button>
                    ))}
                    {currentPokemon.types.map((type, index) => (
                        <button key={index} className={styles.typebtn}>{type.type.name}</button>
                    ))}
                  
                </div>
                <div className={styles.likingsection}>
                <button className={styles.like} onClick={handleLike}>Like</button>
                <button className={styles.dislike} onClick={handleDislike}>Dislike</button>
            </div>
            </div>
            <div className={styles.nextbtn}>
                <button onClick={handleNext} disabled={pokedata.length <= 1} style={{ marginLeft: '10px' }}>Next</button>
            </div>
             </div>
    );
};

export default Card;

