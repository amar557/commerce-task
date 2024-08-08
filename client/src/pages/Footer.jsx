import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import SuggestionBox from "../components/SuggestionBox";
function Footer() {
  const footerData = [
    {
      header: "Top Brands",

      children: [
        "Kenneth Cole",
        "Tommy Hilfiger",
        "Emporio Armani",
        "Fossil",
        "Michael Kors",
        "Coach New York",
        "Ferrari",
        "Ted Baker",
        "See All Brands",
      ],
    },
    {
      header: "Quick Links",
      children: [
        "FAQ’s",
        "Shop",
        "About",
        "Contact",
        "Privacy Policy",
        "Warranty Policy",
        "Orders Tracking",
        "Terms & Conditions",
        "Returns & Exchanges Policy",
      ],
    },
  ];

  const icons = [
    {
      icon: <FaFacebookF />,
      description: "Follow us on Facebook",
    },
    {
      icon: <FaInstagram />,
      description: "Follow us on Instagram",
    },
    {
      icon: <IoIosMailUnread />,
      description: "Email us",
    },
    {
      icon: <IoCall />,
      description: "Call us",
    },
    {
      icon: <FaYoutube />,
      description: "YouTube ",
    },
  ];
  return (
    <div className="bg-black text-white grid gap-y-5 grid-cols-1 xmd:grid-cols-4 md:grid-cols-2 items-start justify-between py-10 pb-20 px-4 md:px-16">
      {footerData.map((data) => (
        <div className="">
          <h3 className="text-lg font-semibold mb-5 capitalize">
            {data.header}
          </h3>
          <ul className="flex flex-col items-start gap-1">
            {data.children.map((item) => (
              <li className="text-sm font-medium hover:cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="">
        <h2 className="capitalize font-semibold text-lg mb-2">
          Signup for Newsletter
        </h2>
        <input
          type="email"
          className="bg-white block mb-3 text-black placeholder:capitalize placeholder:font-medium font-medium placeholder:text-black px-4 py-2 rounded-lg border-0 outline-none w-11/12"
          placeholder="your email"
          name=""
          id=""
        />
        <input
          type="number"
          className="block bg-white text-black placeholder:capitalize placeholder:font-medium font-medium w-11/12 placeholder:text-black px-4 py-2 rounded-lg border-0 outline-none"
          placeholder="whatsapp number"
          name=""
          id=""
        />
        <button className="bg-secondary rounded-lg px-3 py-2 my-2 text-white capitalize">
          sign up
        </button>
      </div>
      <div className="">
        <h2 className="capitalize font-semibold text-lg mb-4">Contact Info!</h2>
        <h4 className="font-medium text-sm mb-4">Mobile: 03080122278</h4>
        <h4 className="font-medium text-sm mb-4">Email: info@royalwrist.pk</h4>
        <h4 className="font-medium w-full text-[15px]">
          Address: Office 4B-4th Floor, Building 38-C, Lane-8, Main
          Khayaban-e-Muslim, D.H.A Phase 6 Karachi, Pakistan.
        </h4>
        <div className="flex items-center justify-start gap-3 my-3">
          {icons.map((icon, i) => (
            <div className="group relative">
              <div
                key={i}
                className="border-2 border-white rounded-full p-2  text-lg group relative"
              >
                {icon.icon}
              </div>
              <SuggestionBox>{icon.description}</SuggestionBox>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
