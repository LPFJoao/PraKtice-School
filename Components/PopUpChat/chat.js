
  // Add event
  function openAddEvent() {
      alert('Fonctionnalité à venir: Ajouter un nouvel événement');
  }

  const users = [
    { id: 1, name: "Sambeau Prak" },
    { id: 2, name: "Alexendre Bapek" },
    { id: 3, name: "Hajer Ben salah" },
    { id: 4, name: "Joao Silva" },
    { id: 5, name: "Rayan Haj Mohamed" },
    { id: 6, name: "Atmani Akila" },
    { id: 7, name: "Souha Kibboua" }
  ];

  const conversations = {
    1: [{ from: "other", text: "Bonjour, besoin d'aide ?", time: "09:30" }],
    2: [{ from: "other", text: "As-tu fait l'exo 4 ?", time: "14:45" }],
    3: [{ from: "other", text: "Je serai en retard tu peux le dire à Sambeau ?", time: "08:00" }],
    4: [{ from: "other", text: "J'ai oublié mon casque, tu peux me le ramener ?", time: "16:40" }],
    5: [{ from: "other", text: "J'ai toujours pas reçu mon contrat, toi aussi ?", time: "14:05" }],
    6: [{ from: "other", text: "Bonjour, tu peux push ta partie ?", time: "15:15" }],
    7: [{ from: "other", text: "Coucou t'as fini ?", time: "17:02" }]
  };
  // Initialize on load et chat flottant

document.addEventListener('DOMContentLoaded', () => {

    // === Chat flottant ===
    const chatToggle = document.getElementById('chat-toggle');
    const chatPopup = document.getElementById('chat-popup');
    const chatClose = document.getElementById('chat-close');
    const convoListEl = document.getElementById('conversation-list');
    const msgsContainer = document.getElementById('messages-container');
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-input');

    if (!chatToggle || !chatPopup) return;

    let convos = JSON.parse(localStorage.getItem('convos') || '[]');
    let activeId = null;

    function save() {
      localStorage.setItem('convos', JSON.stringify(convos));
    }
    function renderConvos() {
      convoListEl.innerHTML = '';
      convos.forEach(c => {
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
    function renderMessages() {
      msgsContainer.innerHTML = '';
      if (!activeId) return;
      const convo = convos.find(c => c.id === activeId);
      if (!convo) return;
      convo.messages.forEach(m => {
        const div = document.createElement('div');
        div.className = 'message ' + (m.from === 'me' ? 'me' : 'you');
        div.textContent = m.text;
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

    chatToggle.addEventListener('click', () => {
      chatPopup.classList.toggle('active');
    });
    chatClose.addEventListener('click', () => {
        
      chatPopup.classList.remove('active');

    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text || !activeId) return;
      const convo = convos.find(c => c.id === activeId);
      convo.messages.push({ from: 'me', text });
      save();
      renderMessages();
      input.value = '';
    });
});
