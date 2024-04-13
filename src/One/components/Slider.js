

function Slider () {
    return (
        <div id='header-banner' className=" h-96 w-auto max-w-screen-xl mx-auto bg-cover bg-no-repeat py-5 bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a58aaecdfba_Header-Pic.jpg')]"
        >
            <div id="banner-content" className=" items-center justify-center flex flex-col space-y-5">
                <p className="text-white uppercase text-xs">best place to buy design</p>
                <h5 className="text-white font-bold text-xl">Coffee Mugs</h5>
                <p className="text-white">The most versatile furniture system ever created. Designed to fit your life, 
                    made to move and grow</p>
                <button className="bg-slate-50 p-4 shadow-sm uppercase text-center hover:bg-stone-500">
                    explore our products
                </button>
            </div>
        </div>
    )
}
export default Slider;