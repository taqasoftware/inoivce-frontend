import React, { useState } from "react";
import KeyboardWrapper from "../../components/keyboard/Keyboard";
import Numpad from "../../components/numpad/Numpad";
import "./signin.css"; 
import { useSignIn } from "./useSignIn";

export default function SignIn() {
  const { onSubmit, register, handleSubmit, error } = useSignIn();

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
    } else {
      setName(name + key);
      console.log(key)
 
    }
  };

  return (
    <div className="signin">
      <div className="square"></div>
      <div className="square2"></div>
      <div className="square3"></div>
      <img className="logo" alt="logo" src="logo.svg" />
      <div className="left_content">
    
        <form className="form" onSubmit={handleSubmit((data) => onSubmit(data))} >
          <div className="input">
            <label className="label">
              PHONE
            </label>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              {...register("phoneNumber")}
              defaultValue={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onFocus={() => setNumPad(true)}
            />
          </div>
          {
            error ? (
              <div className= "input">
            <label className="label">
              NAME
            </label>
            <input
              type="text"
              name="name"
              id="name"
              {...register("name")}
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNumPad(false)}
            />
          </div>
            ):null
          }
          <input className="submit_btn" type="submit" value="سجل" />
        </form>
      </div>
      <div className="right_content">
        <div className="paraghraph">
          <h1>سجل فاتورتك</h1>
          <h1>وحصل على نقاط خصم</h1>
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
       {/* <div className="square">
          
          </div> */}
      </div>
       
    </div> 
  );
}
