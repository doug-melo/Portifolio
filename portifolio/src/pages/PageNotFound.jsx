import { NavLink } from "react-router-dom";
function PageNotFound() {
    return (
        <div className="w-full h-full flex justify-center
        content-center flex-wrap flex-col">
            <h1 className="text-3xl">Está página não existe</h1>
            <NavLink className="text-center " to={'/'}>Voltar ao menu</NavLink>
        </div>
    );
}

export default PageNotFound