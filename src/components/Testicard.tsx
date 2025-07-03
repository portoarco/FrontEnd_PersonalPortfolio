interface ITesti {
    description:string;
    name:string;
    company:string;
    iconURL:string;
}


function Testicard(props:ITesti){
    return(
        <>

        <div id="testicard" className=" p-8 rounded-md bg-[rgb(245,254,255)] border-1 border-[#006B6A] ">
            <img src="/assets/fivestars.png" alt="" className="w-25 text-shadow-lg m-0 p-0" />
            <p className="font-normal text-lg mt-5">{props.description}</p>
            <div id="testicard-profile" className="flex items-center gap-3 mt-5">
                <div id="testicard-profile-photo">
                    <img src={props.iconURL} alt="" className="w-15" />
                </div>
                <div id="testicard-profile-detail">
                    <p className="font-semibold">{props.name}</p>
                    <p>{props.company}</p>
                </div>
                
            </div>
            

        </div>
        
        
        </>

    )
}

export default Testicard;