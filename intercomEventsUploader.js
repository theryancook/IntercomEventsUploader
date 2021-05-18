const fetch = require('node-fetch');

const postArrayOfEvents = [];

const postInteromEvent = eventData => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <<TOKEN HERE>>',
        'Accept': 'application/json',
      },
      body: JSON.stringify(eventData),
    };
    return fetch('https://api.intercom.io/events', requestOptions);
  } catch (error) {
    console.error(error);
  }
};
const fireEvents = async () => {
  try {
    const promises = postArrayOfEvents.map(postInteromEvent);
    await Promise.all(promises);
    return console.log('success');
  } catch (error) {
    console.error(error);
  }
};
fireEvents();
