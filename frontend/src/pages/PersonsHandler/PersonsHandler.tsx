import React from "react";

interface Props {}

const PersonsHandler = (props: Props) => {
  return (
    <div className="personhandler">
      <div className="addpersons">
        <input type="text" className="addpersons__input" />
      </div>
    </div>
  );
};

export default PersonsHandler;
