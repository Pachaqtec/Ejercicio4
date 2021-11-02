import React, { useState, useEffect } from "react";
import getFetchData from "./getFetchData";
import './styles.css'

export const Heroes = () => {
    const [heroe, setHeroes] = useState([]);
    const [input, setInput] = useState("");
    console.log(heroe)

    const Heroe = (e) => {
        e.preventDefault();
        const searchUrl = `https://www.superheroapi.com/api.php/4934026556629020/${input}`;

        getFetchData(searchUrl)
            .then((data) => {
                console.log(data)
                console.log(data.Object)
                const info = [
                    {
                        "image": data['image'].url,
                        "combat": data['powerstats'].combat,
                        "durability": data['powerstats'].durability,
                        "intelligence": data['powerstats'].intelligence,
                        "power": data['powerstats'].power,
                        "speed": data['powerstats'].speed,
                        "strength": data['powerstats'].strength,
                        "biography": data['biography']['full-name']
                    }
                ]
                setHeroes(info)
            })
            .catch((err) => console.log(err));

        setInput("");
    };
    return (
        <div className="container__hero">
            <form onSubmit={Heroe}>
                <input type="text" placeholder="Busca tu Heroe" onChange={(e) => { setInput(e.target.value) }} value={input} />
                <button type="submit">Buscar</button>
            </form>
            {Heroe ?
                heroe.map((hero) => {
                    console.log(hero.Object)
                    return (
                        <div className="contenido__hero">
                            <h1>{hero.biography}</h1>
                            <img src={hero.image} alt="" />
                            <div className="informacion">
                                <p>Combat: {hero.combat}</p>
                                <p>Durability: {hero.durability}</p>
                            </div>
                            <div className="informacion">
                                <p>Intelligence: {hero.intelligence}</p>
                                <p>Power: {hero.power}</p>
                            </div>
                            <div className="informacion">
                                <p>Speed: {hero.speed}</p>
                                <p>strength: {hero.strength}</p>
                            </div>
                        </div>
                    )
                }) : <></>
            }
        </div>
    )
}