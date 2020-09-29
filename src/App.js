
import React, { useEffect, useState } from 'react';
import {useSpring, animated} from 'react-spring';
import { CircularProgressbar, 
         CircularProgressbarWithChildren, 
         buildStyles
        } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './App.css';

function App() {


  return (
      <animated.div style={props}>
        <div className="container">
          <div className="box">
          </div>
          <div className="wrapper-shadow">
            <div className="wrapper">
              <CircularProgressbarWithChildren
                  value={progress}
                  text={`${price}$`}
                  strokeWidth={10}
                  background={true}
                  styles={{
                    path: {
                      stroke: `#7938ba`,
                      strokeLinecap: 'round',
                      // Customize transition animation
                      transition: 'stroke-dashoffset 0.5s ease 0s',
                      // Rotate the path
                      transform: 'rotate(0.0turn)',
                      transformOrigin: 'center center',
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                      stroke: '#1b1c34',
                      strokeLinecap: 'round',
                      // Rotate the trail
                      transform: 'rotate(0.25turn)',
                      transformOrigin: 'center center',
                    },
                    // Customize the text
                    text: {
                      // Text color
                      fill: 'rgb(108, 82, 164)',
                      // Text size
                      fontSize: '22px',
                    },
                    // Customize background - only used when the `background` prop is true
                    background: {
                      fill: '#FFF',
                    },
                  }}>
                    <div style={{ width: "100%" }}>
                      <CircularProgressbarWithChildren strokeWidth={0.2} styles={buildStyles({ pathColor: "rgb(25, 31, 52, 1)", trailColor: "rgb(25, 31, 52, 0.5)"})}>
                        <div style={{ width: "70%" }}> 
                          <CircularProgressbar strokeWidth={1} styles={buildStyles({pathColor: "rgba(121, 56, 186, 0.05)"})}/>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                  </CircularProgressbarWithChildren>   
            </div>
          </div>
        </div>
      </animated.div>
  );
}

export default App;