const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');

burgerMenu.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('closed');
    } else {
        mobileMenu.classList.remove('closed');
        mobileMenu.classList.add('open');
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('closed');
        mobileMenu.classList.remove('open');
    });
});

const apiKey = process.env.SENDINBLUE_API;

document.getElementById('newsletter-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const response = await fetch('https://api.sendinblue.com/v3/contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey
        },
        body: JSON.stringify({
            email: email,
            listIds: [3]
        })
    });
    if (response.ok) {
        alert('Merci de vous être inscrit à notre newsletter !');
    } else {
        alert('Erreur lors de l\'inscription. Veuillez réessayer.');
    }
});