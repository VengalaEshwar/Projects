import {  FaPen, FaRegCircle, FaTimes } from "react-icons/fa";
let style ={
    fontSize : "3rem"
}
export default function({name})
{
    let icon = <FaPen style={style}/>;
    if(name == "cross")
        icon =<FaTimes style={style}/>
    else if(name == "circle")
        icon = <FaRegCircle style={style}/>   
    return (
        <>{icon}</>
    );
}