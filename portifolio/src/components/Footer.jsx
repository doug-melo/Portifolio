import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
    return ( 
            <div className='bg-[#FB281F] h-24 flex flex-col justify-evenly'>

                <ul className='flex justify-evenly'>
                    <li className="flex self-center text-center text-black hover:text-white transition-all duration-300 rounded hover:bg-black p-2">
                        <a  className='flex flex-row-reverse gap-1 items-center' href="https://github.com/doug-melo" target='_blank'>     
                            <p>Gitub</p>                      
                            <FaGithub></FaGithub>              
                        </a>   
                        
                    </li>

                    <li className="flex self-center text-center text-black hover:text-white transition-all duration-300 rounded hover:bg-black p-2">
                        <a className="flex flex-row-reverse gap-1 items-center"href="https://www.linkedin.com/in/douglas-melo-217088213/" target="_blank" rel="noopener noreferrer">
                            <p>Linkedin</p>
                            <FaLinkedin></FaLinkedin>
                        </a>
                    </li>

                    <li className="flex self-center text-center text-black hover:text-white transition-all duration-300 rounded hover:bg-black p-2">
                        <a className="flex flex-row-reverse gap-1 items-center" href="https://www.instagram.com/douglas_santos_melo?igsh=MWc5OGl0b2xyNmZ2eA==">
                            <p>Instagram</p>
                            <FaInstagram></FaInstagram>
                        </a>
                    </li>
                </ul>

                <p className='flex self-center text-center text-black hover:text-white transition-all duration-300 rounded hover:bg-black p-2'>© 2024 Douglas dos Santos Melo</p>
        </div>
     );
}

export default Footer;