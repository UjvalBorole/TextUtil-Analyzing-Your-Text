import React, { useState } from 'react'


export default function TextForm (props){
    const [text,setText] = useState('Enter text here');

    const handleUpClick = ()=>{
        // console.log("Upercase was Clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to UpperCase ","success");
    }
    const handleLowClick = ()=>{
       
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to LowerCase ","success");

    }

    const RemoveAll = ()=>{
       
        props.showalert("Removing all text","success");
        setText("");
    }

    const handleOnChange = (e)=>{
        // console.log("On Change");
        setText(e.target.value);
    }

    const handleCopy= ()=>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);  //to copy the item to the clipboard and paste the data to other place
        props.showalert("The Text has been Copied","success");
    }

    //removing the extra spaces
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);//use regex in this place, if 1 or more space is there then
        setText(newText.join(" "))  //this function is removed the extra spaces
        props.showalert("Removing the white spaces","success");

    }

    return(
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h3>{props.heading}</h3>
            <div className="mb">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white',color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Upercase</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy this</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}>Removing Extra spaces</button>
            <button className="btn btn-primary my-3 mx-3" onClick={RemoveAll}>Remove All</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Your Text Summery</h1>
            <p>{(text.split(" ").filter((element)=> {return element.length!==0}).length)} words and {text.length} char</p>
            <p>{0.008 * (text.split(" ").length)} Minutes read</p>
            <h3>Preview</h3> 
            <p>{text.length>0? text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
}
