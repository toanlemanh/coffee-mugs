function FeaturedMug () {


    return (
        <div className="flex flex-col mt-4 mb-7">
            <div className="uppercase text-gray-400 text-center font-Karla text-sm
            "><span className="inline-block w-8 h-px bg-gray-200 my-1"></span> Featured Mugs <span className="inline-block w-8 h-px bg-gray-200 my-1"></span></div>
             <div className="flex flex-row justify-around my-10">
                   <div classname="col">Image 1</div>
                   <div classname="col">Image 2</div>
             </div>
       </div>
    )
}
export default FeaturedMug;
// before:absolute before:w-8 before:h-px
            //  before:bg-gray-300 relative uppercase text-center text-slate-600 
            //  after:absolute after