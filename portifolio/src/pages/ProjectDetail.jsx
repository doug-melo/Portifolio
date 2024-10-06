import { useParams } from "react-router-dom"
import Projetos from '../data/doug_melo_repositories.json'
import Container from "../components/Container";
import Footer from "../components/Footer";
function ProjectDetail() {

    const { id } = useParams()

    return ( 
        <>
        <Container>
        {
                Projetos.repositories
                    .filter((project) => project.name === id)
                    .map((project) => (
                        <div className="text-black content-center mt-12" key={project.name}>
                            <h1 className="text-5xl text-center font-bold text-black">{project.name}</h1>
                            <div className="flex mt-2 flex-col gap-10 h-3/4 items-center">
                                <p className=" text-black w-4/5">{project.description}</p>
                                <img className="w-4/5 object-cover" src={`/${project.image}`} alt={project.name} />
                            </div>
                            <p className="text-center text-2xl font-bold m-4">{project.language}</p>
                            <p className="text-center mb-10">
                                <a className="bg-red-600 rounded font-bold border-[1px] hover:border-red-600 hover:bg-white hover:text-red-600 duration-300 transition-all p-3" href={project.link} target="_blank" rel="noopener noreferrer">Ver repositório</a>
                            </p>
                        </div>
                    ))
            }
        </Container>

        <Footer/>
        </>
        
        
     );
}

export default ProjectDetail;
