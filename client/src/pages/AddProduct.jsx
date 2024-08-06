import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";
import { toast } from "react-toastify";
import { link } from "./Home";

function AddProduct() {
  const navigate = useNavigate();
  const galleryImgs = useRef();
  const [loading, setLoading] = useState(false);
  const [galleryImages, setGalleryImages] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    async function handleDataSubmit() {
      setLoading(true);
      const mainref = ref(
        storage,
        `imges/new/${galleryImages.name + Date.now()}`
      );
      try {
        const uploadTask = await uploadBytes(mainref, galleryImages);
        const downloadUrl = await getDownloadURL(uploadTask.ref);
        setFormData({ ...formData, image: downloadUrl });
      } catch (error) {
        console.error("Error uploading image:", error);
      }
      setLoading(false);
    }
    if (galleryImages) handleDataSubmit();
  }, [galleryImages]);

  const handleSubmit = async function (e) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`${link}/api/list/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const res = await response.json();
    console.log(response, res);
    if (response.ok) {
      setFormData({ title: "", description: "", price: "", image: "" });
    }
    setLoading(false);
    toast.warn(res.warn);
    toast.success(res.message);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "price") {
      setFormData({ ...formData, [name]: parseFloat(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="px-6 bg-slate-100 w-full text-base py-10">
      <div className="flex items-center justify-between w-full">
        <h2 className="capitalize font-semibold text-xl">add product</h2>
        <button
          className="bg-black uppercase rounded-sm text-white flex gap-1 py-2 px-4 items-center justify-center"
          onClick={() => navigate(-1)}
        >
          <GoArrowLeft />
          <span className="font-semibold text-sm">back</span>
        </button>
      </div>

      <form action="" className="w-1/2 mx-auto bg-white p-4 my-8">
        <h1 className="text-xl font-semibold border-b py-4 capitalize">
          product information
        </h1>
        <label
          htmlFor=""
          className="block text-sm capitalize font-semibold my-2"
        >
          Product Name*
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="block p-3 placeholder:capitalize border rounded-md focus:border-blue-200 focus:border outline-none bg-slate-50 w-full"
          placeholder="product name"
          id=""
        />
        <label
          htmlFor=""
          className="block text-sm capitalize font-semibold my-2"
        >
          description
        </label>
        <textarea
          name="description"
          onChange={handleChange}
          value={formData.description}
          id=""
          placeholder="product description"
          rows={4}
          className="p-2 border rounded-md bg-slate-50 placeholder:capitalize block w-full outline-none"
        ></textarea>
        <label
          htmlFor=""
          className="block text-sm capitalize font-semibold my-2"
        >
          price*
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="block p-3 placeholder:capitalize border rounded-md focus:border-blue-200 focus:border outline-none bg-slate-50 w-full"
          placeholder="product name"
          id=""
        />
        <div>
          <label
            htmlFor=""
            className="block text-sm capitalize font-semibold my-2"
          >
            select image:
          </label>
          <input
            type="file"
            name=""
            id=""
            onChange={(e) => setGalleryImages(e.target.files[0])}
            ref={galleryImgs}
            hidden
          />
          <label
            htmlFor=""
            className="flex items-center cursor-pointer justify-start border-blue-200 border w-max p-3 text-base transition-all gap-3 hover:bg-blue-200 hover:shadow-2xl shadow-blue-100 capitalize font-semibold my-2"
            onClick={() => galleryImgs.current.click()}
          >
            <FiUploadCloud />
            <span>select image</span>
          </label>
        </div>
        <button
          className="w-full disabled:opacity-35 bg-black text-white py-2 rounded-md uppercase my-2"
          type="submit"
          disabled={loading}
          onClick={handleSubmit}
        >
          create list
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
