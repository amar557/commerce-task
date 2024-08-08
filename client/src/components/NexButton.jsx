import { useSwiper } from "swiper/react";
import { MdKeyboardArrowRight } from "react-icons/md";
function NexButton() {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        swiper.slideNext();
      }}
      className="border-black rounded-full hover:cursor-pointer hover:text-white hover:bg-black transition-all sm:p-2 p-1 border-2 disabled:hidden"
    >
      <MdKeyboardArrowRight />
    </button>
  );
}

export default NexButton;
