// functions/sendinblue.js
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const { email } = JSON.parse(event.body);

  const response = await fetch('https://api.sendinblue.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.SENDINBLUE_API_KEY
    },
    body: JSON.stringify({
      email: email,
      listIds: [3]
    })
  });

  if (response.ok) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Inscription réussie !' })
    };
  } else {
    return {
      statusCode: response.status,
      body: JSON.stringify({ message: 'Erreur lors de l\'inscription.' })
    };
  }
};
