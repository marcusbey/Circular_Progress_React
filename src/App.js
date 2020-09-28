
import React, { useEffect, useState } from 'react';
import { CircularProgressbar, 
         CircularProgressbarWithChildren, 
         buildStyles
        } from 'react-circular-progressbar';
import {CircleProgress} from 'react-gradient-progress'
import 'react-circular-progressbar/dist/styles.css';
import './App.css';



function App() {
  const [progress, setProgress] = useState(10)
  const [number, setNumber] = useState(10)



  return (
    
        <div className="container">
          <div className="wrapper">
            <CircularProgressbarWithChildren
                value={progress}
                text={`${number}$`}
                styles={{
                  root: {},
                  // Customize the path, i.e. the "completed progress"
                  path: {
                    // Path color
                    stroke: `#7938ba`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    transform: 'rotate(0.0turn)',
                    transformOrigin: 'center center',
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    stroke: '#1b1c34',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
                  // Customize the text
                  text: {
                    // Text color
                    fill: '#f88',
                    // Text size
                    fontSize: '25px',
                  },
                  // Customize background - only used when the `background` prop is true
                  background: {
                    fill: '#FFF',
                  },
                }}/>   
          </div>
        </div>
  );
}

export default App;