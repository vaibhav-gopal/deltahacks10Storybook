import React, { useEffect, useState } from 'react';
import './Slide.css'; // Import your CSS file for styling

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
        <img src={image} />
        <div className='captions'>
            <p1>{story}</p1>
        </div>
      </div>
    </div>
  );
};

export default Slide;
