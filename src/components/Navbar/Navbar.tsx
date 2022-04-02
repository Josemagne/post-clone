import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { buttonActionCreators } from "../../state";
import Button from "./subcomponents/Button";

const Navbar = () => {
  // Dispatch action ADD_BUTTON
  const {} = bindActionCreators(buttonActionCreators, useDispatch());
  const [btn, setBtn] = useState(0);

  //   useEffect(() => {}, [btn]);

  return <div className="navbar"></div>;
};

export default Navbar;
