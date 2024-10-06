import { Link } from "react-router-dom";

function ProjectCard({ name, language, image }) {
    return (
        <div className="flex flex-col gap-2 items-center w-40">
            <h2 className="text-center text-2xl font-bold">{name}</h2> 
            <img className="w-40"src={image} alt={name} />
            <p>{language}</p>
            <Link className="bg-red-600 p-3 font-bold rounded-md hover:bg-white hover:border-red-600 hover:border-[1px] hover:text-red-600 transition-all duration-200" to={`/projects/${name}`}>Saiba Mais</Link>
        </div>
    );
}


export default ProjectCard;