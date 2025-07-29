//⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
//⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
//⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ 
//⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀ 
// ⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆ 
//⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿ 
//⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀ 
//⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
//⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
//⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
//⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀ 
//⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ 
//⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀ 
//⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉


// ===== CONFIGURATION ET DONNÉE =====
//const CONFIG = {
   // PIXELS_PER_HOUR: 68,
  //  START_HOUR: 8
//};

const EVENTS_DATA = {
    '2025-07-23': [
        {
            id: 'math1',
            title: 'Mathématiques',
            time: '09:00 - 10:30',
            prof: 'Prof. Martin',
            room: 'Salle 204',
            description: 'Chapitre 4 - Analyse',
            color: '#4a90e2',
            bgColor: '#e3eaff'
        }
    ],
    '2025-07-24': [
        {
            id: 'physics1',
            title: 'Physique',
            time: '14:00 - 15:30',
            prof: 'Prof. Durand',
            room: 'Salle 105',
            description: 'TP - Optique',
            color: '#5d7137',
            bgColor: '#eafbe6'
        }
    ],
    '2025-07-25': [
        {
            id: 'math2',
            title: 'Mathématiques',
            time: '10:00 - 11:00',
            prof: 'Prof. Martin',
            room: 'Salle 204',
            description: 'Chapitre 5 - Algèbre linéaire<br>Matrices et espaces vectoriels.',
            color: '#4a90e2',
            bgColor: '#e3eaff'
        },
        {
            id: 'physics2',
            title: 'Physique',
            time: '14:00 - 15:30',
            prof: 'Prof. Durand',
            room: 'Salle 105',
            description: 'TP - Mécanique quantique<br>Travaux pratiques sur la dualité onde-particule.',
            color: '#5d7137',
            bgColor: '#eafbe6'
        },
        {
            id: 'td1',
            title: 'TD Informatique',
            time: '16:00 - 17:00',
            prof: 'M. Petit',
            room: 'Salle Info 2',
            description: 'Algorithmique avancée<br>Exercices sur les arbres binaires.',
            color: '#f59e0b',
            bgColor: '#fef3c7'
        }
    ],
    '2025-07-26': [
        {
            id: 'prog1',
            title: 'Programmation Web',
            time: '08:00 - 10:00',
            prof: 'Prof. Leblanc',
            room: 'Salle Info 1',
            description: 'JavaScript avancé',
            color: '#8b5cf6',
            bgColor: '#ede9fe'
        }
    ]
};

const NOTIFICATIONS_DATA = [
    {
        id: 1,
        type: 'assignment',
        title: 'Nouveau devoir',
        desc: 'Devoir de Mathématiques à rendre pour le 15 janvier',
        time: 'Il y a 2 heures',
        unread: true
    },
    {
        id: 2,
        type: 'grade',
        title: 'Note disponible',
        desc: 'Votre note de Physique TP est disponible: 16/20',
        time: 'Il y a 5 heures',
        unread: true
    },
    {
        id: 3,
        type: 'course',
        title: 'Changement de salle',
        desc: 'Le cours de Programmation Web aura lieu en salle Info 3',
        time: 'Hier',
        unread: false
    },
    {
        id: 4,
        type: 'message',
        title: 'Message de Prof. Martin',
        desc: 'N\'oubliez pas d\'apporter vos calculatrices pour le prochain cours',
        time: 'Il y a 2 jours',
        unread: false
    },
    {
        id: 5,
        type: 'assignment',
        title: 'Rappel: Projet',
        desc: 'Le projet de groupe en Informatique est à rendre dans 5 jours',
        time: 'Il y a 3 jours',
        unread: false
    }
];


// ===== GESTION DE LA NAVIGATION =====
class NavigationManager {
    constructor() {
        this.initNavGlider();
    }

    initNavGlider() {
        const nav = document.getElementById('main-navbar');
        if (!nav) return;

        const glider = nav.querySelector('.nav-glider');
        const activeItem = nav.querySelector('.nav-item.active');
        
        const updateGlider = (item) => {
            if (!item || !glider) return;
            const rect = item.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();
            glider.style.width = rect.width + 'px';
            glider.style.height = rect.height + 'px';
            glider.style.transform = `translateY(${rect.top - navRect.top}px)`;
        };
        
        if (activeItem) {
            updateGlider(activeItem);
        }
        
        nav.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('mouseenter', () => updateGlider(item));
        });
        
        nav.addEventListener('mouseleave', () => {
            if (activeItem) updateGlider(activeItem);
        });
    }
}


// ===== SIDEBAR =====
class SidebarManager {
    constructor() {
        this.initEventListeners();
        this.initResizeHandler();
    }
    initEventListeners() {
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const sidebarOverlay = document.getElementById('sidebar-overlay');
        const sidebar = document.getElementById('sidebar');
        const mainContainer = document.querySelector('.main-container');

        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                if (window.innerWidth > 1020) {
                    this.toggle();
                } else {
                    this.close();
                }
            });
        }
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => this.open());
        }
        if (sidebarOverlay) {
            sidebarOverlay.addEventListener('click', () => this.close());
        }
        document.addEventListener('click', (event) => {
            if (window.innerWidth <= 1020 && sidebar.classList.contains('open')) {
                if (!sidebar.contains(event.target) && !mobileToggle.contains(event.target)) {
                    this.close();
                }
            }
        });
    }

    initResizeHandler() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 100);
        });
    }

    handleResize() {
        const sidebar = document.getElementById('sidebar');
        const mainContainer = document.querySelector('.main-container');
        const overlay = document.getElementById('sidebar-overlay');
        
        if (window.innerWidth > 1020) {
            sidebar?.classList.remove('open');
            sidebar?.classList.remove('closed');
            mainContainer?.classList.remove('sidebar-closed');
            overlay?.classList.remove('visible');
        } else {
            // sur les petit ecran sidebar
            sidebar?.classList.remove('open');
            sidebar?.classList.remove('closed');
            mainContainer?.classList.remove('sidebar-closed');
            overlay?.classList.remove('visible');
        }
    }

    toggle() {
        const sidebar = document.getElementById('sidebar');
        const mainContainer = document.querySelector('.main-container');
        if (window.innerWidth > 1020) {
            sidebar.classList.toggle('closed');
            mainContainer?.classList.toggle('sidebar-closed');
        } else {
            sidebar.classList.toggle('open');
            const overlay = document.getElementById('sidebar-overlay');
            if (sidebar.classList.contains('open')) {
                overlay.classList.add('visible');
            } else {
                overlay.classList.remove('visible');
            }
        }
    }
    close() {
        const sidebar = document.getElementById('sidebar');
        const mainContainer = document.querySelector('.main-container');
        if (window.innerWidth > 1020) {
            sidebar.classList.add('closed');
            mainContainer?.classList.add('sidebar-closed');
        } else {
            sidebar.classList.remove('open');
            const overlay = document.getElementById('sidebar-overlay');
            overlay.classList.remove('visible');
        }
    }
    open() {
        const sidebar = document.getElementById('sidebar');
        const mainContainer = document.querySelector('.main-container');
        if (window.innerWidth > 1020) {
            sidebar.classList.remove('closed');
            mainContainer?.classList.remove('sidebar-closed');
        } else {
            sidebar.classList.add('open');
            const overlay = document.getElementById('sidebar-overlay');
            overlay.classList.add('visible');
        }
    }
}
// ===== GESTION DES NOTIFICATIONS =====

class NotificationManager {
    constructor(notifications) {
        this.notifications = notifications || [];
        this.initEventListeners();
    }
    initEventListeners() {
        const notificationToggle = document.getElementById('notification-toggle');
        const notificationsClose = document.getElementById('notifications-close');
        const drawerOverlay = document.getElementById('drawer-overlay');

        if (notificationToggle) {
            notificationToggle.addEventListener('click', () => this.toggle());
        }
        if (notificationsClose) {
            notificationsClose.addEventListener('click', () => this.toggle());
        }
        if (drawerOverlay) {
            drawerOverlay.addEventListener('click', () => this.toggle());
        }

        // Event listeners pour les filtres
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                const filter = e.target.textContent.toLowerCase();
                this.filter(filter);
            });
        });
    }
    toggle() {
        const drawer = document.getElementById('notifications-drawer');
        const overlay = document.getElementById('drawer-overlay');
        if (drawer.classList.contains('open')) {
            drawer.classList.remove('open');
            overlay.classList.remove('visible');
        } else {
            drawer.classList.add('open');
            overlay.classList.add('visible');
        }
    }
    load() {
        const container = document.getElementById('notifications-list');
        if (!container) return;
        container.innerHTML = '';
        this.notifications.forEach(notif => {
            const item = this.createNotificationItem(notif);
            container.appendChild(item);
        });
    }
    createNotificationItem(notif) {
        const div = document.createElement('div');
        div.className = `notification-item ${notif.unread ? 'unread' : ''}`;
        const iconClass = {
            'assignment': 'ph-notebook',
            'grade': 'ph-chart-line',
            'course': 'ph-books',
            'message': 'ph-chats'
        }[notif.type];
        div.innerHTML = `
            <div class="notification-content">
                <div class="notification-icon ${notif.type}">
                    <i class="ph ${iconClass}"></i>
                </div>
                <div class="notification-body">
                    <div class="notification-title">${notif.title}</div>
                    <div class="notification-desc">${notif.desc}</div>
                    <div class="notification-time">${notif.time}</div>
                </div>
            </div>
        `;
        div.addEventListener('click', () => {
            notif.unread = false;
            this.load();
        });
        return div;
    }
    filter(filter) {
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.classList.remove('active');
        });
        event.target.classList.add('active');
        console.log('Filter by:', filter);
    }
}


// ===== GESTION DU THÈME =====
class ThemeManager {
    toggle() {
        const icon = document.getElementById('theme-icon');
        if (!icon) return;

        const isDark = icon.classList.contains('ph-sun');
        
        if (isDark) {
            icon.classList.remove('ph-sun');
            icon.classList.add('ph-moon');
            document.documentElement.style.setProperty('--c-bg-main', '#fff');
            document.documentElement.style.setProperty('--c-white', '#fff');
            document.documentElement.style.setProperty('--c-text-primary', '#222');
            document.documentElement.style.setProperty('--c-beige', '#f7f6ef');

        } else {
            icon.classList.remove('ph-moon');
            icon.classList.add('ph-sun');
            document.documentElement.style.setProperty('--c-bg-main', '#1a1a1a');
            document.documentElement.style.setProperty('--c-white', '#1a1a1a');
            document.documentElement.style.setProperty('--c-text-primary', '#f5f5f5');
            document.documentElement.style.setProperty('--c-beige', '#1a1a1a');
            document.documentElement.style.setProperty('--c-gray-500', '#000');

        }
    }
}



// ===== APPLICATION PRINCIPALE =====
class GlobalApp {
    constructor() {

        this.sidebarManager = new SidebarManager();


        this.notificationManager = new NotificationManager(NOTIFICATIONS_DATA);
        this.nativigationManager = new NavigationManager();
        this.themeManager = new ThemeManager();


        window.notificationManager = this.notificationManager;
        window.themeManager = this.themeManager;
    }

    init() {

        this.notificationManager.load();
    }

}

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
    const lastName = parts.slice(1).join(' ') || ''; // tout ce qui reste après prenom

    return firstName.startsWith(searchTerm) || lastName.startsWith(searchTerm);
  });

  renderConvos(filteredConvos);
});
});

// ===== FONCTIONS GLOBALES POUR COMPATIBILITE =====
let app;

function InitGlobalApp() {
    app = new GlobalApp();
    app.init();
}

function toggleTheme() {
    app?.themeManager.toggle();
}

function toggleNotifications() {
    app?.notificationManager.toggle();
}

function filterNotifications(filter) {
    app?.notificationManager.filter(filter);
}

function openAddEvent() {
    alert('Fonctionnalité à venir: Ajouter un nouvel événement');
    console.log('%c📝 Tentative d\'ajout d\'événement (fonction à venir)', 'color: #f59e0b; font-weight: bold');
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    InitGlobalApp();
});