import React, { useEffect, useState } from 'react';
import "./gen.css"
import Slide from './Slide.js';
import FlipCard from './Flipcard.jsx';

function FlashcardsComponent({flashcardContent}) {
  function generateList() {
    if (!flashcardContent) return null;
    let listItems = flashcardContent.map(card => {
      return (<FlipCard question={card["Question"]} answer={card["Answer"]}/>);
    })
    return listItems;
  }

  return (
    <>
      {generateList()}
    </>
  );
}

function StorybookComponent() {
  return (
      <div className='storybook'>
        <Slide />
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
  const [flashcardContent, setFlashcardContent] = useState();
  const [pendingGenerate, setPendingGenerate] = useState(false);

  function handleComponentChange(component) {
    setSelectedComponent(component);
  }

  async function handlegen() {
    setPendingGenerate(true);

    let response = await fetch('generate');
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

  function renderSelectedComponent() {
    switch (selectedComponent) {
      case 'Flashcards':
        return <FlashcardsComponent flashcardContent={flashcardContent}/>;
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
        <button className = "generateButton" onClick={() => handlegen()}>Generate</button>
        <button className = "flashcardButton" onClick={() => handleComponentChange('Flashcards')}>Flashcards</button>
        <button className = "storybookButton" onClick={() => handleComponentChange('Storybook')}>Storybook</button>
        <button className = "resourcesButton" onClick={() => handleComponentChange('AdditionalResources')}>Additional Resources</button>
      </div>
    </div>
  );
}

export default BoxToggleComponent;
