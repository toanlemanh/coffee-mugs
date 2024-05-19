function FeaturedMug() {
  return (
    <div className="flex flex-col mt-4 mb-7">
      <div
        className="uppercase text-gray-400 text-center font-Karla text-sm
            "
      >
        <span className="inline-block w-8 h-px bg-gray-200 my-1"></span>{" "}
        Featured Mugs{" "}
        <span className="inline-block w-8 h-px bg-gray-200 my-1"></span>
      </div>
      <div className="flex max-md:flex-col max-md:mx-20 md:justify-center md:mx-auto gap-x-10 gap-y-10 py-10">
        <div>
          <div className="h-[450px] md:w-96 max-md:w-48 bg-no-repeat bg-center bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')]"></div>
          <h3 className=" cursor-pointer md:text-center">
             <a className="text-slate-500 font-semi-bold text-base">Pink Preminum Ceramic</a>
             <p className="text-slate-500 font-thin text-sm max-md:px-16">$23.00</p>
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
