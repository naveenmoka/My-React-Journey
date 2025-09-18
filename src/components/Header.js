import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [buttonText, setButtonText] = useState("Login");
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo"
                    src= {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="logBtn" onClick=
                    {() => {
                            buttonText === "Login" 
                            ? setButtonText("Logout") 
                            : setButtonText("Login");

                        }
                    }>{ buttonText}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;