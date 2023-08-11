// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App1';
// import reportWebVitals from './reportWebVitals';
// import Header from './Coding/Components/Header';
// import { BrowserRouter } from 'react-router-dom'
// // import WCSocialLink from "@vanillawc/wc-social-link/index"
// // import TodoItem from "simpleheader"


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <Header /> */}

//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// // defineCustomElements(window);
// // defineCustomElements11(window);


import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Coding/Components/Header";
import Body from "./Coding/Components/Body";
import Footer from "./Coding/Components/Footer";
import About from "./Coding/Components/About";
import Error from "./Coding/Components/Error";
import Contact from "./Coding/Components/Contact";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Outlet(it contain children component like body, About, Restaurant Menu etc) and Footer Component
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [{ // nested routing
          // path: "profile",
          // element: <Profile />,
        }]
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        // path: "restaurant/:resId",
        // element: <RestaurantMenu />,
      },
    ],
  },
  {
    // path: "login",
    // element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter
