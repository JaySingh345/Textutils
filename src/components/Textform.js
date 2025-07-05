import React,{useState} from 'react'


export default function Textform(props) {
    const handleupclick =() =>{
        console.log("uppercase was clicked"+ text)
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert(" converted to uppercase" , 'success ')
    }
    
    const handlelowerclick =() =>{
        console.log("lowercase was clicked"+ text)
        let newtext = text.toLowerCase();
        props.showAlert(" converted to lowercase" , 'success ')
        setText(newtext)
    }
    
    const handleclearclick =() =>{
        console.log("clear was clicked"+ text)
        let newtext = ("");
        setText(newtext)
        props.showAlert(" text has been cleared" , 'success ')
    }
    
    const handletrimclick=()=>{
        console.log("remove extra spaces clicked"+ text)
        let newtext = text.split(/\s+/).join(" ").trim();// \s refers to any white space character
        setText(newtext)
        props.showAlert(" extra spaces removed" , 'success ')
    }

    const handlechange =(event)=>{
        console.log("on Change")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="form"  style={{color: props.mode === 'dark'?'white':'#1f1e1e'}}>
                    <textarea className="form-control" value = {text} onChange={handlechange} style={{backgroundColor: props.mode === 'dark'?'#1f1e1e':'white' ,
                    color : props.mode === 'dark'?'white':'#1f1e1e' }} id="myBox" rows = "8"></textarea>
                </div>
                <button className="btn btn-primary my-3 "  onClick={handleupclick}>convert to uppercase</button>
                <button className="btn btn-primary my-3 mx-2"  onClick={handlelowerclick}>convert to lowercase</button>
                <button className="btn btn-primary my-3 mx-2"  onClick={handletrimclick}>remove extra spaces</button>
                <button className="btn btn-danger my-3 mx-2"  onClick={handleclearclick}>clear</button>
            </div>
            <div className='container' style={{color: props.mode === 'dark'?'white':'#1f1e1e'}}>
                <h2> your text summary</h2>
                <p>
                    word count = {wordCount} <br/>
                    character = {text.length}
                </p>
                <p>
                    {0.008 * wordCount} time taken by a average person to read the text
                </p>
                <h3> Preview </h3>
                <p> {text.length>0 ? text : "Enter the text to preview it here"} </p>
            </div>
        </>
  )
}