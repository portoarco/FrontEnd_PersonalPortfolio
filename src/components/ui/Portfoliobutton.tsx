interface PortobuttonURL {
    href:string;
}

function Portobutton({href}:PortobuttonURL) {
    return(
    <>
            <a href={href} className="flex gap-2 items-center mt-3">
                <p className="text-base inline border-b-2 border-[#5E3BEE]">Show Details</p>
                <img src="/assets/arrow.png" alt="" className="w-3 h-3" />
            </a>
    </>
    );
}

export default Portobutton;