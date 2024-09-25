import Logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom';
function Header() {
    return ( 
    <div className='bg-red-600 w-full flex justify-between h-24'>
        <img src={Logo} alt="" srcset="" />
        <nav>
            <ul className='flex gap-5'>
                <li className='text-xl'><NavLink to={"/"}>Home</NavLink></li>
                <li className='text-xl'><NavLink to={"/contact"}>Contato</NavLink></li>
                <li className='text-xl'><NavLink to={"/About"}>Saiba Mais</NavLink></li>
            </ul>
        </nav>


    </div>
     );
}

export default Header;