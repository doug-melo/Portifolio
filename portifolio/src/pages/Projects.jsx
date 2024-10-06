import { Link } from "react-router-dom"; // Importar Link
import { useState } from "react";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import Projetos from "../data/doug_melo_repositories.json";
import Container from "../components/Container";

function Project() {

    const [search, setSearch] = useState("")

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const ProjetosFiltrados = Projetos.repositories.filter(projetos => projetos.name.toLowerCase().includes(search.toLowerCase()))

    return ( 
        <>
        <div className="min-h-scree flex flex-col items-center p-5">
            <h1 className="text-3xl font-bold mb-4">Meus Projetos</h1>
            <input
                className="w-full  text-black max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                type="text"
                name="search"
                id="search"
                value={search}
                onChange={handleSearch}
                placeholder="Projeto especifico"
            />
        <Container>
                <section className="flex flex-row justify-evenly flex-wrap mb-80 mt-8">
                        {
                            ProjetosFiltrados.length > 0 ?

                            ProjetosFiltrados
                                .map(project => (
                                    <ProjectCard key={project.name} {...project} />
                                ))
                            :
                            <p className="text-center m-10 font-bold text-2xl mb-32 mt-4">Este projeto não existe</p>
                        }
                </section>
        </Container>

        </div>
        <Footer/>
        </>
    );
}

export default Project;
