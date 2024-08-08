import img1 from "../assets/Rolex Submariner.avif";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import img2 from "../assets/watch2.jfif";
function SResultCard({ product }) {
  const dispatch = useDispatch();
  const desc = product.description.split(" ");
  console.log();
  return (
    <div className=" card cursor-grab  hover:shadow-lg transition-all  ">
      <div className=" transition-all duration-300 relative sm:h-60 h-40   overflow-hidden">
        <img
          src={product.image}
          alt=""
          className="h-full transition-all  object-cover opacity-1 duration-500 img1 w-full"
        />
        <img
          src={product.image}
          alt=""
          className="h-full duration-500 absolute top-0 left-0  transition-all  scale-100  w-full object-cover opacity-0 img2"
        />
        <button className="backdrop-blur-3xl  text-white absolute bottom-0 left-0 w-full btn transition-all duration-300 translate-y-full uppercase  py-1 sm:py-2 sm:text-sm text-xs  bg-[#c2c2c2d4] drop-shadow-sm">
          quick view
        </button>
        <div className="bg-red-600 text-white px-1 py-1 absolute top-2 left-2 text-sm ">
          -50%
        </div>
        <div className=" absolute top-2 right-2    opacity-0 card-heart ">
          <div className="border-2 rounded-full p-2 heart font-medium hover:bg-[#e2bb22] transition-all  text-slate-100 border-slate-100 text-xl">
            <CiHeart />
          </div>
          <div className="absolute top-10 -left-5 p-1 capitalize rounded-md px-2  sm:text-sm text-xs opacity-0 suggestion-w bg-black text-white ">
            add to wishlist
          </div>
        </div>
      </div>
      <div className="py-1 text-center space-y-1 px-1">
        <h3 className="text-center font-medium  uppercase text-sm sm:text-base">
          {product.title}
        </h3>
        <p className="sm:text-sm text-xs  text-center ">
          {desc.slice(0, 9).join(" ")}
          {desc.length > 9 ? "..." : ""}
        </p>
        <p className="capitalize text-red-700 text-sm font-medium">
          {" "}
          rs.{product.price}
        </p>
        <button
          className="bg-yellow-400 hover:bg-black hover:text-white cursor-pointer transition-all border px-3 py-1 border-black uppercase text-sm font-medium"
          onClick={() =>
            dispatch(
              addToCart({ ...product, quantity: 1, total: product.price })
            )
          }
        >
          add to cart
        </button>
      </div>
    </div>
  );
}

export default SResultCard;
