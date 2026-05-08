function Nav(){

    return (
    <nav className="bg-slate-900 text-neutral-400 font-semibold px-4 flex items-center justify-between h-12">
         <div className="flex gap-3">   
                <span><a href="">Home</a></span>
                <span><a href="">Schedule</a></span>
                <span><a href="">PlayerRank</a></span>
                <span><a href="">TeamRank</a></span>
         </div>   
            <div>
                <span>Search</span>
             </div>
        </nav>
    );
}

export default Nav
