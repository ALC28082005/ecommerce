import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { SiArduino } from 'react-icons/si'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (

        <nav className="navbar is-primary" >
            <Link to ='/'>
           <h3><SiArduino/>Ecommerce</h3>
           </Link>
            <div className="Categories">
                <NavLink to={`/category/placas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Placas</NavLink>
                <NavLink to={`/category/sensores`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Sensores</NavLink>
                <NavLink to={`/category/actuadores`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Actuadores</NavLink>
                
                
            </div>
            <div className="widget">
            <CartWidget/> 
            </div>
            
            
            
        
    </nav>

    )
}

export default NavBar