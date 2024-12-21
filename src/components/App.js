import React from "react";
import { useState } from "react";
import "../styles/App.css";

export default function App() {
    const [text, setText] = useState("");

    return (
        <div className="app">
            <textarea className="textarea" onChange={e => setText(e.target.value)} value={text} placeholder="Enter markdown here...">
            </textarea>
            <div className="preview">
                <h1>Heading</h1><br></br><br></br><span>This is some <strong>bold</strong> text.</span>  
                <div className="loading"></div>
                <h1>{text}</h1>
            </div>
        </div>
    )
}