import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const  lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    let mystyle ={
    color : props.mode === 'dark' ? 'white':'black',
    backgroundColor: props.mode === 'dark' ? '#242424' : props.mode === 'blue' ? '#787cff' : props.mode === 'green' ? '#1f7d27' : 'white'
  }
  return (
    <div style={{height : '50px'}}>
    {props.alert && <div className={`alert alert-{props.alert.type} alert-dismissible fade show` } style={mystyle} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>{props.alert.msg}
    </div>}
    </div>
  )
}

export default Alert