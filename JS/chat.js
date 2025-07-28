//chargement de la page 

document.addEventListener('DOMContentLoaded', () => {

// recuperation des elements html
  const chatToggle = document.getElementById('chat-toggle');
  const chatPopup = document.getElementById('chat-popup');
  const chatClose = document.getElementById('chat-close');
  const convoListEl = document.getElementById('conversation-list');
  const msgsContainer = document.getElementById('messages-container');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const searchInput = document.getElementById('search-conversations');

  if (!chatToggle || !chatPopup) return;
// la liste des conversation
  let convos = JSON.parse(localStorage.getItem('convos') || '[]');
  let activeId = null;

  function save() {
    localStorage.setItem('convos', JSON.stringify(convos));
  }


  // Affichage de la liste des conversation

  function renderConvos(list = convos) {
    convoListEl.innerHTML = '';
    list.forEach(c => {
      const li = document.createElement('li');
      li.textContent = c.name;
      li.dataset.id = c.id;
      if (c.id === activeId) li.classList.add('active');
      li.addEventListener('click', () => {
        activeId = c.id;
        renderConvos();
        renderMessages();
      });
      convoListEl.appendChild(li);
    });
  }


// Affichage des message
  function renderMessages() {
    msgsContainer.innerHTML = '';
    if (!activeId) return;
    const convo = convos.find(c => c.id === activeId);
    if (!convo) return;
    convo.messages.forEach(m => {
      const div = document.createElement('div');
      div.className = 'message ' + (m.from === 'me' ? 'me' : 'you');
      div.innerHTML = `<span class="text">${m.text}</span><span class="time">${m.time || ''}</span>`;
      msgsContainer.appendChild(div);
    });
    msgsContainer.scrollTop = msgsContainer.scrollHeight;
  }

  // Init conversations si vide
  if (convos.length === 0) {
    users.forEach(user => {
      convos.push({
        id: user.id,
        name: user.name,
        messages: conversations[user.id] ? [...conversations[user.id]] : []
      });
    });
    activeId = convos[0].id;
    save();
  } else {
    activeId = convos[0].id;
  }

  renderConvos();
  renderMessages();
// Ouverture et fermeture du popup
  chatToggle.addEventListener('click', () => {
    chatPopup.classList.toggle('active');
  });
  chatClose.addEventListener('click', () => {
    chatPopup.classList.remove('active');
  });


  
  //Envoi dU message

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text || !activeId) return;
    const convo = convos.find(c => c.id === activeId);
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    convo.messages.push({ from: 'me', text, time });
    save();
    renderMessages();
    input.value = '';
  });

  // Recherche conversation
 searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm === "") {
    renderConvos(); // Affiche tout si champ vide
    return;
  }

  const filteredConvos = convos.filter(c => {
    const parts = c.name.toLowerCase().split(' '); // découpe prénom et nom
    const firstName = parts[0] || '';
    const lastName = parts.slice(1).join(' ') || ''; // tout ce qui reste après prénom

    return firstName.startsWith(searchTerm) || lastName.startsWith(searchTerm);
  });

  renderConvos(filteredConvos);
});
});
