import React, { useEffect, useState } from "react";
import useAppDispatch from "../../hooks/useAppDispatch";
import Button from "./subcomponents/Button";

const Navbar = () => {
  /**
   * Lets us dispatch actions to the store
   */
  const dispatch = useAppDispatch();

  const [btn, setBtn] = useState(0);

  //   useEffect(() => {}, [btn]);

  return <div className="navbar"></div>;
};

export default Navbar;
