import Perfil from '../assets/perfil.jpg'
import Container from '../components/Container';
import Network from '../components/Network';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { FaPython, FaJava, FaReact, FaCss3, FaHtml5,  } from 'react-icons/fa';
import { SiCsharp } from "react-icons/si";

import TailWind from '../../public/tailwind-svgrepo-com.svg'
import SQLite from '../../public/sqlite-svgrepo-com.svg'
import Canva from '../../public/canva-icon.svg'
import Office from '../../public/office-365-1.svg'
function Header() {

    
    return (
        <>
        
        <Container>
            <div className='mt-14'>
            
            <div className='flex my-15 h-[500px] bg-neutral-900 justify-around items-center shadow-lg rounded-xl transition duration-300 hover:shadow-custom-red flex-wrap text-center'>
                    <img className='rounded-full object-cover' src={Perfil} />
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-4xl text-white font-bold' >Olá, aqui é o <span className='text-red-600'>Douglas</span></h1>
                        <p className='text-center sm:text-xl text-white font-bold'>e eu sou <span className='text-red-600 animate-cursor p-1'>Engenheiro de Software</span></p>
                        <a className="text-white font-bold text-xl flex self-center text-center hover:text-black transition-all duration-300 rounded hover:bg-white p-2" href="#sobre">Saiba mais</a>
                    </div>


                </div>
            </div>

            <div className='mt-24 mb-24 p-3 bg-gradient-to-r from-[#ff615a] to-[#ff3027] shadow-lg rounded-xl transition duration-300 hover:shadow-custom-red flex-wrap h-[500px]
            '>

                <h1 className='text-2xl text-center'>Conhecimentos <span className='font-bold'>adquiridos</span></h1>

                <div className='flex mt-8 bg-white w-4/5 mx-auto my-0 rounded-xl items-center justify-center gap-3 h-24 hover:cursor-pointer'>
                    <h1 className='text-[#c8150d] text-2xl font-bold text-center'>Front-End</h1>
                    <FaReact className='text-4xl text-blue-400'></FaReact>
                    <FaCss3 className='text-4xl text-blue-500'></FaCss3>
                    <FaHtml5 className='text-4xl text-[#E44D26]'></FaHtml5>
                    <Card imagem={TailWind} alt="Tailwind" className='w-12 h-12'></Card>
                </div>


                <div className='flex mt-8 bg-white w-4/5 mx-auto my-0 rounded-xl items-center justify-center gap-3 h-24 hover:cursor-pointer'>
                    <h1 className='text-2xl text-center font-bold text-blue-500 '>Back-End</h1>
                    <Card imagem={SQLite} alt="SQLite"></Card>
                    <FaPython className='text-4xl'></FaPython>
                    <FaJava className='text-4xl'></FaJava>
                    <SiCsharp className='text-4xl text-purple-600'></SiCsharp>
                </div>

                <div className='flex mt-8 bg-white w-4/5 mx-auto my-0 rounded-xl items-center justify-center gap-3 h-24 hover:cursor-pointer'>
                    <h1 className='text-green-500 text-2xl font-bold'>Outros</h1>
                    <Card imagem={Canva} alt='Canva'></Card>
                    <Card imagem={Office} alt='Office'></Card>
                </div>
            </div>

            <div id="sobre" className='w-full h-full bg-neutral-900 rounded-3xl pb-16 mb-24'>
                <h1 className='text-white text-center text-3xl font-bold pt-5'>Sobre Mim</h1>

                <p className='w-4/5 mx-auto my-0 mt-5 text-white text-xl text-justify'><span className='text-red-600 font-bold'>Meu nome é Douglas</span>, tenho 20 anos e sou formado em <span className='font-bold text-red-600'>Análise e Desenvolvimento de Sistemas</span> e em <span className='font-bold text-red-600'>Desenvolvimento de Jogos Digitais.</span> Atualmente, estou cursando <span className='font-bold text-red-600'>Engenharia de Software</span> na FIAP, onde busco ampliar meus conhecimentos na área de tecnologia e desenvolvimento. </p>

                <p className='w-4/5 mx-auto my-0 mt-5 text-white text-xl text-justify'>Possuo habilidades em ferramentas do pacote <span className='font-bold text-red-600'></span>, como <span className='font-bold text-red-600'>Office</span>, <span className='font-bold text-red-600'> Excel</span>, <span className='font-bold text-red-600'>Word </span>e <span className='text-red-600 font-bold'>PowerPoint</span>, que me permitem realizar análises de dados e criar apresentações de forma eficiente. Além disso, tenho experiência em várias linguagens de programação, incluindo <span className='font-bold text-red-600'>Python</span>, <span className='font-bold text-red-600'>Java </span>e <span className='font-bold text-red-600'>C#.</span></p>

                <p className='w-4/5 mx-auto my-0 mt-5 text-white text-xl text-justify'>Estou familiarizado com tecnologias web, como <span className='font-bold text-red-600'>Tailwind CSS</span>, <span className='text-red-600 font-bold'>React</span>, <span className='text-red-600 font-bold'></span> e <span className='text-red-600 font-bold'>CSS</span>, que utilizo para construir interfaces modernas e responsivas. Também tenho conhecimento em bancos de dados usando SQLite, o que me torna um profissional versátil e preparado para os desafios do mercado de trabalho.</p>
            </div>
        <Network/>
        </Container>

        <Footer/>

        </>

    );
}

export default Header