import { NavLink } from "react-router-dom";

function Navbar({ logOutUser, user }) {
  return (
    <div className="bg-slate-200 p-4">
      <ul className="flex items-start justify-start gap-4">
        <li className="text-base capitalize font-medium">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-base capitalize font-medium">
          <NavLink to="/cart">cart</NavLink>
        </li>
        <li className="text-base capitalize font-medium">
          <NavLink to="/add-product">list item</NavLink>
        </li>
        {user ? (
          <li
            onClick={() => logOutUser()}
            className="text-base capitalize font-medium"
          >
            <button>log out</button>
          </li>
        ) : (
          <>
            <li className="text-base capitalize font-medium">
              <NavLink to="/sign-up">sign up</NavLink>
            </li>
            <li className="text-base capitalize font-medium">
              <NavLink to="/sign-in">login</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
