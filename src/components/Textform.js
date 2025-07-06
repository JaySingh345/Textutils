import React,{useState} from 'react'


export default function Textform(props) {
    const handleupclick =() =>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert(" converted to uppercase" , 'success ');
    }
    
    const handlelowerclick =() =>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert(" converted to lowercase" , 'success ');
    }
    
    const handleclearclick =() =>{
        let newtext = ("");
        setText(newtext)
        props.showAlert(" text has been cleared" , 'success ');
    }
    
    const handletrimclick=()=>{
        let newtext = text.split(/\s+/).join(" ").trim();// \s refers to any white space character
        setText(newtext)
        props.showAlert(" extra spaces removed" , 'success ');
    }

    const handlecopyclick=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert(" copied to clipboard" , 'success ');
    }

    const handlechange =(event)=>{
        console.log("on Change")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    let mystyle ={
    color : props.mode === 'dark' ? 'white':'black',
    backgroundColor: props.mode === 'dark' ? '#242424' : props.mode === 'blue' ? '#787cff' : props.mode === 'green' ? '#1f7d27' : 'white'}

    return (
        <>
            <div className='container' style={mystyle}>
                <h1>{props.heading}</h1>
                <div className="form"  style={mystyle}>
                    <textarea className="form-control" value = {text} onChange={handlechange} style={mystyle} id="myBox" rows = "8"></textarea>
                </div>
                <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-2"  onClick={handlelowerclick}>convert to lowercase</button>
                <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-2"  onClick={handletrimclick}>remove extra spaces</button>
                <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-2"  onClick={handleupclick}>convert to uppercase</button>
                <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-2"  onClick={handlecopyclick}>copy to clipboard</button>
                <button disabled={text.length=== 0} className="btn btn-danger my-3 mx-2"  onClick={handleclearclick}>clear</button>
            </div>
            <div className='container' style={mystyle}>
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