
import Card from '../Card/Card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Main() {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [loading, setLoading] = useState(true);//for content loading
    const [prev, setPrev] = useState()  //for previous index of pokemon related to url
    const [next, setNext] = useState() //for next index of pokemon related to url
    const [pokData, setPokData] = useState([]);//data of pokemon in array
    const [pokeDetailEach, setpokeDetailEach] = useState({}); //detals of each pokemon in object

    const fetching = async () => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            setNext(response.data.next);
            setPrev(response.data.previous);
            getAllDetailsOfPokemon(response.data.results);
        } catch (error) {
            alert("Error in fetching data");
        }
    };

    const getAllDetailsOfPokemon = async (results) => {
        const promises = results.map(async (item) => {
            const urlRes = await axios.get(item.url);
            return urlRes.data;
        });

        const allPokemonData = await Promise.all(promises);
        setPokData(allPokemonData);
        setLoading(false);
    };

    useEffect(() => {
        fetching();
    }, [url]);

    return (
        <div>
            <Card pokedata={pokData} loading={loading} pokedetails={poke => setpokeDetailEach(poke)} />
        </div>
    );
}

export default Main;
