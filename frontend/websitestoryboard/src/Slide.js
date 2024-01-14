import React, { useEffect, useState } from 'react';
import './Slide.css'; // Import your CSS file for styling
import "./alt.jpg";


const Slide = () => {
  const [image, setimage] = useState('/data/images/panel.png'); 
  const [story, setStory] = useState('Something');

  async function getTranscript() {
    const response = await fetch('/data/storyboard.txt');
    const complete = await response.text();
    console.log(complete);
    setStory(complete);
  }

  useEffect(() => {
    getTranscript()
  }, [])

  return (
    <div className="slide-container">
      <div className="slide">
        <img src={image} style={{width:"100%",height:"400px", marginTop:"4%"}} alt="GENERATE IMAGE"/>
        <center>
        <div className='captions'>
            <p1>{story}</p1>
        </div>
        </center>
      </div>
    </div>
  );
};

export default Slide;
