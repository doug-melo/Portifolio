import Perfil from '../assets/perfil.jpg'
import Container from '../components/Container';
import Network from '../components/Network';
function Header() {
    return (  

        <Container>
            <div className='mt-14'>
                <div className='flex my-15 bg-zinc-700 justify-around items-center rounded-xl border-2 border-zinc-600 border-solid'>
                    <img className='rounded-full object-cover   ' src={Perfil} />
                    <div>
                        <h1 className='text-4xl'>Sobre Mim</h1>
                        <p>Seja Bem-vindo ao meu Portfólio! Meu nome é Douglas, tenho 20 anos.</p>
                    </div>
                </div>
            </div>
        <Network/>
        </Container>

    );
}

export default Header