import Logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom';
function Header() {
    return ( 
    <div className='bg-[#FB281F] flex justify-center sm:justify-between'>
        <NavLink className="" to={"/"}>
            <img className="h-[80px] hidden sm:visible sm:flex "src={Logo} alt="" srcset="" />


        </NavLink>
        <nav>
            <ul className='flex gap-5'>
                <li className=' px-[10px] py-[25px] text-xl hover:text-white transition-all duration-300'>
                    <NavLink className="flex items-center flex-col-reverse" to={"/"}>
                    <a className='cursor-pointer'>Home</a>   
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                        </svg> 
                    </NavLink>  
                </li>

                <li className='px-[10px] py-[25px] text-xl hover:text-white transition-all duration-300'>
                    <NavLink className="flex items-center flex-col-reverse"to={"/projects"}>
                        <a href="">Meus Projetos</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
                        </svg>
                        </NavLink>
                </li>

                <li className='px-[10px] py-[25px] text-xl hover:text-white transition-all duration-300'>
                    <NavLink className="flex items-center flex-col-reverse" to={"/contact"}>
                    <a href="">Contato</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                        </svg>
                    </NavLink>
                </li>


            </ul>
        </nav>


    </div>
     );
}

export default Header;