import { useState } from "react";
import { useNavigate } from "react-router";
import { link } from "./Home";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function Login({ setUser }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleFormChanges = function (e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();

    const request = await fetch(`${link}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await request.json();
    if (request.ok) {
      navigate("/");
      setUser(res.other.username);
      localStorage.setItem("user", res.other.username);
      localStorage.setItem("email", res.other.email);
    }
    toast.warn(res.warn);
    toast.success(res.message);
    if (res.admin) {
    } else return;

    return res;
  };

  return (
    <div className="bg-slate-100 flex items-center justify-center min-h-screen">
      <form action="" className="bg-white p-8 w-1/3 rounded-sm ">
        <h1 className="capitalize text-lg font-semibold border-b pb-2">
          login
        </h1>
        <label
          htmlFor=""
          className="block text-sm capitalize font-semibold my-2"
        >
          Email*
        </label>
        <input
          type="email"
          name="email"
          onChange={handleFormChanges}
          value={form.email}
          className="block p-3 placeholder:capitalize border rounded-md focus:border-blue-200 focus:border outline-none bg-slate-50 w-full"
          placeholder="email"
          id=""
        />
        <label
          htmlFor=""
          className="block text-sm capitalize font-semibold my-2"
        >
          password*
        </label>
        <input
          type="password"
          name="password"
          onChange={handleFormChanges}
          value={form.password}
          className="block p-3 placeholder:capitalize border rounded-md focus:border-blue-200 focus:border outline-none bg-slate-50 w-full"
          placeholder="password"
          id=""
        />

        <button
          className="uppercase w-full bg-black py-2 text-white rounded-md mt-5"
          onClick={handleSubmit}
        >
          login
        </button>
        <div className="flex items-center justify-center gap-3 mt-5">
          <p className="capitalize">have no account ?</p>
          <NavLink to="/sign-up" className={"text-blue-500"}>
            sign up
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;
