import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {addFav,removeFav } from "../redux/actions"
import { useState, useEffect} from 'react';

function Card({ id, name, status, species, gender, origin, onClose, image,addFav,removeFav,myFavorites }) {
   const [isFav, setIsFav] = useState(false);
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true)
         addFav({ id, name, status, species, gender, origin, image })
      }
   }


   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
            <h3 className="card-name">{name}</h3>
         </Link>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />


      </div>
   );
}

const mapStateToProps=(state)=>{
return{
   myFavorites:state.myFavorites
}
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }

   }
};
export default connect(
   mapStateToProps,// me permite accder al estado global
   mapDispatchToProps// me permite hacer le dispatch acciones
)(Card)