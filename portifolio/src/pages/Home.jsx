import Perfil from '../assets/perfil.jpg'
import Container from '../components/Container';
import Network from '../components/Network';
import Footer from '../components/Footer';
import Gradient from '../components/Gradient';
function Header() {
    return (  

        <>
        
        <Container>
            <div className='mt-14'>
            
            <div className='flex my-15 h-[500px] bg-gradient-to-r from-[#ff615a] to-[#ff3027] justify-around items-center  hover:before:content-[""] hover:before:absolute hover:before:h-[500px] hover:before:w-[100%] hover:before:top-[400px] hover:before:right[1000px] hover:before:-translate-x-1/2 hover:before:-translate-y-1/2 hover:before:-z-10 hover:before:rounded-lg hover:before:bg-[conic-gradient(var(--tw-gradient-stops))] from-red-600  to-red-600 hover:before:blur-xl'>
                    <img className='rounded-full object-cover' src={Perfil} />
                    <div>
                        <h1 className='text-4xl'>Sobre Mim</h1>
                        <p>Seja Bem-vindo ao meu Portfólio! Meu nome é Douglas, tenho 20 anos.</p>
                    </div>
                </div>
            </div>

            <div className='mt-96 mb-96'>


            </div>

        <Network/>
        </Container>

        <Footer/>

        </>

    );
}

export default Header