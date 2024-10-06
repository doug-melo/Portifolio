import Footer from "../components/Footer";
import { useState } from "react";
function Contact() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")




const handleSubmit = (e) => {
    e.preventDefault();


    console.log(`Seu nome é ${nome}, seu e-mail é ${email}, e a mensagem é ${mensagem}`);

    setNome('');
    setEmail('');
    setMensagem('');
        

    
};
    

    return ( 
        <div>
            <div className="h-full flex flex-row flex-wrap justify-around items-start mt-14 mb-20">
                     <div className="flex flex-col items-center self-center w-8/12"> 

                        <div className="flex flex-col items-center gap-5 content-center justify-center bg-neutral-900 rounded-full p-5 w-82 h-82 sm:w-56 sm:h-56 md:w-96 md:h-96 lg:w-[425px]  lg:h-[425px] xl:w-[475px] xl:h-[475px]">
                                <h1 className="sm:text-sm md:text-xl lg:text-2xl xl:text-2xl  text-white font-bold text-center w-3/4">Por onde você pode me encontrar:</h1>
                                    
                                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>

                                <ul className="flex max-w-xs justify-evenly item-center bg-[#FB281F] p-4 rounded-xl gap-3 w-32 sm:w-32 sm:h-24 md:w-[200px] md:h-[50px]">
                                    <li>
                                        <a href="https://github.com/doug-melo" target="_blank" rel="noopener noreferrer">
                                            <svg className="text-black hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/douglas-melo-217088213/" target="_blank" rel="noopener noreferrer">
                                            <svg className="text-black hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/douglas_santos_melo?igsh=MWc5OGl0b2xyNmZ2eA==" target="_blank" rel="noopener noreferrer">
                                            <svg className="text-black hover:text-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                        </div>
         
                </div>

                <div className="flex justify-center h-full">
                    <form 
                        onSubmit={handleSubmit} 
                        className="w-4/5 sm:w-4/5 md:w-full xl:w-full bg-[#FB281F] p-5 m-5 rounded-2xl gap-3 flex flex-col">
                            
                        <label htmlFor="nome" className="text-black">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            className="bg-[#ffdedd] text-[#ff615a] rounded-xl p-1 border-none outline-none focus:ring-0"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                        
                        <label htmlFor="email" className="text-black">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="bg-[#ffdedd] text-[#ff615a] rounded-xl p-1 border-none outline-none focus:ring-0"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        
                        <label htmlFor="mensagem" className="text-black">Mensagem:</label>
                        <textarea
                            id="mensagem"
                            cols="30"
                            rows="10"
                            className="bg-[#ffdedd] text-[#ff615a] rounded-xl p-1 border-none outline-none focus:ring-0"
                            value={mensagem}
                            onChange={e => setMensagem(e.target.value)}
                        />
                        
                        <button 
                            id="enviar" 
                            type="submit" 
                            className="flex self-center justify-center items-center w-24 h-12 bg-[#ffdedd] text-[#ff615a] rounded-md hover:text-[#d30b02] hover:bg-white hover:border-[1px] hover:border-[#d30b02]">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>

            <Footer></Footer>
        </div>



   );
}

export default Contact;