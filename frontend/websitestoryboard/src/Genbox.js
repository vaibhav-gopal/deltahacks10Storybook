import React, { useState } from 'react';
import "./gen.css"
import Slide from './Slide.js';
import FlipCard from './Flipcard.jsx';



function FlashcardsComponent() {
  return (
   
      <FlipCard question="What is the capital of France?" answer="Paris" /> 
    

  );
}

function StorybookComponent() {
  const [images,setimages] = useState(['./logo192.png','./logo512.png']); 
  return (
    
      <div className='storybook'>
           <Slide images={images} />
      </div>
      
  );
}

function AdditionalResourcesComponent() {
  return (
      <div className='resources'>Additional Resources Component</div>
  );
}

function BoxToggleComponent() {
  const [selectedComponent, setSelectedComponent] = useState('Storybook');

  function handleComponentChange(component) {
    setSelectedComponent(component);
  }

  function handlegen(genfunction) {
    console.log(genfunction);
  }

  function renderSelectedComponent() {
    switch (selectedComponent) {
      case 'Flashcards':
        return <FlashcardsComponent />;
      case 'Storybook':
        return <StorybookComponent />;
      case 'AdditionalResources':
        return <AdditionalResourcesComponent />;
      default:
        return null;
    }
  }

  return (
    <div className="card" style={{ marginLeft: '2%' }}>
      <div className='display'>
        {renderSelectedComponent()}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => handlegen("Generate")}>Generate</button>
        <button onClick={() => handleComponentChange('Flashcards')}>Flashcards</button>
        <button onClick={() => handleComponentChange('Storybook')}>Storybook</button>
        <button onClick={() => handleComponentChange('AdditionalResources')}>Additional Resources</button>
      </div>
    </div>
  );
}

export default BoxToggleComponent;
