interface ICard{
    title:string;
    description:string;
    className?:string;
    iconUrl:string;
}

function Cardlist(props:ICard){
    return(
        <>
        {/*  Icon */}
        <img 
            src={props.iconUrl} 
            alt={`${props.title} Icon`}
            className=""
        />
        {/* Title */}
        <p className="font-bold text-3xl mt-5 max-lg:text-2xl"> {props.title} </p>
        {/*  Description */}
        <p className="font-normal text-lg mt-5 max-lg:text-m"> {props.description} </p>
        </>
    );
}

export default Cardlist;