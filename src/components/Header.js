import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonText, setButtonText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { LoggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg h-30">
      <div className="logoContainer ">
        <img className="w-40 h-30" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>Online Status:{onlineStatus ? "✅" : "🔴"} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4 font-bold">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button
            className="logBtn"
            onClick={() => {
              buttonText === "Login"
                ? setButtonText("Logout")
                : setButtonText("Login");
            }}
          >
            {buttonText}
          </button>
          <li className="px-4">{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
