function FeaturedMug() {
  return (
    <div className="flex flex-col mt-4 mb-7">
      <div
        className="uppercase text-gray-400 text-center font-Karla text-sm text-[12px]
            "
      >
        <span className="my-label-line"></span> Featured Mugs{" "}
        <span className="my-label-line"></span>
      </div>
      <div className="flex max-md:flex-col max-md:mx-20 md:justify-center md:mx-auto gap-x-10 gap-y-10 py-10">
        <div>
          <div className="h-[450px] md:w-96 max-md:w-48 bg-no-repeat bg-center bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')]">
            <a href="#" className="cursor-pointer no-underline">
              <div className="h-[100%] hover:bg-opacity-15 hover:bg-gray-500 relative md:w-96 max-md:w-48">
                <div
                  className="absolute tracking-wider text-sm bg-white px-4 py-2 font-bold text-center 
              top-3 right-3 hover:bg-stone-500 cursor-pointer max-md:text-sm"
                >
                  On sale.
                </div>
                <div className="absolute bottom-4 right-3 left-3 bg-slate-50 px-4 py-2 shadow-sm uppercase text-center hover:bg-stone-500 cursor-pointer max-md:text-sm">
                  Expand our product
                </div>
              </div>
            </a>
          </div>
          <h3 className=" cursor-pointer md:text-center">
            <a className="text-slate-500 font-semi-bold text-base ">
              Pink Preminum Ceramic
            </a>
            <p className="text-slate-500 font-thin text-sm max-md:px-16 max-md:text-sm">
              $23.00
            </p>
          </h3>
        </div>
        {/* End feature 1 */}
        <div>
          <div className="h-[450px] md:w-96 max-md:w-48 bg-no-repeat bg-center bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')]">
            <a href="#" className="cursor-pointer no-underline">
              <div className="h-[100%] hover:bg-opacity-15 hover:bg-gray-500 relative md:w-96 max-md:w-48">
                <div
                  className="absolute tracking-wider text-sm bg-white px-4 py-2 font-bold text-center 
              top-3 right-3 hover:bg-stone-500 cursor-pointer max-md:text-sm"
                >
                  On sale.
                </div>
                <div className="absolute bottom-4 right-3 left-3 bg-slate-50 px-4 py-2 shadow-sm uppercase text-center hover:bg-stone-500 cursor-pointer max-md:text-sm">
                  Expand our product
                </div>
              </div>
            </a>
          </div>
          <h3 className=" cursor-pointer md:text-center">
            <a className="text-slate-500 font-semi-bold text-base ">
              Pink Preminum Ceramic
            </a>
            <p className="text-slate-500 font-thin text-sm max-md:px-16 max-md:text-sm">
              $23.00
            </p>
          </h3>
        </div>
      
       
      </div>
    </div>
  );
}
export default FeaturedMug;
// before:absolute before:w-8 before:h-px
//  before:bg-gray-300 relative uppercase text-center text-slate-600
//  after:absolute after
