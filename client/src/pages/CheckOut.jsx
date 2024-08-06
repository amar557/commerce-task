import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { emptyCart } from "../redux/cart.slice";

function CheckOut() {
  const [fixed, setFixed] = useState(false);
  const { items, subtotal } = useSelector((e) => e.cartSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    function handleSticky() {
      if (window.scrollY < 98) {
        setFixed(false);
      } else {
        setFixed(true);
      }
    }

    document.addEventListener("scroll", handleSticky);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("scroll", handleSticky);
    };
  }, []);
  return (
    <>
      <div className=" flex items-start justify-between   w-full ps-28  ">
        <div className=" h-[100vh] w-2/4">
          <CheckoutHead>contact</CheckoutHead>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email or mobile phone number"
            className=" rounded block w-[90%] mb-3 px-2 placeholder:text-slate-700 py-2 border focus:outline-[#197bbd]"
          />

          <input type="checkbox" name="" id="" className="inline-block" />
          <p className="inline-block ms-2">Email me with news and offers</p>

          <CheckoutHead>delivery</CheckoutHead>
          <div>
            <select
              name=""
              id=""
              className="w-[90%] mb-5 px-2 rounded outline-none py-2 text-lg border focus:outline-[#197bbd]"
            >
              <option value="">pakistan</option>
            </select>
            <input
              type="text"
              name=""
              placeholder="firstName"
              id=""
              className="w-[43%] px-2 py-2 rounded border focus:outline-[#197bbd]"
            />
            <input
              type="text"
              name=""
              placeholder="Last Name"
              id=""
              className="w-[43%] px-2 py-2 rounded border ms-[4%] focus:outline-[#197bbd]"
            />
            <input
              type="text"
              name=""
              placeholder="Address"
              id=""
              className="w-[90%] border rounded px-2 py-2 mt-5 focus:outline-[#197bbd]"
            />

            <input
              type="text"
              name=""
              placeholder="appartment, suite, etc."
              id=""
              className="w-[90%] border rounded px-2 py-2 mt-5 mb-5 focus:outline-[#197bbd]"
            />
            <input
              type="text"
              name=""
              placeholder="city"
              id=""
              className="w-[43%] rounded border px-2 py-2 focus:outline-[#197bbd]"
            />
            <input
              type="text"
              name=""
              placeholder="postal code"
              className="w-[43%] rounded border px-2 py-2  ms-[4%] focus:outline-[#197bbd]"
              id=""
            />
            <input
              type="text"
              name=""
              placeholder="phone Number"
              id=""
              className="w-[90%] border rounded px-2 py-2 mt-5 mb-5 focus:outline-[#197bbd]"
            />
          </div>
          <div>
            <input type="checkbox" name="" id="" className="inline-block" />
            <p className="inline-block ms-2 text-sm">
              Save this information for next time
            </p>
          </div>
          <div className="mt-2">
            <input type="checkbox" name="" id="" className="inline-block" />
            <p className="inline-block ms-2 text-sm">
              Text me with news and offers
            </p>
          </div>
          <input
            type="text"
            name=""
            placeholder="Mobile phone number"
            id=""
            className="w-[90%] border rounded px-2 py-2 mt-5 mb-5 focus:outline-[#197bbd]"
          />
          <p className="text-xs text-slate-600">
            By signing up via text, you agree to receive recurring automated
            marketing messages, including cart reminders, at the phone number
            provided. Consent is not a condition of purchase. Reply STOP to
            unsubscribe. Reply HELP for help. Message frequency varies. Msg &
            data rates may apply. View our Privacy Policy and Terms of Service.
          </p>
          <CheckoutHead>shipping methods</CheckoutHead>
          <div className="w-[90%] border rounded px-3 border-blue-500  py-3 mt-5 mb-5 flex items-center justify-between bg-[#f2f7ff]">
            <span>COD Shipping</span>
            <span className="capitalize font-semibold ">rs 150.00</span>
          </div>
          <CheckoutHead>payment</CheckoutHead>
          <p className="text-sm text-slate-600">
            All transactions are secure and encrypted.
          </p>
          <button
            onClick={() => {
              toast.success("you order is confirmed");
              dispatch(emptyCart());
              navigate("/");
            }}
            className="bg-black text-white py-3 px-4 rounded-md w-11/12 uppercase my-4"
          >
            confirm order
          </button>
        </div>
        <div
          className={`h-[130vh]  ${
            fixed ? "fixed top-0 w-1/2 left-[54.2%]" : "sticky top-[12%] w-2/4"
          }   left-2/4  bg-[#fafafa]  p-14`}
        >
          <div className="w-4/5">
            {items &&
              items.map((data, i) => (
                <CheckOutItem
                  key={data._id}
                  img={data.image}
                  text={data.title}
                  total={data.total}
                  quantity={data.quantity}
                  size={454}
                />
              ))}

            <div className="flex items-center justify-between mt-3 ">
              <p className="capitalize text-sm">subtotal</p>
              <p className="font-medium "> Rs {Math.floor(subtotal)}</p>
            </div>
            <div className="flex items-center justify-between mt-2 ">
              <p className="capitalize text-sm">shipping &#63;</p>
              <p className="font-medium">Rs 150.00</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="capitalize font-medium text-xl">total</p>
              <p className="font-medium text-xl">
                <span className="text-xs me-3 text-slate-400 uppercase">
                  pkr
                </span>
                Rs {Math.floor(subtotal + 150)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CheckoutHead({ children }) {
  return (
    <h1 className="capitalize text-xl font-semibold mt-8 mb-3">{children}</h1>
  );
}

function CheckOutItem({ img, text, size, total, quantity }) {
  return (
    <div className="flex items-center justify-start  me-auto relative mb-3">
      <img
        src={img}
        alt=""
        className="object-cover h-16 rounded-lg border w-12"
      />
      <span className="absolute -top-[7px] left-[2.4rem] font-semibold text-white bg-[#000000ad] w-4 grid place-content-center h-4 rounded-full text-sm">
        {quantity}
      </span>
      <div className="leading-4 justify-self-start ms-2">
        <p className="capitalize text-sm">{text}</p>
        <p className="text-xs text-slate-700">{size}</p>
      </div>
      <p className="ms-auto capitalize text-sm">rs {total}</p>
    </div>
  );
}

export default CheckOut;
