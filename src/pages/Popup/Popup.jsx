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
      <Chat />
    </div>
  );
};

export default Popup;
