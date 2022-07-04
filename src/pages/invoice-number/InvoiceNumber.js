import React, { useState } from "react";
import Numpad from "../../components/numpad/Numpad";
import "./invoice-number.css";
import { useInvoice } from "./useInvoice";
import { useParams } from "react-router-dom";

export default function InvoiceNumber() {
  const [invoiceNumber, setInvoiceNumber] = useState("");

  const { onSubmit, register, handleSubmit, error, errors, wait } =
    useInvoice();
  const { id } = useParams();
  console.log(error);
  const getNumPadClick = (num) => {
    setInvoiceNumber(invoiceNumber + num.toString());
  };

  const deleteAllNum = () => {
    invoiceNumber("");
  };

  const backSpaceNum = () => {
    setInvoiceNumber(invoiceNumber.slice(0, -1));
  };

  return (
    <div className="invoice-number">
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

      <img className="logo" alt="logo" src="logo.svg" />
      <div className="left_content">
        <form
          className="invoice-form"
          onSubmit={handleSubmit((data) => onSubmit(data, id))}
        >
          <div className="invoice-input">
            <label htmlFor="phone">Number</label>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              {...register("invoice")}
              defaultValue={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />
          </div>
          {error === "invoice number is not found" ? (
            <small>
              <p>يرجى التاكد من رقم الفاتوره</p>
            </small>
          ) : null}
          <input className="invoice-submit_btn" type="submit" value="حفظ" />
        </form>
      </div>
      <div className="right_content">
        <div className="paraghraph">
          <h1>سجل فاتورتك</h1>
          <h1>وحصل على نقاط خصم</h1>
        </div>
        <Numpad
          backSpace={backSpaceNum}
          deleteAll={deleteAllNum}
          getNum={getNumPadClick}
        />
      </div>
    </div>
  );
}
