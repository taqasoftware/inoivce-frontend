import React from "react";
import "./numpad.css";
export default function Numpad({getNum,deleteAll,backSpace}) {


  const getButtonNumber = (e) => {
    const num = e.target.textContent;
    getNum(num);
  }
 
  return (
    <div className="numpad">
      <div  className="row">
        <div onClick={getButtonNumber}   className="num"><span>1</span></div>
        <div onClick={getButtonNumber}   className="num"><span>2</span></div>
        <div onClick={getButtonNumber}   className="num"><span>3</span></div>
      </div>
      <div className="row">
        <div onClick={getButtonNumber}   className="num"><span>4</span></div>

        <div onClick={getButtonNumber}   className="num"><span>5</span></div>
        <div onClick={getButtonNumber}   className="num"><span>6</span></div>
      </div>
      <div className="row">
        <div onClick={getButtonNumber}   className="num"><span>7</span></div>
        <div onClick={getButtonNumber}   className="num"><span>8</span></div>
        <div onClick={getButtonNumber}   className="num"><span>9</span></div>
      </div>

      <div className="row">
      {/* <img className="delete-btn" src="https://img.icons8.com/ios/50/000000/delete-sign.png" alt="delete" onClick={deleteAll}/> */}
        <div className="num" onClick={getButtonNumber} ><span>0</span></div>
        {/* <img className="backspace-btn" src="https://img.icons8.com/ios/50/000000/back-arrow.png" alt="back" onClick={backSpace}/> */}
  
     </div>
    </div>
  );
}
