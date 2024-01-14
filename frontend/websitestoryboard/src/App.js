import './App.css';
import React from 'react';
import { useState } from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import BoxToggleComponent from './Genbox.js';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";


<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200;0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;0,8..60,800;0,8..60,900;1,8..60,200;1,8..60,300;1,8..60,400;1,8..60,500;1,8..60,600;1,8..60,700;1,8..60,800;1,8..60,900&display=swap" rel="stylesheet"></link>

function App() {
  // new stuff --------------
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
      successDuration:9999999999999999999999999999999999999999999999999999999999999999999999999999999
  });

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  // -------------------------

  const [pendingGenerate, setPendingGenerate] = useState(false);
  const [flashcardContent, setFlashcardContent] = useState();

  async function handlegen() {
    setPendingGenerate(true);

    console.log("Attempting to update information")
    let response = await fetch('upload', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"transcript":transcript})
    });
    if (response.ok) {
      console.log("Updated information")
    }else {
      console.log("FAILED TO UPDATE!")
    }

    console.log("Attempting to generate")
    response = await fetch('generate');
    if (response.ok) {
      console.log("Generated")
    }else {
      console.log("FAILED TO GENERATE!")
    }

    console.log("Attempting to get flashcards")
    response = await fetch('flashcards');
    if (response.ok) {
      console.log("Got Flashcards")
    }else {
      console.log("Failed to get flashcards")
    }
    setFlashcardContent(await response.json());

    setPendingGenerate(false);
  }

  return (
    <div className='wrapper'>
      <div className='nav'>
        <div className='logo'>
          <Logo></Logo>
          <div className='name'>
            <h1>Storyboard</h1>
          </div>
        </div>
      </div>

      <div className='header'>
        <div className='text'>
          <h2> - Learn new content easily </h2>
          <h1> Visual Story and Flashcard generator</h1>
          <p1>Visual learning has been shown to improve retention and understanding, with students exposed to visual aids alongside textual information performing 29% better on post-learning assessments compared to those receiving only text.</p1>
        </div>
        <div className='recordbtn' onClick={startListening}> <h3>Start Recording Now </h3></div>
      </div>

      
      <div className='transcript'>
        <textarea className="multiline-textbox" value={transcript} onClick={() => setTextToCopy(transcript)} placeholder='Type, transcribe or edit here, click generate once complete to see your results....'>
        </textarea>


        <div className="btn-style">
            <button onClick={setCopied}>
                {isCopied ? 'Copied!' : 'Copy to clipboard'}
            </button>
            <button onClick={startListening}>Start Listening</button>
            <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
            
        </div>
        <div className='genbtn' onClick={handlegen}><h3>Generate</h3></div>
      </div>
      
      <BoxToggleComponent flashcardContent={flashcardContent}></BoxToggleComponent>
    </div>
  );

  
}

export default App;
