import fetch from 'node-fetch';

export async function handler(event, context) {

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Requête invalide, aucun corps trouvé." })
    };
  }
  
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
}
