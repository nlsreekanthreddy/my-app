import { useState } from "react";
// import FoodFireLogo from "../Images/Food Fire Logo.png";
import { Link } from "react-router-dom"; // imported Link for client side routing
// import { useNavigate } from "react-router-dom";
// import loader  from "codinglocker-stencil-demo-proj/loader";
// import { simpleheader }  from "simpleheader"; 

 
// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
    //   src={FoodFireLogo}
      alt="Food Fire"
      title="Food Fire"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const token = localStorage.getItem("token");
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(
    token?.length === 100 ? true : false
  );
//   const navigate = useNavigate();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home </Link>
           </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            <Link to="/webcomp">WebComp</Link>
          </li>
          <li>
          (
              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.clear();
                  setIsLoggedin(!isLoggedin);
                }}
              >
                Logout
              </button>
            ) 
          </li>
          <li>
                {/* <todo-item>Wish List</todo-item> */}
   
          </li>
        </ul>
      </div>
      {/* <my-card user-name="CodingLocker"> </my-card>
      <search-world search-text="bmw"> </search-world> */}
      
    </div>
    
  );
};
// reportWebVitals();
// defineCustomElements(window);
export default Header;
