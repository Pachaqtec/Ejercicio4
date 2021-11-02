import React, { useEffect, useState } from "react";
import './styles.css'

export const Personas = () => {
    const [persona, setPersona] = useState([]);
    // console.log(persona)
    function informacionPersona() {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => {
                return response.json()
            })
            .then((data) => {
                // console.log(data.results);
                setPersona(data.results);
            });
    }
    useEffect(() => {
        informacionPersona();
    }, [])
    return (
        <div className="container__person">
            {informacionPersona ?
                persona.map((person) => {
                    console.log(person)
                    return (
                        <div key={person.cell} className="contenido__person">
                            <img src={person.picture.large} alt="" />
                            <p>{person.name.title} {person.name.first} {person.name.last}</p>
                            <p>{person.dob.age}</p>
                            <p>{person.email}</p>
                            <p>{person.phone}</p>
                            <p>{person.gender}</p>
                        </div>
                    )
                }) : <></>
            }
        </div>
    )
}