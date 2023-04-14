import { useLocation } from "react-router-dom"; 
const About = () => {

    const location=useLocation();
     console.log(location)       
    return (
//userParams userNavigate
        <>
            <h1>Este es el componente About</h1>

        </>
    )
}
export default About;