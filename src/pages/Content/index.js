import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('in Content.js');
  if (request.type === 'GET_PAGE_CONTENT') {
    // sendResponse({ data: 'Test response from content script!' });
    sendResponse('hellow');
    return true;
  }
});
