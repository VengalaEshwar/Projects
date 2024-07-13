import Icon from "../icon/Icon";
import "./Card.css";
export default function Card({symbol,onPlay,index,clicable})
{
    let item = <Icon />
    if(symbol=="X")
        item = <Icon name="cross"/>
    else if(symbol=="O")   
        item = <Icon name="circle"/>
    return (
        <div className="card" onClick={()=>onPlay(index,clicable)}>{item}</div>
    )
}