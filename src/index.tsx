import './style.css';
import { useState, useEffect } from 'react';
import React from 'react';

interface Props {
    name: string;
    color: string;
    style: object;
    description: string;
  }

const HeartIcon = ({ size = '5px', color = 'white' }) => (
  <svg height={size} width={size} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000000">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path fill="#000000" d="M373.597,29.736c-0.938,0-1.856,0.009-2.795,0.03C313.675,30.864,276.726,59.028,256,93.182 c-20.726-34.154-57.675-62.318-114.802-63.416c-0.928-0.021-1.866-0.03-2.796-0.03c-38.566,0-73.559,15.465-98.518,43.538 C13.797,102.626,0,143.789,0,192.309c0,95.273,76.404,153.378,150.284,209.566c28.513,21.684,57.975,44.098,83.483,68.688 l1.138,1.547c5.062,6.24,12.419,9.904,20.296,10.134l0.8,0.02l0.838-0.02c7.847-0.24,15.186-3.894,20.247-10.114l1.158-1.578 c25.498-24.59,54.97-47.003,83.473-68.678C435.596,345.687,512,287.583,512,192.309C512,96.586,455.083,29.736,373.597,29.736z M371.391,357.748c-37.12,28.952-78.172,57.866-113.654,92.099c-0.689,0.668-1.248,1.238-1.747,1.777 c-0.519-0.549-1.018-1.088-1.726-1.777c-47.303-45.615-104.52-81.895-149.116-121.202c-22.313-19.618-41.412-39.904-54.79-62.088 c-13.378-22.204-21.184-46.164-21.215-74.248c0.02-44.228,12.81-77.493,32.528-99.677c19.757-22.164,46.573-33.705,76.733-33.764 l2.237,0.03c33.775,0.708,57.835,12.67,75.017,29.681c17.132,17.022,27.165,39.556,30.77,60.99 c0.788,4.682,4.821,8.097,9.574,8.097c4.752,0,8.785-3.414,9.574-8.097c3.604-21.434,13.638-43.967,30.77-60.99 c17.181-17.012,41.242-28.973,75.017-29.681l2.236-0.03c30.161,0.059,56.976,11.6,76.735,33.764 c19.717,22.184,32.507,55.449,32.526,99.677c-0.03,28.084-7.837,52.044-21.215,74.248 C441.605,299.833,408.54,328.815,371.391,357.748z">
      </path>
    </g>
  </svg>
);

const CloseIcon = ({ size = '5px', color = 'white' }) => (
  <svg height={size} width={size} fill="#000000" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> 
    <title>close</title> 
    <path d="M8.48 16l5.84-5.84c0.32-0.32 0.32-0.84 0-1.2-0.32-0.32-0.84-0.32-1.2 0l-5.84 5.84-5.84-5.84c-0.32-0.32-0.84-0.32-1.2 0-0.32 0.32-0.32 0.84 0 1.2l5.84 5.84-5.84 5.84c-0.32 0.32-0.32 0.84 0 1.2 0.16 0.16 0.4 0.24 0.6 0.24s0.44-0.080 0.6-0.24l5.84-5.84 5.84 5.84c0.16 0.16 0.36 0.24 0.6 0.24 0.2 0 0.44-0.080 0.6-0.24 0.32-0.32 0.32-0.84 0-1.2l-5.84-5.84z">
    </path> 
    </g>
  </svg>
);

function WebsiteWidget({name, color, style, description}:Props) {
  const [showModal, setShowModal] = useState(false);
  const path = `https://www.buymeacoffee.com/widget/page/${name}?description=${description}!&color=%23${color}`

  useEffect(() => {
    // code to run on component mount
    console.log('Modal component mounted');
  
    // code to run on component unmount
    return () => {
      console.log('Modal component unmounted');
    }
  }, []);

  return (
    <div style={style}>
      <div
        className="btn"
        onClick={() => setShowModal(!showModal)}
        style={{backgroundColor: `#${color}`}}
      >
        {showModal ? <CloseIcon size='25px'/> : <HeartIcon size='25px'/>}
      </div>
      {showModal ? (
        <>
          <div className="box">
            <iframe
              className="frame"
              src={path}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

WebsiteWidget.defaultProps = {
    name: 'kalanakt',
    description: 'Buy Me a Coffee',
    color: "#FF813F" // default - color="#FF813F" available - color="#BD5FFF", color="#5F7FFF", color="#40DCA5", color="#FF5F5F"
  };

export default WebsiteWidget;


