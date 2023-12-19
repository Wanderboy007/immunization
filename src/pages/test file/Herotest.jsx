import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SetInitialState,
  Clear,
} from "../../reduxxx/featurs/MotherDataSlice/MotherDataSlice";

const Herotest = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.MotherData);
  const [motherName, SetMotherName] = useState({
    motherName: "sneha",
    motherAdhar: "5645645645",
  });
  console.log(count);
  return (
    <div>
      <div>
        <p>count={count.motherName}</p>
        <button onClick={() => dispatch(SetInitialState(motherName))}>
          click me
        </button>
        <button onClick={() => dispatch(Clear())}>Clear</button>
      </div>
    </div>
  );
};

export default Herotest;
