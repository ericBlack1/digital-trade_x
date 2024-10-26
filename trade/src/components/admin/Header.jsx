import { Menu } from "lucide-react";

export default function Header({pageName,avatar}){
    return(
        <div className="flex flex-col gap-3 items-center bg-white w-full p-4 border-b border-b-gray-200">
            <div className=" flex justify-between items-center w-full">
                <div className="text-lg text-gray-950"><Menu /></div>
                <div className="text-lg text-blue-900 font-semibold capitalize">{pageName}</div>
                <div className="relative rounded-full border border-blue-100 h-10 w-10 overflow-hidden"><img src={avatar} alt="avatar" className="w-full h-full object-cover"/></div>
            </div>
            <div className="relative w-full">
                <input type="text" name="search" placeholder="search something" className="bg-gray-50 w-full placeholder:text-sm placeholder:text-gray-500 outline-none text-sm border p-4 border-blue-100 rounded-full text-gray-950"/>
            </div>
        </div>
    )
}