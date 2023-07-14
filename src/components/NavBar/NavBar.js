import CartWidget from "../CartWidget/CartWidget"
import { SiArduino } from 'react-icons/si';

const NavBar = () => {
    return (
        <nav className="level">
            <div className="container is-max-desktop">
              <div className="notification is-primary">
               <h2 className="title is-2"><SiArduino /> eCommerce </h2>
                
                 <div class="buttons is-centered" >
                    <button className="button is-black">Placas</button>
                    <button className="button is-black">Sensores</button>
                    <button className="button is-black">Actuadores</button>
                 </div>
                 <CartWidget/>
                </div>
           </div>
            
        </nav>
    )
}

export default NavBar