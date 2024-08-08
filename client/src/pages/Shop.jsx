import React, { useEffect, useState } from "react";
import { categories } from "./navdata";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import SResultCard from "../components/SResultCard";
import { link } from "./Home";
import { RiEqualizerLine } from "react-icons/ri";
function Shop() {
  const [open, setOpen] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(false);
  const toggleMenu = (menuId) => {
    setOpen(open === menuId ? null : menuId);
  };
  const toggleFilter = () => {
    setFilter((open) => !open);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const products = await fetch(`${link}/api/list/get/products`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const items = await products.json();
      setProducts(items);
      setLoading(false);
    }
    getProducts();
  }, []);
  return (
    <>
      <button
        className="flex text-lg  my-5 xmd:hidden  items-center justify-center w-full"
        onClick={toggleFilter}
      >
        <RiEqualizerLine />
        <span>filter</span>
      </button>
      <div
        className={`fixed top-0 left-0 xmd:hidden block bg-[#000000ba] ${!filter ? "opacity-0 -z-20" : "z-20 opacity-100 "} w-full transition-all duration-300 h-screen `}
        onClick={toggleFilter}
      ></div>
      <div className="flex my-16 items-start justify-start w-11/12 mx-auto gap-10 ">
        <div
          className={`xmd:w-1/5 xmd:block xmd:static xmd:translate-x-0  sm:w-1/2 max-h-screen h-screen xmd:max-h-max xmd:h-max xmd:overflow-y-auto xmd:bg-white overflow-y-scroll ${!filter ? "-translate-x-full" : "translate-x-0"} z-20 w-9/12  fixed top-0 left-0 bg-[#f8f8f8] transition-all duration-200 xmd:ps-0 ps-4 `}
        >
          <h1 className=" after:absolute after:-bottom-2 after:rounded-md  after:left-0 after:w-9 after:h-1 after:bg-slate-300 mb-10 mt-5 relative capitalize font-medium text-lg">
            browse
          </h1>
          <ul className="w-full ">
            {categories.map((cat, i) => (
              <React.Fragment key={cat}>
                <div
                  className={`flex font-medium px-2 items-center gap-3 justify-between cursor-pointer  ${i === 0 && "border-t-0"} border-t py-1 `}
                  onClick={() => toggleMenu(cat.category)}
                >
                  <li>{cat.category}</li>
                  {cat.subcategories && (
                    <div>
                      {open === cat.category ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </div>
                  )}
                </div>
                {cat.subcategories && (
                  <div
                    className={`${open === cat.category ? "block" : "hidden"} ms-2 border-s border-slate-300   px-4 py-1 my-2`}
                  >
                    {cat.subcategories &&
                      cat.subcategories.map((sub) => (
                        <li className="cursor-pointer text-sm font-medium my-1 ">
                          {sub.category}
                        </li>
                      ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
        {loading ? (
          <div class="max-w-screen-lg me-auto catalog-product grid grid-cols-1 lg:grid-cols-3  sm:grid-cols-2 gap-8 py-8 xmd:w-4/5 w-full">
            <div class="border border-gray-200 p-4">
              <div class="animate-pulse space-y-2">
                <div class="bg-gray-200 h-48"></div>
                <div class="flex-1 space-y-2">
                  <div class="h-16 bg-gray-200 full"></div>
                  <div class="space-x-2 flex">
                    <div class="h-8 bg-gray-200 w-full"></div>
                    <div class="h-8 bg-gray-200 w-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="border border-gray-200 p-4">
              <div class="animate-pulse space-y-2">
                <div class="bg-gray-200 h-48"></div>
                <div class="flex-1 space-y-2">
                  <div class="h-16 bg-gray-200 full"></div>
                  <div class="space-x-2 flex">
                    <div class="h-8 bg-gray-200 w-full"></div>
                    <div class="h-8 bg-gray-200 w-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="border border-gray-200 p-4">
              <div class="animate-pulse space-y-2">
                <div class="bg-gray-200 h-48"></div>
                <div class="flex-1 space-y-2">
                  <div class="h-16 bg-gray-200 full"></div>
                  <div class="space-x-2 flex">
                    <div class="h-8 bg-gray-200 w-full"></div>
                    <div class="h-8 bg-gray-200 w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="xmd:w-4/5 w-full grid grid-cols-2 lg:grid-cols-4 gap-10 sm:grid-cols-3">
            {products.map((product) => (
              <SResultCard product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Shop;
