import { Link } from 'react-router-dom';
import './Pokemon.css'
export default function({data}){
    return (
        <Link to={`/pokemon/${data.id}`}>
            <div className="pokemon">
                <span >{data.name}</span>
                <img src={data.image} alt="img" />
            </div>
        </Link>
    );
}