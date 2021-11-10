import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { buttonActionCreators } from "../../state";
import { ButtonActions } from "../../state/actions/buttonActions";
import { AddButton } from "../../state/actions/buttonActions";
import { State } from "../../state/reducers";
import Button from "./subcomponents/Button";

const btnText = [
  "Briefe versenden",
  "Pakete versenden",
  "Empfangen",
  "Standorte",
  "Geschäftslösungen",
];

const subnavText = {
  1: {
    Angebot: ["Lorem.", "Lorem.", "Lorem.", "Lorem.", "Lorem.", "Lorem."],
    "Schritt für Schritt": [
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
    ],
    " Beachten bei": [
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
    ],
  },
  2: {
    Angebot: ["Lorem.", "Lorem.", "Lorem.", "Lorem.", "Lorem.", "Lorem."],
    "Schritt für Schritt": [
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
    ],
    " Beachten bei": [
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
    ],
  },
  3: {
    Angebot: ["Lorem.", "Lorem.", "Lorem.", "Lorem.", "Lorem.", "Lorem."],
    "Schritt für Schritt": [
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
    ],
    " Beachten bei": [
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
    ],
  },
  4: {
    Angebot: ["Lorem.", "Lorem.", "Lorem.", "Lorem.", "Lorem.", "Lorem."],
    "Schritt für Schritt": [
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
    ],
    " Beachten bei": [
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
    ],
  },
  5: {
    Angebot: ["Lorem.", "Lorem.", "Lorem.", "Lorem.", "Lorem.", "Lorem."],
    "Schritt für Schritt": [
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
    ],
    " Beachten bei": [
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
      "Lorem.",
    ],
  },
};

const Navbar = () => {
  // Dispatch action ADD_BUTTON
  const {} = bindActionCreators(buttonActionCreators, useDispatch());
  const [btn, setBtn] = useState(0);

  const id = useSelector((state: State) => state.button?.button.buttonId);

  //   useEffect(() => {}, [btn]);

  return (
    <div className="navbar">
      {btnText.map((btn, index) => {
        return (
          <div className="subnav" key={index}>
            <Button setBtn={setBtn} btnText={btn} btnId={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
