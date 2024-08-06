import { FaMinus, FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { decrement, deleteItem, increment } from "../redux/cart.slice";
import { useDispatch } from "react-redux";
function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="flex  items-start justify-start md:justify-between my-5 lg:flex-row flex-row md:flex-col lg:items-center lg:border-0 md:border">
      <div className="md:basis-5/12  flex items-center gap-5 lg:border-b-0 border-b-0 md:border-b ">
        <img src={item.image} alt="" className="w-24 h-full" />

        <span className="md:block hidden">
          <p className="font-bold  text-sm">{item.title}</p>
          <div className="space-x-2 my-2 text-[#00000080]">
            <button
              className="text-lg "
              onClick={() => dispatch(deleteItem(item._id))}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </span>
      </div>
      <div className="flex md:flex-row  flex-col md:ps-0 ps-4  justify-between  lg:w-3/5 md:w-full md:pe-5 lg:border-0 lg:py-0  py-4">
        <span className="md:hidden block">
          <div className="space-x-2 my-2 text-[#00000080]">
            <button className="text-lg ">
              <FiEdit />
            </button>
            <button
              className="text-lg "
              onClick={() => dispatch(deleteItem(item._id))}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </span>
        <div className="space-x-3 text-start basis-1/6 md:border-y-0  border-y border-dashed md:mb-0 mb-2 py-1 md:py-0">
          <span className={``}>Rs.{item.price}</span>
        </div>
        <div className="border px-3 py-1 flex items-center justify-between gap-3 rounded-3xl border-black mb-1 md:mb-0  basis-[10%]">
          <button onClick={() => dispatch(decrement(item._id))}>
            {item.quantity === 1 ? <RiDeleteBin6Line /> : <FaMinus />}
          </button>
          <span className="font-medium">{item?.quantity}</span>
          <button onClick={() => dispatch(increment(item._id))}>
            <FaPlus />
          </button>
        </div>

        <div>Rs.{item.total}</div>
      </div>
    </div>
  );
}

export default CartItem;
