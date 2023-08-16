import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import food from "../Images/burger-image.png";
import { TodoItem } from "simpleheader1.0";
// import { mathlive } from "mathlive/dist/mathlive";
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-button/paper-button.js';


const Webcomp = () => {
  const [show, setShow] = useState(false);
  return (
    <>
    <div>    
      <div className="about-container">
        <div className="about-left">
        {/* <todo-item>Welcome to The world of Tasty & Fresh Food</todo-item> */}
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Food<span>Fire</span> healthy
            meal"
          </h4>
   
          <math-field>f(x)=</math-field>

          <todo-item>Welcome to The world of Tasty & Fresh Food</todo-item>
          <paper-button class="pink">link</paper-button>
      <paper-button raised class="indigo">raised</paper-button>
      <paper-button toggles raised class="green">toggles</paper-button>
      <paper-button disabled class="disabled">disabled</paper-button>
          {/* <script src="https://unpkg.com/mathlive"></script> */}
        </div>
        <div className="about-right">
          {/* <img src={food} alt="Food Image" /> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Webcomp;
