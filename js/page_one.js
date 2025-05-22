// ➤ Animation douce sur les images de produits
document.querySelectorAll('.col4 img').forEach(img => {
    img.style.transition = 'transform 0.3s ease';
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// ➤ Popup de cookies
const cookiePopup = document.createElement('div');
cookiePopup.innerHTML = `
    <div id="cookie-banner" style="
        position: fixed; bottom: 20px; left: 20px; right: 20px;
        background: #2c3e50; color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        display: flex; justify-content: space-between; align-items: center;
        z-index: 1000;
        font-family: sans-serif;
        max-width: 600px;
 margin: auto;
    ">
        <div>
            Ce site utilise des cookies pour améliorer votre expérience. <br>
            <small>En continuant, vous acceptez notre politique de confidentialité.</small>
        </div>
        <button id="accept-cookies" style="
            background: #e74c3c;
            border: none;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 15px;
        ">Accepter</button>
    </div>
`;
document.body.appendChild(cookiePopup);

// ➤ Gestion du clic sur "Accepter"
document.getElementById('accept-cookies').onclick = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
};

// ➤ Afficher la popup si non acceptée
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'none';
    }
});