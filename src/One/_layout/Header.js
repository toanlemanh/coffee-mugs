function Header() {
  return (
    <nav className="flex flex-row items-center">
      <div
        id="logo"
        className="basis-2/6 text-xl text-center font-semibold cursor-pointer"
      >
        <a className="no-underline text-slate-800" href={"/"}>CoffeeStyle.</a>
      </div>

      <ul className="flex flex-row space-x-8 basis-3/6 uppercase text-sm font-medium list-none">
        <li className="my-top-menu-item">
          <a>Home</a>
        </li>
        <li className="my-top-menu-item">
          <a>Our products</a>
        </li>
        <li className="my-top-menu-item">
          <a>Blog</a>
        </li>
        <li className="my-top-menu-item">
          <a>About</a>
        </li>
        <li className="my-top-menu-item">
          <a>Contact</a>
        </li>
        <li className="my-top-menu-item">
          <a>Styleguide</a>
        </li>
        <li className="my-top-menu-item">
          <a>Explore our products</a>
        </li>
      </ul>

      <ul className="flex basis-1/6 justify-end items-center uppercase list-none">
        <li className="my-top-menu-item font-Karla font-semibold">
          <a className="group no-underline text-slate-500 hover:text-light-coffee" href={"#"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="mx-3">Cart</span>
            <span className="px-2 py-2 justify-center rounded-full bg-slate-500 text-slate-100 group-hover:bg-light-coffee">
              10
            </span>
          </a>
        </li>
      </ul>
     


      <div id="hidden-bar"></div>
    </nav>
  );
}
export default Header;
