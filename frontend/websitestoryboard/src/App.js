import './App.css';
import React from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import { ReactComponent as Download } from './Download.svg';


<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200;0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;0,8..60,800;0,8..60,900;1,8..60,200;1,8..60,300;1,8..60,400;1,8..60,500;1,8..60,600;1,8..60,700;1,8..60,800;1,8..60,900&display=swap" rel="stylesheet"></link>

function App() {
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
          <h2> - All in One Meeting Scheduler</h2>
          <h1>Schedule meetings effortlessly</h1>
          <p1>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed</p1>
        </div>

        <div className='btncontainer'>
          <h3>Start Recording</h3>
        </div>

      </div>
      
      <div className='transcript'> 
          <textarea class="multiline-textbox" placeholder="Type here..."></textarea>
          <div style={{ width: "80%", display: "flex", justifyContent: "flex-end", textAlign: "center" }}>
              <p>Save PDF</p>
            <div className='btncontainer' style={{borderRadius: "100%", padding: "20px",background: "linear-gradient(135deg, #FFBFBC -143.73%, #EB5952 111.18%)"}}>
              <Download></Download>
            </div>
          </div>
          
      </div>
      


    </div>
  );

  
}

export default App;
