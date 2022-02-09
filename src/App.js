import React from 'react';
import alloy from '@alloyidentity/web-sdk';
import './App.css';

const alloyInitParams = {
  key: '028d85e0-aa24-4ca1-99f2-90e3ee3f4e6b',
  // entityToken: 'P-nCLYNtmujqr9ZPwQ0C9S',
  // externalEntityId: 'P-nCLYNtmujqr9ZPwQ0C9S',
  documents: ['license', 'passport'],
  selfie: true,
  evaluationData: {
    nameFirst: 'John',
    nameLast: 'Beta',
    addressLine1: 'Address Line 1. C - left door',
    addressLine2: 'Secondary address. 2ºB',
    addressCity: 'City address',
    addressState: 'TX',
    addressPostalCode: '+419550',
    addressCountryCode: 'VI',
    birthDate: '2020-03-03',
  },
  // color: { primary: '#CD7D2D', secondary: '#862633' }
  // forceMobile: true
};
alloy.init(alloyInitParams);

function App() {
  // Callback
  const callback = data => {
    console.log(data);
  };

  const onOpen = () => {
    const anchorElementSelected = document.getElementById('anchors');
    const anchorElement =
      anchorElementSelected.options[anchorElementSelected.selectedIndex].value;
    // The "open" function, allows the use of an optional parameter to mount the alloy modal inside a div identified by its ID or class name.
    // If not specified, it'll be absolute positioned in the middle of the document.
    alloy.open(callback, anchorElement);
  };

  const onClose = () => {
    alloy.close();
  };

  return (
    <>
      <div className="App">
          <div className="buttonContainer">
            <select name="anchors" id="anchors">
              <option value={undefined}>No anchor</option>
              <option value="anchorElementContainer1">Left anchor</option>
              <option value="anchorElementContainer2">Right anchor</option>
              <option value="anchorElementContainer3">Bottom anchor</option>
            </select>
            <button onClick={onOpen}>Open</button>
            <button onClick={onClose}>Close</button>
          </div>
          <div className="anchorContainer">
            <div className="anchorElementContainer1">(ID: anchor1)</div>
            <div className="anchorElementContainer2">(className: anchor2)</div>
            <div className="anchorElementContainer3">(className: anchor3)</div>
          </div>
        </div>
    </>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
