import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { link } from "./Home";
import { toast } from "react-toastify";

function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFormChanges = function (e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();

    const request = await fetch(`${link}/api/auth/register`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const navigate=
    if (request.ok) {
      // navi;
    }
    const res = await request.json();
    console.log(res);
    toast.warn(res.warn);
    toast.success(res.message);
    if (res.admin) {
      navigate("/sign-in");
    } else return;
    localStorage.setItem("token", res.token);
    localStorage.setItem("admin", res.admin);
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
          user name*
        </label>
        <input
          type="text"
          name="username"
          onChange={handleFormChanges}
          value={form.username}
          className="block p-3 placeholder:capitalize border rounded-md focus:border-blue-200 focus:border outline-none bg-slate-50 w-full"
          placeholder="user name"
          id=""
        />
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
          className="uppercase mt-3 w-full bg-black py-2 text-white rounded-md "
          onClick={handleSubmit}
        >
          sign up
        </button>

        <div className="flex items-center justify-center gap-3 mt-5">
          <p className="capitalize">already have account ?</p>
          <NavLink to="/sign-in" className={"text-blue-500"}>
            login
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
