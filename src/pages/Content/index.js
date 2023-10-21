import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

const pageContent = document.body.innerText;

// console.log('pageContent', pageContent);

// Save data to local storage
localStorage.setItem('pageContent', pageContent);

// // Optional: Log to console for verification
// console.log('Saved to local storage: ', localStorage.getItem('pageContent'));

const storedValue = localStorage.getItem('pageContent');
console.log('Retrieved from local storage: ', storedValue);

chrome.runtime.sendMessage(
  {
    type: 'PAGE_CONTENT',
    pageContent: pageContent,
  },
  (response) => {
    console.log('Received response:', response);
  }
);

// chrome.storage.local.set({ pageContent: 'pageContent' }, function () {
//   console.log('Value is set to ' + pageContent);
// });

// chrome.storage.local.set({ key: 'value' }, function () {
//   console.log('Value is set to "value"');
// });

// setInterval(() => {
//   console.log('pageContent', 'hiiiiiiii');
// }, 1000);

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.type === 'GET_PAGE_CONTENT') {
//     console.log('Received page content:', request.content);
//     chrome.runtime.sendMessage(
//       {
//         type: 'PAGE_CONTENT',
//         pageContent,
//       },
//       (response) => {
//         console.log('Received response:', response);
//       }
//     );
//     return true;
//   }
//   // ... your existing code ...
// });
