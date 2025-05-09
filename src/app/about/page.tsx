import Image from "next/image"
Image

export default function About(){
    return(
        <div className="flex my-6">
        <div className="flex flex-col flex-1">
            <h1 className="text-3xl font-bold text-center text-blue-400">About Me</h1>
            <div className="container mt-4 ml-28">
                <p className="font-semibold">EMAIL</p>
                <p className="text-blue-400 mt-3">jawsjaban@gmail.com</p>
                <p className="font-semibold mt-2">ROLE</p>
                <p className="text-blue-400 mt-3">Lead Designer</p>
                <p className="font-semibold mt-2">PHONE</p>
                <p className="text-blue-400 mt-3">9873887389</p> 
                <button className="btn bg-[#1A77F2] text-white border-[#005fd8] mt-3">
                    Download CV
                </button>
            </div>
            
        </div>
        
        <div className="flex-1">
            <Image src="/cartoon.jpg" width={500} height={500} alt="cartoon image"/>
        </div>

        </div>
    )
}