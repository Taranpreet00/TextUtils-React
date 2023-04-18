import React , {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert('Converted to Uppercase', 'success');
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert('Converted to Lowercase', 'success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = () => {
        setText("");
        props.showalert('Text Cleared', 'success');
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showalert('Copied text to clipboard', 'success');
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showalert('Extra spaces removed', 'success');
    }

    const [text, setText] = useState('Enter text here');
    var words = text.split(' ');
    if(words[words.length-1] === ''){
        words.pop();
    }
  return (
    <>
        <div className="container">
            <h1 className={`text-${props.mode === 'dark'? 'light': 'dark'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{background: props.mode==='dark'? '#495057': 'white', color: props.mode === 'dark'? 'white': 'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className={`container my-2 text-${props.mode === 'dark'? 'light': 'dark'}`}>
            <h2>Your Text Summary</h2>
            <p>{words.length} words and {text.length} characters</p>
            <p>{0.008 * words.length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text : 'Enter something to see preview'}</p>
        </div>
    </>
    
  )
}
