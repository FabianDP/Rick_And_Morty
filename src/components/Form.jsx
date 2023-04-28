import { useState } from "react";
import Validacion from "../validation";
const Form=({login})=>{
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })
    const [error,setError]=useState({
        email:'',
        password:''
    })
    const handleOnchange=(evento)=>{
        setUserData({
            ...userData,
          [evento.target.name]:evento.target.value
        })
     setError(
        Validacion({
          ...userData,
          [evento.target.name]:evento.target.value
        }))
    }

    

    const handleSubmit=(evento)=>{
        evento.preventDefault();
        login(userData)
    }

    
return(
    <form onSubmit={handleSubmit}>
        <h1> inicio</h1>
        <label htmlFor="email">email</label>
        <input type="email" name="email"value={userData.email} onChange={handleOnchange}/>
             <hr />
             {error.email && <p>{error.email}</p>}
        <label htmlFor="password">password</label>
        <input type="text" name ="password" value={userData.password}onChange={handleOnchange}/>
        <br />
        {error.password&&<p>{error.password}</p>}
        <hr />
        <button>Submit</button>
    </form>
)
}
export default Form;