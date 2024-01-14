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

function BoxToggleComponent({flashcardContent}) {
  const [selectedComponent, setSelectedComponent] = useState('Storybook');

  function handleComponentChange(component) {
    setSelectedComponent(component);
  }

  function renderSelectedComponent() {
    switch (selectedComponent) {
      case 'Flashcards':
        return <FlashcardsComponent flashcardContent={flashcardContent}/>;
      case 'Storybook':
        return <StorybookComponent />;
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
        <button className = "flashcardButton" onClick={() => handleComponentChange('Flashcards')}>Flashcards</button>
        <button className = "storybookButton" onClick={() => handleComponentChange('Storybook')}>Storybook</button>
      </div>
    </div>
  );
}

export default BoxToggleComponent;
