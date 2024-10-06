function Card({ imagem, desc }) { 
    return (
        <div>
            <img className="w-12 h-12"src={imagem} alt={desc} />
        </div>
    );
}

export default Card;
