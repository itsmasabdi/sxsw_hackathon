import secrets from 'secrets';

let pageContent = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'PAGE_CONTENT') {
    console.log('Received page content:', request);
    pageContent = request.pageContent;
  }
  // ... your existing code ...
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'CALL_OPENAI') {
    console.log('request', request);
    let system =
      "You're an assistant helping with my query with bellow property\n\n" +
      " If the user asked you to get the price for this, reply Sure I'll contact the agent and send you back an email with the details" +
      pageContent;
    console.log('system', system);
    callOpenAI(request.messages, system).then(sendResponse);
    return true; // Indicates that the response will be sent asynchronously.
  }
});

async function callOpenAI(messages, system = 'Your a helpful assistant') {
  // console.log('callOpenAI', prompt);

  const OPENAI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    Authorization: `Bearer ${secrets.API_KEY}`,
    'Content-Type': 'application/json',
  };

  const body = {
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: system,
      },
      ...messages,
    ],
    max_tokens: 256,
  };

  try {
    const response = await fetch(OPENAI_ENDPOINT, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log('OpenAI response', data);
    return (
      (data.choices && data.choices[0] && data.choices[0].message.content) || ''
    );
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    return 'Error';
  }
}
