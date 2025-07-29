export function initLoginPopup() {

  const existingModal = document.getElementById("login");
  if (existingModal) {
    setupPopupEvents();
    return;
  }

  
  fetch('../PraKtice-School/html/login.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load popup content.');
      }
      return response.text();
    })
    .then(html => {
      
      const temp = document.createElement('div');
      temp.innerHTML = html;

      
      const container = temp.querySelector('#login-container');
      if (!container) throw new Error('login-container not found in login.html');
      document.body.appendChild(container);


      
      setupPopupEvents();
    })
    .catch(err => {
      console.error('Error loading popup:', err);
    });
}

function setupPopupEvents() {
  const openBtn = document.getElementById("openLogin");
  const closeBtn = document.getElementById("closeLogin");
  const overlay = document.getElementById("login-overlay");
  const modal = document.getElementById("login");
  const submitLogin = document.getElementById("submitLogin");
  const container = document.getElementById("login-container");
  const loginForm = document.getElementById("loginForm");
  const closeLoginDuplicate = document.getElementById("closeLoginDuplicate");

  if (!openBtn || !closeBtn || !modal || !overlay || !submitLogin  || !container || !loginForm || !closeLoginDuplicate) {
    console.warn("Popup elements not found");
    return;
  }

  openBtn.addEventListener("click", () => {
    container.classList.add('open');
  });

  closeBtn.addEventListener("click", () => {
    container.classList.remove('open');
  });

  closeLoginDuplicate.addEventListener("click", () => {
    container.classList.remove('open');
  });

  overlay.addEventListener("click", () => {
    container.classList.remove('open');
  });

  submitLogin.addEventListener("click", e => {
  e.preventDefault();               
  window.location.href = "../html/homedashboard.html";
});
  

}   
