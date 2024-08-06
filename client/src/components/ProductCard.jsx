import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="max-w-sm  bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-52 object-contain object-center"
        src={product.image}
        alt="Product "
      />
      <div className="p-4">
        <h2 className="text-gray-900 text-lg font-semibold mb-2">
          {product.title}
        </h2>
        <p className="text-gray-700 text-base mb-2">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="capitalize text-gray-900 text-xl font-bold">
            rs.{product.price}
          </span>
        </div>
        <button
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 "
          onClick={() =>
            dispatch(
              addToCart({ ...product, quantity: 1, total: product.price })
            )
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
