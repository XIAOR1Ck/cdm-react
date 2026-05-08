function PlayerCard(){
    return (
        <div className="bg-mauve-900 text-mauve-400 flex flex-row justify-between w-full ">
            <div className="flex flex-col text-center gap-5 m-5" >
                <div className="h-[200px] justify-center rounded-full border-2 border-solid rounded-full overflow-hidden">
                    <img src="https://codm.tmes.qq.com/cdn/1773072000000/4307c8157e9097122904fbbf8ac29a1c.png" alt="Player Image" className="h-[200px] w-[200px]" />
                </div>
                <h2 className="text-yellow-600 text-2xl">Sun</h2>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row gap-3">
                    <div>Rating 1</div>
                    <div>Rank 2</div>
                    <div>MVP 3</div>
                    <div className="flex align-center gap-1">
                        <img src="https://codmtv-pic.tga.qq.com/2ad34bebf6c0a39126b5fbd904d6c57b.png" alt="Team Logo" className="h-5" />
                        <p>Q9Club</p>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div>stat</div>
                    <div>stat</div>
                    <div>stat</div>
                    <div>stat</div>
                    <div>stat</div>
                    <div>stat</div>
                </div>
            </div>
        </div>
    );
}
export default PlayerCard
