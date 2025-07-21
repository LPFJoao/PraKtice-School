document.addEventListener("DOMContentLoaded", () => {
  const chatBtn = document.getElementById("chat-button");
  const chatPopup = document.getElementById("chat-popup");
  const closeBtn = document.getElementById("close-chat");
  const userList = document.getElementById("chat-users");
  const messagesDiv = document.getElementById("chat-messages");
  const sendBtn = document.getElementById("chat-send");
  const input = document.getElementById("chat-input");

  let currentUser = null;

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

  users.forEach(user => {
    const div = document.createElement("div");
    div.className = "user";
    div.innerHTML = `
      <div class="avatar">${user.name.charAt(0)}</div>
      <div class="user-info">
        <span class="name">${user.name}</span>
      </div>
    `;
    div.onclick = () => {
      document.querySelectorAll('.user').forEach(u => u.classList.remove('active'));
      div.classList.add('active');
      loadConversation(user.id, user.name);
    };
    userList.appendChild(div);
  });

  // Sélectionner automatiquement le premier utilisateur
  if (users.length > 0) {
    const firstUser = users[0];
    const firstUserDiv = userList.querySelector(".user");
    if (firstUser && firstUserDiv) {
      firstUserDiv.classList.add("active");
      loadConversation(firstUser.id, firstUser.name);
    }
  }

  //chatBtn.onclick = () => chatPopup.classList.remove("hidden");
  closeBtn.onclick = () => chatPopup.classList.add("hidden");

  function getCurrentTime() {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0') + ':' +
           now.getMinutes().toString().padStart(2, '0');
  }

  function displayMessage(msg) {
    const div = document.createElement("div");
    div.className = "message " + msg.from;
    div.innerHTML = `<span class="text">${msg.text}</span> <span class="time">${msg.time || ''}</span>`;
    messagesDiv.appendChild(div);
  }

  function loadConversation(userId, name) {
    currentUser = userId;
    messagesDiv.innerHTML = "";
    const conv = conversations[userId] || [];
    conv.forEach(displayMessage);
    scrollToBottom();
  }

  sendBtn.onclick = () => {
    const text = input.value.trim();
    if (!text || currentUser === null) return;

    if (!conversations[currentUser]) {
      conversations[currentUser] = [];
    }
    const msg = { from: "you", text, time: getCurrentTime() };
    conversations[currentUser].push(msg);

    displayMessage(msg);
    input.value = "";
    scrollToBottom();
  };

  function scrollToBottom() {
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
});
