interface IButton {
    title : string;
    className?:string;
    iconUrl?:string;
    type?: "button" | "submit" | "reset";
}

function Button(props:IButton){
    return(
        <button id="btn" className={`flex items-center gap-3 ${props.className ?? ''}`} type={props.type ?? "button"}>
            {props.iconUrl && <img src={props.iconUrl} alt={`${props.title} Icon`} className="w-7 text-white invert-100" />}
            {props.title} 
        </button>
    )
}

export default Button