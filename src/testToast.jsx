import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export function Notification() {
  const notify = () => toast("Item Added to WishList !");

  return (
    <div>
      {notify()}
      <ToastContainer />
    </div>
  );
}
