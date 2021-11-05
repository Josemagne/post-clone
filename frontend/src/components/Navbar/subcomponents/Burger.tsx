import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props {}

const Burger = (props: Props) => {
  const [burgerClicked, setBurgerClicked] = useState<void | boolean>();
  const animationNames = {
    firstBeam: () => {
      return burgerClicked ? "burgerOpenFirst" : "burgerCloseFirst";
    },
    middleBeam: () => {
      return burgerClicked ? "burgerOpenMiddle" : "burgerCloseMiddle";
    },
    lastBeam: () => {
      return burgerClicked ? "burgerOpenLast" : "burgerCloseLast";
    },
    background: () => {
      return burgerClicked ? "orange" : "white";
    },
  };

  useEffect(() => {
    // sets burgerClicked to false after page loading
    setBurgerClicked(false);
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="burger">
      <div
        className={"burger__content"}
        style={{ backgroundColor: animationNames.background() }}
        onClick={() => {
          setBurgerClicked(!burgerClicked);
          dispatch({
            type: "BURGER_CLICKED",
            payload: undefined,
          });
        }}
      >
        {/* TODO burger is not in middle when in .burgerClicked modus. Put it in middle */}
        <button
          className="burger__content__container"
          style={{
            backgroundColor: animationNames.background(),
          }}
        >
          <span
            className={
              burgerClicked ? "burgerClicked beam" : "beam burgerClosed"
            }
            style={{
              animationName: animationNames.firstBeam(),
            }}
          ></span>
          <span
            className={
              burgerClicked ? "burgerClicked beam" : "beam burgerClosed"
            }
            style={{
              animationName: animationNames.middleBeam(),
            }}
          ></span>
          <span
            className={
              burgerClicked ? "burgerClicked beam" : "beam burgerClosed"
            }
            style={{
              animationName: animationNames.lastBeam(),
            }}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Burger;
