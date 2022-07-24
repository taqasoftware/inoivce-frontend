import React, { useRef, useState } from "react";
import KeyboardWrapper from "../../components/keyboard/Keyboard";
import Numpad from "../../components/numpad/Numpad";
import "./signin.css";
import { useSignIn } from "./useSignIn";
import logo from "../../assets/images/logo.svg";
import "reactjs-popup/dist/index.css";

export default function SignIn() {
  const {
    onSubmit,
    register,
    handleSubmit,
    error,
    isSignUp,
    wait,
    setValue,
    getValues,
  } = useSignIn();

  const [isNumPad, setIsNumPad] = useState(true);
  
  let [current, setCurrent] = useState("");
  const setNumPad = (isActive) => {
    setIsNumPad(isActive);
  };

  const backSpace = () => {
    // setinvoiceNumber(invoiceNumber.slice(0, -1));
  };

  const getNumPadClick = (num) => {
    const values = getValues();
    if (current === "phone") {
      const phone = values.phoneNumber;
      setValue("phoneNumber", phone + num.toString());
    } else if (current === "invoice")
    {
      const invoice = values.invoiceNumber;
      setValue("invoiceNumber", invoice + num.toString());
    }
      
    else if (current === "card"){
      const card = values.invoiceNumber;
      setValue("cardNumber", card + num.toString());
    }
  };

  const deleteAllNum = () => {
    // setPhoneNumber("");
  };

  const backSpaceNum = () => {
    // setPhoneNumber(phoneNumber.slice(0, -1));
  };

  const getKeyBoardClick = (key) => {
    if (key === "backspace") {
      backSpace();
    } else if (key === "delete") {
      deleteAllNum();
    } else if (key === "enter") {
      // onSubmit(phoneNumber);
    } else {
      const values = getValues();
      const name = values.name;
      setValue("name", name + key.toString());
    }
  };

  return (
    <div className="signin">
      {wait ? (
        <div>
          <div className="waiting"></div>
          <div className="waiting__sub">
            <h2> {wait} </h2>
          </div>
        </div>
      ) : null}

      <div className="square"></div>
      <div className="square2"></div>
      <div className="square3"></div>
      <img className="logo" alt="logo" src={logo} />

      <div className="left_content">
        <form
          className="form"
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <div className="input">
            <label className="label">
              {isSignUp ? "Phone Number" : "Phone Or Card Number"}
            </label>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              {...register("phoneNumber")}
              onFocus={() => {
                setNumPad(true);
                setCurrent("phone");
              }}
            />
          </div>
          <div className="input">
            <label className="label">Invoice Number</label>
            <input
              type="number"
              name="invoiceNumber"
              id="invoiceNumber"
              {...register("invoiceNumber")}
              onFocus={() => {
                setNumPad(true);
                setCurrent("invoice");
              }}
            />
          </div>

          {isSignUp ? (
            <>
              <div className="input">
                <label className="label">Card Number</label>
                <input
                  type="number"
                  name="cardNumber"
                  id="cardNumber"
                  {...register("cardNumber")}
                  onFocus={() => {
                    setNumPad(true);
                    setCurrent("card");
                  }}
                />
              </div>
              <div className="input">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  {...register("name")}
                  onFocus={() => setNumPad(false)}
                />
              </div>
            </>
          ) : null}
          {error ? (
            <small>
              <p>{error.message}</p>
            </small>
          ) : null}
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
      </div>
    </div>
  );
}
