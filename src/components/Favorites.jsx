import Card from "./Card"
import { connect, useDispatch } from "react-redux"
import { filterCards, orderCards } from "../redux/actions"
import { useState } from "react"


const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    const[aux,setAux]=useState(false)
    const handleOrder = (evento) => {
        dispatch(orderCards(evento.target.value))
        setAux(!aux);
    }
    const handleFilter = (evento) => {
        dispatch(filterCards(evento.target.value))
    }
    return (
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value="order" disabled='disabled'>orden</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="filter" disabled='disabled'>filter</option>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            {myFavorites?.map(fav => {
                return (
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        status={fav.status}
                        species={fav.species}
                        gender={fav.gender}
                        origin={fav.origin.name}
                        image={fav.image}
                        onClose={fav.onClose}

                    />

                )
            })

            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps, null)(Favorites)