import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { actionCreators, State } from "../../state";
import { GetAction } from "../../state/actions";

interface Props {}

const PersonsList = (props: Props) => {
  const getDispatch = useDispatch<Dispatch<GetAction>>();
  const dispatch = useDispatch();
  const { getPersons } = bindActionCreators(actionCreators, dispatch);
  const persons = useSelector((state: State) => state.persons);

  console.log("persons: ", persons);

  return (
    <div className="personslist">
      <div>PersonsList</div>
      <div>
        {persons.persons.map((person) => {
          return (
            <div>
              <ul>
                <li>name: {person.name}</li>
                <li>id: {person.personId}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonsList;
