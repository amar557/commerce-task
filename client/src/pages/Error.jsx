import { useEffect } from "react";
import { useNavigate } from "react-router";

function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/shop");
    }, 2000);
  }, []);
  return (
    <div className="min-h-[50vh] flex items-center justify-center  flex-col gap-4 ">
      <h1 className="text-3xl capitalize font-medium text-center">
        page not found 😥
      </h1>
      <button
        className="bg-black text-white rounded-lg  px-4 py-2 text-lg  capitalize"
        onClick={() => navigate("/shop")}
      >
        go to shop
      </button>
    </div>
  );
}

export default Error;
