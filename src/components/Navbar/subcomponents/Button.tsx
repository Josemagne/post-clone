import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

const Button = (btnId: number, btnText: string) => {
  const [hovered, setHovered] = useState(false);

  const hoverHandler = () => {
    setHovered(!hovered);
  };

  return (
    <button className="subnav-btn" onMouseOver={() => hoverHandler}>
      {btnText}
    </button>
  );
};

export default Button;
