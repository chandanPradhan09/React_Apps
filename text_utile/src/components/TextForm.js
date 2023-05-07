import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    if(text.length===0){
      return
    }
    setText(text.toUpperCase());
    props.showAlert("Converted Upper Case","success");
  };
  const handleLoClick = () => {
    if(text.length===0){
      return
    }
    setText(text.toLowerCase());
    props.showAlert("Converted Lower Case","success");
  };
  const handleCopyClick = () => {
    if(text.length===0){
      return
    }
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!","success");
  };
  const handleClearClick = () => {
    if(text.length===0){
      return
    }
    setText("");
    props.showAlert("Text Cleared!","success");
  };
  const handleExSpaceClick = () => {
    if(text.length===0){
      return
    }
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className='container my-3'>
        <h2>{props.heading}</h2>
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            onChange={handleOnChange}
            id='myBox'
            rows='9'
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className='btn btn-primary m-1' disabled={text.length===0} onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className='btn btn-primary m-1' disabled={text.length===0} onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className='btn btn-primary m-1' disabled={text.length===0} onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className='btn btn-primary m-1' disabled={text.length===0} onClick={handleClearClick}>
          Clear Text
        </button>
        <button className='btn btn-primary m-1' disabled={text.length===0} onClick={handleExSpaceClick}>
          Remove Extra Spaces
        </button>
      </div>
      <div className='container my-3'>
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters
        </p>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Nothing to Preview!" : text}</p>
      </div>
    </>
  );
}
