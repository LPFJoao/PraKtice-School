
document.addEventListener('DOMContentLoaded', () => {
  fetch('../html/chat2.html')
    .then(r => r.text())
    .then(html => {
      document.body.insertAdjacentHTML('beforeend', html);
      initChat();
    });

  function initChat() {
    const popup = document.getElementById('chat-popup');
    const toggle = document.getElementById('chat-toggle');
    const closeBtn = document.getElementById('chat-close');
    const convoListEl = document.getElementById('conversation-list');
    const msgsContainer = document.getElementById('messages-container');
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-input');

    
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
      convo.messages.forEach(m => {
        const div = document.createElement('div');
        div.className = 'message ' + (m.from === 'me' ? 'me' : 'you');
        div.textContent = m.text;
        msgsContainer.appendChild(div);
      });
      msgsContainer.scrollTop = msgsContainer.scrollHeight;
    }

    
    if (convos.length === 0) {
      convos.push({
        id: Date.now(),
        name: 'General',
        messages: [
          { from: 'you', text: 'Welcome to the intranet chat!' }
        ]
      });
      activeId = convos[0].id;
      save();
    } else {
      activeId = convos[0].id;
    }

    renderConvos();
    renderMessages();

    
    toggle.addEventListener('click', () => {
      popup.classList.toggle('active');
    });
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
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
  }
});
