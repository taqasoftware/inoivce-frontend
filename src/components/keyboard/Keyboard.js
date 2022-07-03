import "./keyboard.css";
import { useState } from "react";
import { languages } from "./languages";
const KeyboardWrapper = ({ getClick }) => {
  const [engilsh, setEngilsh] = useState(false);
  const [language, setLanguage] = useState(languages.ar);
  const onClick = (e) => {
    const key = e.target.textContent;

    getClick(key);
  };

  const changeLanguage = () => {
    setEngilsh(!engilsh);
  
    if (engilsh) {
      setLanguage(languages.en.small);
    } else {
      setLanguage(languages.ar);
    }
  };

  return (
    <div className="keyboard">
      <div className="keys-container">
        <div className="keyboard__row">
          <div className="key--double" data-key="192">
            <div>~</div>
            <div>`</div>
          </div>
          <div className="key--double" data-key="49">
            <div>!</div>
            <div>1</div>
          </div>
          <div className="key--double" data-key="50">
            <div>@</div>
            <div>2</div>
          </div>
          <div className="key--double" data-key="51">
            <div>#</div>
            <div>3</div>
          </div>
          <div className="key--double" data-key="52">
            <div>$</div>
            <div>4</div>
          </div>
          <div className="key--double" data-key="53">
            <div>%</div>
            <div>5</div>
          </div>
          <div className="key--double" data-key="54">
            <div>^</div>
            <div>6</div>
          </div>
          <div className="key--double" data-key="55">
            <div>&</div>
            <div>7</div>
          </div>
          <div className="key--double" data-key="56">
            <div>*</div>
            <div>8</div>
          </div>
          <div className="key--double" data-key="57">
            <div>(</div>
            <div>9</div>
          </div>
          <div className="key--double" data-key="48">
            <div>)</div>
            <div>0</div>
          </div>
          <div className="key--double" data-key="189">
            <div>_</div>
            <div>-</div>
          </div>
          <div className="key--double" data-key="187">
            <div>+</div>
            <div>=</div>
          </div>
          <div className="key--bottom-right key--word key--w4" data-key="8">
            <span>delete</span>
          </div>
        </div>
        <div className="keyboard__row">
          <div className="key--bottom-left key--word key--w4" data-key="9">
            <span>tab</span>
          </div>
          <div className="key--letter" data-char="Q" onClick={onClick}>
            {language.b2}
          </div>
          <div className="key--letter" data-char="W" onClick={onClick}>
            {language.b3}
          </div>
          <div className="key--letter" data-char="E" onClick={onClick}>
            {language.b4}
          </div>
          <div className="key--letter" data-char="R" onClick={onClick}>
            {language.b5}
          </div>
          <div className="key--letter" data-char="T" onClick={onClick}>
            {language.b6}
          </div>
          <div className="key--letter" data-char="Y" onClick={onClick}>
            {language.b7}
          </div>
          <div className="key--letter" data-char="U" onClick={onClick}>
            {language.b8}
          </div>
          <div className="key--letter" data-char="I" onClick={onClick}>
            {language.b9}
          </div>
          <div className="key--letter" data-char="O" onClick={onClick}>
            {language.b10}
          </div>
          <div className="key--letter" data-char="P" onClick={onClick}>
            {language.b11}
          </div>
          <div className="key--double" data-key="219" data-char="{[">
            <div>[</div>
          </div>
          <div className="key--double" data-key="221" data-char="}]">
            <div>]</div>
          </div>
          <div className="key--double" data-key="220" data-char="|\">
            <div>|</div>
            <div>\</div>
          </div>
        </div>
        <div className="keyboard__row">
          <div className="key--bottom-left key--word key--w5" data-key="20">
            <span>caps lock</span>
          </div>
          <div className="key--letter" data-char="A" onClick={onClick}>
            {language.c2}
          </div>
          <div className="key--letter" data-char="S" onClick={onClick}>
            {language.c3}
          </div>
          <div className="key--letter" data-char="D" onClick={onClick}>
            {language.c4}
          </div>
          <div className="key--letter" data-char="F" onClick={onClick}>
            {language.c5}
          </div>
          <div className="key--letter" data-char="G" onClick={onClick}>
            {language.c6}
          </div>
          <div className="key--letter" data-char="H" onClick={onClick}>
            {language.c7}
          </div>
          <div className="key--letter" data-char="J" onClick={onClick}>
            {language.c8}
          </div>
          <div className="key--letter" data-char="K" onClick={onClick}>
            {language.c9}
          </div>
          <div className="key--letter" data-char="L" onClick={onClick}>
            {language.c10}
          </div>
          <div className="key--double" data-key="186">
            <div>:</div>
            <div>;</div>
          </div>
          <div className="key--double" data-key="222">
            <div>"</div>
            <div>'</div>
          </div>
          <div className="key--bottom-right key--word key--w5" data-key="13">
            <span>return</span>
          </div>
        </div>
        <div className="keyboard__row">
          <div className="key--bottom-left key--word key--w6" data-key="16">
            <span>shift</span>
          </div>
          <div className="key--letter" data-char="Z" onClick={onClick}>
            {language.d2}
          </div>
          <div className="key--letter" data-char="X" onClick={onClick}>
            {language.d3}
          </div>
          <div className="key--letter" data-char="C" onClick={onClick}>
            {language.d4}
          </div>
          <div className="key--letter" data-char="V" onClick={onClick}>
            {language.d5}
          </div>
          <div className="key--letter" data-char="B" onClick={onClick}>
            {language.d6}
          </div>
          <div className="key--letter" data-char="N" onClick={onClick}>
            {language.d7}
          </div>
          <div className="key--letter" data-char="M" onClick={onClick}>
            {language.d8}
          </div>
          <div className="key--double" data-key="188">
            <div>&lt;</div>
            <div>,</div>
          </div>
          <div className="key--double" data-key="190">
            <div>&gt;</div>
            <div>.</div>
          </div>
          <div className="key--double" data-key="191">
            <div>?</div>
            <div>/</div>
          </div>
          <div className="key--bottom-right key--word key--w6" data-key="16-R">
            <span>shift</span>
          </div>
        </div>
        <div className="keyboard__row keyboard__row--h3">
          <div
            className="key--double key--right key--space"
            data-key="32"
            data-char=" "
            onClick={onClick}
          >
            &nbsp;
          </div>

          <div onClick={changeLanguage} className="change-language">
            <span>{engilsh ? "en" : "ar"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardWrapper;
