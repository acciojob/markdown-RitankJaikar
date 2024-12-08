import React from "react";
import { useState } from "react";
import "../styles/App.css";

export default function App() {
    const [text, setText] = useState("");

    return (
        <div className="app">
            <textarea className="textarea" onChange={e => setText(e.target.value)} value={text}>
            </textarea>
            <div className="preview">
                <div className="loading"></div>
                {text}
            </div>
        </div>
    )
}