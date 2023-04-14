import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const url_base='https://be-a-rym.up.railway.app/api/character'
const api_key='9e220783bd67.de5999b7e1a0231cfab7'
const Detail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState([])

    useEffect(() => {
//?= query
        axios(`${url_base}/${id}/?key=${api_key}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);
    return (
        //userParams userNavigate
        //? uso de ternario es un if else 
        <div>
            <h2>{character?.name}</h2>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt='' />

        </div>
    )
}
export default Detail;