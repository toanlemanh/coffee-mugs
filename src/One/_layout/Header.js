function Header() {

  function toggleMenu () {
    const menuUl = document.getElementById('my-top-menu-ul');
    menuUl.classList.toggle('hidden');
    menuUl.classList.toggle('transition-all');
    menuUl.classList.toggle("max-lg:my-top-menu-ul-expanded")
    

    // alert(menuUl.style)
  
  }

  
  return (
    <nav className="flex flex-row items-center relative">
{/* Logo */}      
      <div
        id="logo"
        className="basis-2/6 text-xl text-center font-semibold cursor-pointer"
      >
        <a className="no-underline text-slate-800" href={"/"}>
          CoffeeStyle.
        </a>
      </div>
{/* expanded */}
      <ul id="my-top-menu-ul" className="hidden p-0 lg:basis-3/6 lg:flex lg:flex-row items-centers lg:space-x-8 uppercase text-sm font-medium list-none">
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
{/* Cart */}
      <ul className="basis-2/6 flex lg:basis-1/6 uppercase lg:justify-start justify-end text-sm list-none">
        <li className="font-Karla font-semibold">
          <a
            className="flex items-center group no-underline py-1 text-slate-500 hover:text-light-coffee"
            href={"#"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="my-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="mx-2">Cart</span>
            <span className="px-2 py-1.5 justify-center rounded-full bg-slate-500 text-slate-100 group-hover:bg-light-coffee">
              10
            </span>
          </a>
        </li>
      </ul>
{/* hidden bar */}
      <div id="hidden-bar" className="basis-2/6 lg:hidden cursor-pointer px-4 flex items-center justify-end ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="my-icon"
          id="my-toggle-top-menu-icon"
          onClick={toggleMenu}
          onBlur={toggleMenu}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
}
export default Header;
