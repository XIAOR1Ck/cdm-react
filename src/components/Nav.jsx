function Nav(){

    return (
    <nav className="bg-slate-900 text-white px-4 flex items-center justify-between h-12">
         <div className="flex gap-3">   
                <span><a href="" className="hover:text-yellow-500">Home</a></span>
                <span><a href="" className="hover:text-yellow-500">Schedule</a></span>
                <span><a href="" className="hover:text-yellow-500">PlayerRank</a></span>
                <span><a href="" className="hover:text-yellow-500">TeamRank</a></span>
         </div>   
            <div>
                <span><a href="" className="hover:text-yellow-500">Search</a> </span>
             </div>
        </nav>
    );
}

export default Nav
