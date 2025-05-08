import React, { useState } from 'react';

export default function Textarea(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handlespaces = () => {
        // Remove extra spaces between words and trim leading/trailing spaces
        let newText = text.split(/\s+/).join(" ").trim();
        setText(newText);
    };
    
    const clear = () => {
        let newtext = "";
        setText(newtext);
    };

    const extractGmailAddresses = () => {
        const gmailRegex = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/g;
        const gmailAddresses = text.match(gmailRegex);
        setGmailAddresses(gmailAddresses || []);
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text); // Copy text to clipboard
        alert("Text copied to clipboard!");
        highlightTextarea(); // Call the highlight function
    };

    const highlightTextarea = () => {
        const textarea = document.getElementById('myBox');
        const originalBgColor = textarea.style.backgroundColor; // Store the original color

        // Change the background color to highlight
        textarea.style.backgroundColor = '#90EE90'; // Light green or any highlight color

        // Reset the background color after 1 second
        setTimeout(() => {
            textarea.style.backgroundColor = originalBgColor; // Reset to original
        }, 1000);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('');
    const [gmailAddresses, setGmailAddresses] = useState([]);

    // Conditional styling based on mode
    const textareaStyle = {
        backgroundColor: props.mode === 'dark' ? '#333' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black',
    };

    return (
        <>
            <div>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={textareaStyle}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handlespaces}>Trim</button>
                <button className="btn btn-primary mx-2 my-2" onClick={extractGmailAddresses}>Extract Gmail Addresses</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary mx-2 my-2" onClick={clear}>Clear Text</button>
                </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <p>Number of words: {text.split(/\s+/).filter((word) => word !== "").length}</p>
                <p>Number of characters: {text.length}</p>
                <h3>Preview Text</h3>
                <p>{text.length > 0 ?text: " "}</p> 
                {/* ternary operator is used to check if length of text is 0 then show nothing in preview text
                 */}

                <h3>Extracted Gmail Addresses</h3>
                {gmailAddresses.length > 0 ? (
                    <ul>
                        {gmailAddresses.map((email, index) => (
                            <li key={index}>{email}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No Gmail addresses found.</p>
                )}
            </div>
        </>
    );
}
