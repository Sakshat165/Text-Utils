import React, { useState } from 'react'

export default function Textform(props) {
    const low=()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
    }
    const up=()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
    }
    const clear=()=>
    {
        
        setText("");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      
    const textchange=(event)=>
    {
        console.log("change");
        setText(event.target.value);
    }
    const [text,setText]=useState("");
  return (
    <>
    <div className='container'>
        <div className={`mb-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h1>{props.header}</h1>
            <textarea className="form-control" value={text} onChange={textchange} id="box" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} me-2 my-1`} onClick={up}>Convert to UpperCase</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} me-2 my-1`} onClick={low}>Convert to LowerCase</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} me-2 my-1`} onClick={speak}>Speak Text</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} me-2 my-1`} onClick={clear}>Clear Text</button>

    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Text Summary</h1>
        {text.split(" ").length} words and {text.length} characters
    </div>
    </>
  )
}
