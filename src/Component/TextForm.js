import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
       // console.log("djbuhrui" + text);
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to Upper Case" , "success");
  }

  const handleLoClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lower Case" , "success");

  }

  const handleClearClick = ()=>{
    let newtext = " ";
    setText(newtext);
    props.showAlert("Text has been cleared" , "success")
  }

  const handleInverseClick = ()=>{
    const convertString = str => [...str].map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
    setText(convertString(text));
    props.showAlert("Text has been inversed" , "success");
  }

  const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value);
  }
  const [text , setText] = useState('Enter Text Here');
 // text = "new text"; //wrong way to change the text
 // setText("new text"); //correct way to change the text
  return (
    <>
    <div className ="container" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className='mb-1'>{props.heading}</h1>
        <div className="mb-3">
        <label for="myBox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange = {handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? '#13466e' : 'white' , color:  props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
        </div> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to upperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleInverseClick}>Inverse Text</button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
    </>
  )
}


