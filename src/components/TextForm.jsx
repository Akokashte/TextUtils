import React, { useState } from "react";

const TextForm = (props) => {

  //convert toUppercase
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + tessxt);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }

  // convert to lowercase
  const handleLowClick = () => {
    // console.log("Uppercase was clicked" + tessxt);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success");
  }

  const handleOnChange = (event) => {
    // console.log("handleOnChange was clicked");
    setText(event.target.value);
  }

  // to reverse the text
  const handleReverse = () => {
    const newText = (Array.from(text).reverse()).toString().replaceAll(',', '');
    setText(newText)
     props.showAlert("Reversed entered text","success");
  }

  // clear the text box
  const clearClick = () => {
    setText('')
     props.showAlert("Cleared entered text","success");
  }

  // capitalize the first letter of text
  const capClick = () => {
    const tempText = text.split(" ");

    let newText = tempText.map((curText)=>{
      let lower = curText.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    });
    setText(newText.toString().replaceAll(',',' '));
     props.showAlert("Capitalized entered text","success");
  }

  // to copy the text from text box
  const copyText = () => {
    let text = document.getElementById('myBox');
    text.select()
    navigator.clipboard.writeText(text.value);
     props.showAlert("Text copied to clipboard","success");
  }

  // to remove extra spaces from text
  const remSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
 props.showAlert("Removed extra spaces","success");
  }

  // here text is a state variable and setText is a function to update the state variable.
  const [text, setText] = useState('');
  // text = "text" wrong way to change state
  console.log(useState("Enter text here"))
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}  >
        <div className="container" >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
          </div>
          <button className="btn btn-primary mx-1 mb-2" onClick={handleUpClick}>Convert to Uppercase </button>
          <button className="btn btn-primary mx-1 mb-2" onClick={handleLowClick}>Convert to Lowercase </button>
          <button className="btn btn-primary mx-1 mb-2" onClick={handleReverse}>Reverse Text </button>
          <button className="btn btn-primary mx-1 mb-2" onClick={clearClick}>Clear Text </button>
          <button className="btn btn-primary mx-1 mb-2" onClick={capClick}>Capitalize Word </button>
          <button className="btn btn-primary mx-1 mb-2" onClick={copyText}>Copy Text</button>
          <button className="btn btn-primary mx-1 mb-2" onClick={remSpace}>Remove extra spaces</button>
        </div>
        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>{text === '' ? 0 : text.split(" ").filter((t) => t !== '').length} words and {text.length} characters</p>
          <p>{text === '' ? 0 : 0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
        </div>
      </div>
    </>
  )
}

export default TextForm;