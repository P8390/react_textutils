import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const clearText = () => {
        setText('')
    }

    const copyText = () => {
        let text = document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpCase}>Convert to Upppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowerCase}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={clearText}>ClearText</button>
            <button className='btn btn-primary mx-2' onClick={copyText}>CopyText</button>
        </div>
        <div className='container' my-3="true">
            <h2>Your text summary</h2>
            <p>{text.length>0?text.split(" ").length:0} words and {text.length} characters</p>
            <p>{text.length>0?0.3 * text.split(" ").length:0} minutes to read</p>
            <h2>Text Preview</h2>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>
        </>
    )
}
