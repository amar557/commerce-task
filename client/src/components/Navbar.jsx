import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoBagHandleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
// import { IoBagHandleSharp } from "react-icons/io5";
import { menuItems } from "../pages/navdata";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
function Navbar({ logOutUser, user }) {
  const [opened, setOpened] = useState("");
  const [sideBar, setSideBar] = useState(false);
  const { subtotal } = useSelector((total) => total.cartSlice);
  const toggleSideBar = () => {
    setSideBar((open) => !open);
    setOpened("");
  };
  const toggleMenu = (menu) => {
    setOpened((open) => (open === menu ? null : menu));
  };

  return (
    <div className=" p-4  shadow-md">
      <ul className=" w-11/12 mx-auto items-center justify-start gap-4 lg:flex hidden">
        <li className="text-base capitalize font-medium ">
          <NavLink to="/">
            <img src={logo} className="h-10 w-auto object-cover" alt="" />
          </NavLink>
        </li>
        {menuItems.map((item) => (
          <div className="flex text-sm font-normal uppercase hover:text-secondary transition-all group items-center justify-center gap-2 item">
            <li className=" ms-6 ">
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
            {item.children && (
              <span>
                <IoIosArrowDown />
              </span>
            )}
            <div className=" items-center max-w-full overflow-hidden justify-center z-40 flex-col text-black absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-[50%] hidden nested pt-10 ">
              {item.children && (
                <div className="flex    w-full overflow-hidden bg-white   px-4  -z-10 shadow-2xl max-h-full">
                  {item.children.map((nested) => (
                    <div className="flex flex-col border-r ">
                      <div className="hover:text-black px-4 cursor-pointer hover:bg-slate-50 transition-all py-3">
                        {nested.header}
                      </div>
                      <ul className="flex flex-col">
                        {nested.nestedChildren.map((ite) => (
                          <li className="hover:text-black px-4 hover:font-medium cursor-pointer hover:bg-slate-50 transition-all text-nowrap p-1 text-[12px] py-2">
                            {ite}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        <li className="text-sm hover:text-secondary transition-all uppercase">
          <NavLink to="/add-product">list item</NavLink>
        </li>
        {user ? (
          <li
            onClick={() => logOutUser()}
            className="text-sm hover:text-secondary transition-all uppercase"
          >
            <button>log out</button>
          </li>
        ) : (
          <>
            <li className="text-sm hover:text-secondary transition-all uppercase">
              <NavLink to="/sign-up">sign up</NavLink>
            </li>
            <li className="text-sm hover:text-secondary transition-all uppercase">
              <NavLink to="/sign-in">login</NavLink>
            </li>
          </>
        )}
        <li className="text-sm  flex items-center justify-end grow capitalize font-medium">
          <NavLink
            to="/cart"
            className="text-end hover:text-secondary transition-all flex justify-end items-center"
          >
            <span className="mr-2">rs.{subtotal}</span>
            <IoBagHandleSharp />
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center  justify-between lg:hidden ">
        <div className="text-lg flex items-center gap-3">
          <RxHamburgerMenu onClick={toggleSideBar} />
          <IoIosSearch />
        </div>
        <NavLink to={"/"}>
          <img src={logo} alt="" className="h-10 w-auto" />
        </NavLink>
        <div className="text-lg flex items-center gap-3">
          <CiHeart />
          <NavLink to={"/cart"}>
            <IoBagHandleSharp />
          </NavLink>
        </div>
      </ul>
      <div
        className={`fixed h-screen w-full bg-[#000000ba] top-0 left-0 ${sideBar ? " opacity-100 z-20" : " opacity-0 -z-20"} transition-all duration-200 `}
        onClick={toggleSideBar}
      >
        <button className="absolute top-4 text-stone-400 text-xl right-4">
          <RxCross2 />
        </button>
      </div>
      <ul
        className={`fixed ${!sideBar ? "-translate-x-[101%]" : "translate-x-0"} sm:w-1/2 w-3/4  xmd:w-1/3 flex overflow-y-scroll flex-col justify-start transition-all duration-200  items-start py-8 ps-5 top-0 left-0 bg-black text-white max-h-screen lg:hidden  h-screen z-40`}
      >
        <p className="uppercase text-slate-400 text-sm fonme">
          help line: 0308455497
        </p>
        <div className="flex items-center justify-center rounded-3xl px-2 py-1 bg-slate-900 my-2 ">
          <input
            type="search"
            name=""
            placeholder="search..."
            className="bg-transparent placeholder:text-slate-400 placeholder:first-letter:uppercase"
            id=""
          />
          <button>
            <IoIosSearch />
          </button>
        </div>
        {menuItems.map((item) => (
          <>
            <div
              className="flex p-2 border-b w-full text-sm font-normal uppercase hover:text-secondary transition-all group items-center justify-between text-slate-400 gap-2 item"
              onClick={() => toggleMenu(item.name)}
            >
              <li className=" " onClick={toggleSideBar}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
              {item.children && (
                <span
                  className={`${
                    opened === item.name ? "rotate-180  " : " rotate-0"
                  }
                  transition-all duration-300
                  text-lg
                  
                  `}
                >
                  <IoIosArrowDown />
                </span>
              )}
            </div>

            {item.children &&
              item.children.map((nested) => (
                <div className={opened === item.name ? "block" : "hidden"}>
                  <div className="ps-5 text-slate-200">{nested.header}</div>
                  {nested.nestedChildren.map((ne) => (
                    <li className="ps-6 text-slate-400">{ne}</li>
                  ))}
                </div>
              ))}
          </>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
