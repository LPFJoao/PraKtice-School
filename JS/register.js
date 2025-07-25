export function initRegisterPopup() {

  const existingModal = document.getElementById("register");
  if (existingModal) {
    setupPopupEvents();
    return;
  }

  
  fetch('../html/register.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load popup content.');
      }
      return response.text();
    })
    .then(html => {
      
      const temp = document.createElement('div');
      temp.innerHTML = html;

      
      const container = temp.querySelector('#register-container');
      if (!container) throw new Error('register-container not found in register.html');
      document.body.appendChild(container);


      
      setupPopupEvents();
    })
    .catch(err => {
      console.error('Error loading popup:', err);
    });
}

function setupPopupEvents() {
  const openBtn = document.getElementById("openRegister");
  const closeBtn = document.getElementById("closeRegister");
  const overlay = document.getElementById("register-overlay");
  const modal = document.getElementById("register");
  const submitRegister = document.getElementById("submitRegister");
  const container = document.getElementById("register-container");

  if (!openBtn || !closeBtn || !modal || !overlay || !submitRegister  || !container) {
    console.warn("Popup elements not found");
    return;
  }

  openBtn.addEventListener("click", () => {
    container.classList.add('open');
  });
  
  closeBtn.addEventListener("click", () => {
    container.classList.remove('open');
  });

  overlay.addEventListener("click", () => {
    container.classList.remove('open');
  });


  

}   