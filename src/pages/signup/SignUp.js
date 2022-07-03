import React, { ChangeEvent, useRef, useState } from "react";
import KeyboardWrapper from "../../components/keyboard/Keyboard";
import Numpad from "../../components/numpad/Numpad";
import "./signin.css";
import Bottom from "../../components/button/Button";
import { useSignIn } from "./useSignIn";

export default function SignUp() {
  const { onSubmit, register, handleSubmit,error ,errors} = useSignIn();
 
  const [isNumPad, setIsNumPad] = useState(true); 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");


  const setNumPad = (isActive) => {
    setIsNumPad(isActive);
  };
 
  const backSpace = () => {
    setName(name.slice(0, -1));
  };

  const getNumPadClick = (num) => {
    setPhoneNumber(phoneNumber + num.toString());
  };

  const deleteAllNum = () => {
    setPhoneNumber("");
  };

  const backSpaceNum = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  const getKeyBoardClick = (key) => {
    if (key === "backspace") {
      backSpace();
    } else if (key === "delete") {
      deleteAllNum();
    } else if (key === "enter") {
      onSubmit(phoneNumber);
    } else if (key === "changeLanguage") {
    } else {
      setName(name + key);
    }
  };

  return (
    <div className="signin">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-row">
            <label for="phone">Phone</label>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              {...register("phoneNumber")}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onFocus={() => setNumPad(true)}
            />
          </div>
          {/* {error   ? (
            <div className="input-row">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                {...register("name")}
                onFocus={() => setNumPad(false)}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          ) : null} */}
          <Bottom />
        </form>
      </div>

      {isNumPad ? (
        <Numpad
          backSpace={backSpaceNum}
          deleteAll={deleteAllNum}
          getNum={getNumPadClick}
        />
      ) : (
        <KeyboardWrapper getClick={getKeyBoardClick} />
      )}
    </div>
  );
}
