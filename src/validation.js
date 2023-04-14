 
const Validacion = (userData) => {
    let error={};
    if(!/\S+@\S+\.\S+/.test(userData.email)){
            error.email='revisa el email'
     }
     if(!userData.email){
        error.email='este campo no puede estar vacio'
     }
     if( userData.email.length>35){
        error.email='No'
     }
     if(!userData.password.match(/\d/)){
        error.password='la contraseña deve tener al menos 1 numero';
     }
     if( userData.password.length < 6 || userData.password.length >10){
        error.password='la contraseña debe contener entre 6 y 10 carac'
     }
     return error
}

export default Validacion;