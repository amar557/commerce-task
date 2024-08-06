import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
function Cart() {
  const { items: cartItems, subtotal } = useSelector(
    (items) => items.cartSlice
  );
  const data = ["price", "quantity", "total"];
  console.log(cartItems);
  const navigate = useNavigate();
  return (
    <div className="w-4/5 mx-auto my-10">
      {cartItems && cartItems.length > 0 ? (
        <>
          <div className="lg:flex items-center hidden justify-between border-b pb-3 border-[#00000052]">
            <span className="text-lg font-semibold uppercase grow-0 shrink-0 basis-4/12">
              product
            </span>
            {data.map((data) => (
              <span className="text-lg font-semibold uppercase grow-0 shrink-0 basis-1/5 text-center ">
                {data}
              </span>
            ))}
          </div>
          {cartItems && cartItems.map((item) => <CartItem item={item} />)}{" "}
          <div className="flex flex-col gap-4 justify-end items-end">
            <div>
              <p className="inline-block font-medium capitalize  ">
                subtotal:{" "}
              </p>
              <span className="capitalize ms-1">rs.{subtotal}</span>
            </div>
            <Link
              to="/checkout"
              className="block bg-black py-2 px-4 rounded-xl text-white"
            >
              Check Out
            </Link>
          </div>
        </>
      ) : (
        <div className="flex items-center gap-10 justify-center  flex-col">
          <h1 className="text-4xl font-medium capitalize">
            your cart is empty{" "}
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-black rounded-md capitalize px-4 py-2 text-white text-lg"
          >
            return to shop
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
