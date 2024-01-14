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
      <div style={{ display: 'flex', justifyContent: "space-between", columnGap: "5vw", width: "20%", float: "right" ,marginTop:"4%", marginRight:"6%"}}>
        <div className={`flashcardButton ${selectedComponent === 'Flashcards' ? 'selected' : ''}`} onClick={() => handleComponentChange('Flashcards')}>
          <div style={{ textAlign: 'center', marginTop: "170%" }}>
            <span>Flashcards</span>
          </div>
        </div>
        <div className={`storybookButton ${selectedComponent === 'Storybook' ? 'selected' : ''}`} onClick={() => handleComponentChange('Storybook')}>
          <div style={{ textAlign: 'center', marginTop: "170%" }}>
            <span>Storybook</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxToggleComponent;
