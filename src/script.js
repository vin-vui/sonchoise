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

document.getElementById('newsletter-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    
    const response = await fetch('/.netlify/functions/sendinblue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
  
    if (response.ok) {
      alert('Merci de vous être inscrit·e à notre newsletter !');
    } else {
      alert('Erreur lors de l\'inscription. Veuillez réessayer.');
    }
  });
  