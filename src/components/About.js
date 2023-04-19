// import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    // const [btntext, setbtntext] = useState('Enable dark mode');

    // const toggle = () => {
    //     if(myStyle.color === 'white'){
    //         setbtntext('Enable dark mode');
    //         setmyStyle({color: 'black', backgroundColor: 'white'});
    //     }
    //     else{
    //         setbtntext('Enable Light mode');
    //         setmyStyle({color: 'white', backgroundColor: 'black'});
    //     }
        
    // }

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark'? '#2d5264' : 'white'
    }

  return (
    <div className="container" style = {myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or the minutes in which text may be read.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}> 
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2> 
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This word counter software works in any web browsers such as Chromre, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div> 
        </div>
        {/* <div className="container my-3">
            <button type="button" onClick={toggle} className="btn btn-primary">{btntext}</button>
        </div> */}
    </div>
  )
}
