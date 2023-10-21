import secrets from 'secrets';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'CALL_OPENAI') {
    callOpenAI(message.prompt).then(sendResponse);
    return true; // Indicates that the response will be sent asynchronously.
  }
});

async function callOpenAI(prompt) {
  console.log('callOpenAI', prompt);

  const OPENAI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    Authorization: `Bearer ${secrets.API_KEY}`,
    'Content-Type': 'application/json',
  };

  const body = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'Your a helpful assistant that is completion my sentences for me.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    max_tokens: 50,
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
