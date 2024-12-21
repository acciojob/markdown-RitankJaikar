import React from "react";
import { useState } from "react";
import "../styles/App.css";

export default function App() {
    const [text, setText] = useState("");

    return (
        <div className='mark1'>
            <div className='preview'>
            <h1>Heading</h1><br></br><br></br><span>This is some <strong>bold</strong> text.</span>  
             <textarea onChange={changetext}>
            </textarea>   
            </div>
        </div>
    )
}