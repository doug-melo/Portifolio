import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


function Network() {
    return ( 
        <div>
            <ul className='flex item-center flex-col bg-[#FB281F] p-4 rounded-ss-xl rounded-es-xl fixed top-96 right-0 content-center items-center self-centrer gap-3'>
                <li>
                    <a className="text-black hover:text-white"href="https://github.com/doug-melo" target='_blank'>
                        <FaGithub></FaGithub>
                    </a>
                </li>

                <li>
                    <a className="text-black hover:text-white" href="https://www.linkedin.com/in/douglas-melo-217088213/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin></FaLinkedin>
                    </a>
                </li>
                <li>
                    <a className="text-black hover:text-white" href="https://www.instagram.com/douglas_santos_melo?igsh=MWc5OGl0b2xyNmZ2eA==" target='_blank'>
                        <FaInstagram></FaInstagram>
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default Network;