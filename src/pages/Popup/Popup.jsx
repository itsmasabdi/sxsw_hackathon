import React from 'react';
import logo from '../../assets/img/logo.svg';
import Chat from '../../containers/Chat/Chat';
import './Popup.css';

const Popup = () => {
  const [number, setNumber] = React.useState(0);

  // document
  //   .getElementById('exampleButton')
  //   .addEventListener('click', async () => {
  //     const text = document.getElementById('inputText').value;
  //     const response = await chrome.runtime.sendMessage({
  //       type: 'CALL_OPENAI',
  //       prompt: text,
  //     });
  //     alert(response);
  //   });

  const root = document.getElementById('root');

  const onButtonClick = async () => {
    console.log('calling openAI');
    setNumber(number + 1);
    chrome.runtime.sendMessage({
      type: 'CALL_OPENAI',
      prompt: 'hey',
    });
    console.log(root);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>

        <button className="bg-red-500" onClick={onButtonClick}>
          Click me! {number}
        </button>
      </header>
    </div>
  );
};

export default Popup;
