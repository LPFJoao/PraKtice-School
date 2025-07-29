// ===== GESTION DE LA BIBLIOTHÈQUE =====
class LibraryManager {
    constructor() {
        this.resources = [
            // Livres sur le développement web
            {
                id: 1,
                title: "Eloquent JavaScript",
                author: "Sambeau Prak",
                description: "Une introduction moderne au JavaScript. Ce livre vous guide à travers les concepts fondamentaux et avancés du langage avec des exemples pratiques.",
                type: "books",
                category: "webdev",
                rating: 4.8,
                duration: "450 pages",
                status: "free",
                cover: "webdev",
                icon: "ph ph-code",
                publishedDate: "2023",
                language: "JavaScript",
                level: "Débutant à Avancé",
                isFavorite: true,
                progress: 100
            },
            {
                id: 2,
                title: "You Don't Know JS",
                author: "Sambeau Prak",
                description: "Série complète pour maîtriser JavaScript en profondeur. Couvre les closures, prototypes, async/await et les concepts avancés.",
                type: "books",
                category: "webdev",
                rating: 4.9,
                duration: "6 volumes",
                status: "premium",
                cover: "webdev",
                icon: "ph ph-code",
                publishedDate: "2022",
                language: "JavaScript",
                level: "Avancé",
                isFavorite: true,
                progress: 35
            },
            {
                id: 3,
                title: "CSS: The Definitive Guide",
                author: "Sambeau Prak",
                description: "Guide complet sur CSS3 avec les dernières fonctionnalités : Grid, Flexbox, animations et responsive design.",
                type: "books",
                category: "webdev",
                rating: 4.7,
                duration: "520 pages",
                status: "free",
                cover: "webdev",
                icon: "ph ph-palette",
                publishedDate: "2023",
                language: "CSS",
                level: "Intermédiaire",
                isFavorite: false,
                progress: 0
            },
            {
                id: 4,
                title: "React: Up & Running",
                author: "Sambeau Prak",
                description: "Apprenez React de A à Z avec des projets pratiques. Hooks, Context API, et les meilleures pratiques.",
                type: "books",
                category: "webdev",
                rating: 4.6,
                duration: "380 pages",
                status: "premium",
                cover: "webdev",
                icon: "ph ph-atom",
                publishedDate: "2023",
                language: "React",
                level: "Intermédiaire",
                isFavorite: false,
                progress: 0
            },
            // Cours en ligne
            {
                id: 5,
                title: "The Complete Web Developer Bootcamp",
                author: "Sambeau Prak",
                description: "Cours complet pour devenir développeur web full-stack. HTML, CSS, JavaScript, Node.js, MongoDB et plus.",
                type: "courses",
                category: "webdev",
                rating: 4.8,
                duration: "44 heures",
                status: "premium",
                cover: "courses",
                icon: "ph ph-graduation-cap",
                publishedDate: "2024",
                language: "Anglais",
                level: "Débutant",
                isFavorite: true,
                progress: 60
            },
            {
                id: 6,
                title: "JavaScript Algorithms and Data Structures",
                author: "Sambeau Prak",
                description: "Maîtrisez les algorithmes et structures de données en JavaScript avec des exercices interactifs.",
                type: "courses",
                category: "webdev",
                rating: 4.9,
                duration: "300 heures",
                status: "free",
                cover: "courses",
                icon: "ph ph-graduation-cap",
                publishedDate: "2024",
                language: "JavaScript",
                level: "Tous niveaux",
                isFavorite: false,
                progress: 0
            },
            {
                id: 7,
                title: "Advanced CSS and Sass",
                author: "Sambeau Prak",
                description: "CSS avancé avec Sass, animations, responsive design et architecture CSS moderne.",
                type: "courses",
                category: "webdev",
                rating: 4.7,
                duration: "28 heures",
                status: "premium",
                cover: "courses",
                icon: "ph ph-graduation-cap",
                publishedDate: "2023",
                language: "CSS/Sass",
                level: "Avancé",
                isFavorite: false,
                progress: 0
            },
            // Vidéos et tutoriels
            {
                id: 8,
                title: "Build a Netflix Clone with React",
                author: "Sambeau Prak",
                description: "Tutoriel complet pour créer une application Netflix clone avec React, Firebase et Material-UI.",
                type: "videos",
                category: "webdev",
                rating: 4.6,
                duration: "3 heures",
                status: "free",
                cover: "videos",
                icon: "ph ph-video-camera",
                publishedDate: "2024",
                language: "React",
                level: "Intermédiaire",
                isFavorite: false,
                progress: 0
            },
            {
                id: 9,
                title: "Node.js API Development",
                author: "Sambeau Prak",
                description: "Créez des APIs RESTful avec Node.js, Express et MongoDB. Authentification JWT incluse.",
                type: "videos",
                category: "webdev",
                rating: 4.8,
                duration: "2.5 heures",
                status: "free",
                cover: "videos",
                icon: "ph ph-video-camera",
                publishedDate: "2024",
                language: "Node.js",
                level: "Intermédiaire",
                isFavorite: true,
                progress: 25
            },
            {
                id: 10,
                title: "Vue.js 3 Masterclass",
                author: "Sambeau Prak",
                description: "Maîtrisez Vue.js 3 avec Composition API, Vuex 4 et Vue Router 4.",
                type: "videos",
                category: "webdev",
                rating: 4.7,
                duration: "6 heures",
                status: "premium",
                cover: "videos",
                icon: "ph ph-video-camera",
                publishedDate: "2023",
                language: "Vue.js",
                level: "Avancé",
                isFavorite: false,
                progress: 0
            },
            // Tutoriels pratiques
            {
                id: 11,
                title: "Build a Full-Stack E-commerce App",
                author: "Sambeau Prak",
                description: "Tutoriel complet pour créer une boutique en ligne avec React, Node.js et Stripe.",
                type: "tutorials",
                category: "webdev",
                rating: 4.9,
                duration: "8 heures",
                status: "premium",
                cover: "tutorials",
                icon: "ph ph-code",
                publishedDate: "2024",
                language: "Full-Stack",
                level: "Avancé",
                isFavorite: false,
                progress: 0
            },
            {
                id: 12,
                title: "TypeScript for React Developers",
                author: "Sambeau Prak",
                description: "Apprenez TypeScript en construisant des applications React modernes.",
                type: "tutorials",
                category: "webdev",
                rating: 4.8,
                duration: "4 heures",
                status: "free",
                cover: "tutorials",
                icon: "ph ph-code",
                publishedDate: "2024",
                language: "TypeScript",
                level: "Intermédiaire",
                isFavorite: false,
                progress: 0
            },
            // Ressources mathématiques
            {
                id: 13,
                title: "Calculus: Early Transcendentals",
                author: "Sambeau Prak",
                description: "Manuel complet de calcul différentiel et intégral avec applications pratiques.",
                type: "books",
                category: "math",
                rating: 4.6,
                duration: "680 pages",
                status: "premium",
                cover: "math",
                icon: "ph ph-function",
                publishedDate: "2022",
                language: "Mathématiques",
                level: "Université",
                isFavorite: false,
                progress: 0
            },
            {
                id: 14,
                title: "Linear Algebra Done Right",
                author: "Sambeau Prak",
                description: "Approche moderne de l'algèbre linéaire avec focus sur les espaces vectoriels.",
                type: "books",
                category: "math",
                rating: 4.7,
                duration: "320 pages",
                status: "free",
                cover: "math",
                icon: "ph ph-function",
                publishedDate: "2021",
                language: "Mathématiques",
                level: "Avancé",
                isFavorite: false,
                progress: 0
            },
            // Ressources physique
            {
                id: 15,
                title: "Introduction to Quantum Mechanics",
                author: "Sambeau Prak",
                description: "Introduction accessible à la mécanique quantique avec exercices et applications.",
                type: "books",
                category: "physics",
                rating: 4.8,
                duration: "480 pages",
                status: "premium",
                cover: "physics",
                icon: "ph ph-atom",
                publishedDate: "2023",
                language: "Physique",
                level: "Université",
                isFavorite: false,
                progress: 0
            },
            {
                id: 16,
                title: "Classical Mechanics",
                author: "Sambeau Prak",
                description: "Mécanique classique avec approche moderne et applications informatiques.",
                type: "books",
                category: "physics",
                rating: 4.5,
                duration: "520 pages",
                status: "free",
                cover: "physics",
                icon: "ph ph-atom",
                publishedDate: "2022",
                language: "Physique",
                level: "Avancé",
                isFavorite: false,
                progress: 0
            }
        ];
        
        this.recommendations = [
            {
                id: 17,
                title: "Modern React with Redux",
                author: "Stephen Grider",
                category: "webdev",
                cover: "webdev"
            },
            {
                id: 18,
                title: "Python for Data Science",
                author: "Jose Portilla",
                category: "math",
                cover: "math"
            },
            {
                id: 19,
                title: "Electromagnetism",
                author: "David J. Griffiths",
                category: "physics",
                cover: "physics"
            }
        ];
        
        this.currentFilter = 'all';
        this.selectedResource = null;
        this.favorites = [2, 5, 9]; // IDs des ressources favorites
        
        // Configuration de la pagination
        this.itemsPerPage = 6;
        this.currentPage = 1;
        
        this.init();
    }

    init() {
        this.displayResources();
        this.displayProgressStats();
        this.displayRecommendations();
        this.bindEvents();
    }

    bindEvents() {
        window.filterResources = (filter) => this.filterResources(filter);
        window.selectResource = (resourceId) => this.selectResource(resourceId);
        window.toggleFavorite = (resourceId) => this.toggleFavorite(resourceId);
        window.startReading = (resourceId) => this.startReading(resourceId);
        window.downloadResource = (resourceId) => this.downloadResource(resourceId);
        window.showFavorites = () => this.showFavorites();
        window.addToFavorites = () => this.addToFavorites();
        window.goToPage = (page) => this.goToPage(page);
        window.nextPage = () => this.nextPage();
        window.prevPage = () => this.prevPage();
    }

    filterResources(filter) {
        this.currentFilter = filter;
        this.currentPage = 1; 
        this.displayResources();
        
        // Mettre à jour les boutons de filtre
        const filterButtons = document.querySelectorAll('.library-controls .icon-button');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Ajouter la classe active au bouton cliqué
        event.target.closest('.icon-button').classList.add('active');
    }

    displayResources() {
        const resourcesGrid = document.getElementById('resources-grid');
        const paginationContainer = document.getElementById('pagination-container');
        if (!resourcesGrid || !paginationContainer) return;
        
        let filteredResources = this.resources;
        
        // Appliquer le filtre
        if (this.currentFilter !== 'all') {
            filteredResources = this.resources.filter(resource => resource.type === this.currentFilter);
        }
        
        if (filteredResources.length === 0) {
            resourcesGrid.innerHTML = this.createEmptyState();
            paginationContainer.innerHTML = '';
            return;
        }
        
        // Calculer la pagination
        const totalPages = Math.ceil(filteredResources.length / this.itemsPerPage);
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const currentResources = filteredResources.slice(startIndex, endIndex);
        
        // Afficher les ressources de la page courante
        let html = '';
        currentResources.forEach(resource => {
            html += this.createResourceCard(resource);
        });
        
        resourcesGrid.innerHTML = html;
        
        // Afficher la pagination
        this.displayPagination(filteredResources.length, totalPages);
    }

    createResourceCard(resource) {
        const statusClass = `resource-status ${resource.status}`;
        const favoriteClass = resource.isFavorite ? 'active' : '';
        const progressBar = resource.progress > 0 ? `
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${resource.progress}%"></div>
            </div>
        ` : '';
        
        return `
            <div class="resource-card" onclick="selectResource(${resource.id})">
                <div class="${statusClass}">${this.getStatusText(resource.status)}</div>
                <button class="resource-favorite ${favoriteClass}" onclick="event.stopPropagation(); toggleFavorite(${resource.id})">
                    <i class="ph ph-heart"></i>
                </button>
                <div class="resource-header">
                    <div class="resource-cover ${resource.cover}">
                        <i class="${resource.icon}"></i>
                    </div>
                    <div class="resource-info">
                        <h3>${resource.title}</h3>
                        <div class="resource-author">${resource.author}</div>
                        <div class="resource-type ${resource.type}">${this.getTypeText(resource.type)}</div>
                    </div>
                </div>
                <div class="resource-description">${resource.description}</div>
                <div class="resource-stats">
                    <div class="resource-rating">
                        <span class="stars">★★★★★</span>
                        <span>${resource.rating}</span>
                    </div>
                    <div class="resource-duration">${resource.duration}</div>
                </div>
                ${progressBar}
                <div class="resource-actions">
                    <button class="resource-action-btn secondary" onclick="event.stopPropagation(); downloadResource(${resource.id})">
                        <i class="ph ph-download"></i> Télécharger
                    </button>
                    <button class="resource-action-btn primary" onclick="event.stopPropagation(); startReading(${resource.id})">
                        <i class="ph ph-play"></i> Commencer
                    </button>
                </div>
            </div>
        `;
    }

    getTypeText(type) {
        const types = {
            'books': 'Livre',
            'courses': 'Cours',
            'videos': 'Vidéo',
            'tutorials': 'Tutoriel'
        };
        return types[type] || type;
    }

    getStatusText(status) {
        const statuses = {
            'free': 'Gratuit',
            'premium': 'Premium',
            'new': 'Nouveau',
            'popular': 'Populaire'
        };
        return statuses[status] || status;
    }

    createEmptyState() {
        return `
            <div class="empty-state">
                <i class="ph ph-book-open"></i>
                <h3>Aucune ressource trouvée</h3>
                <p>${this.currentFilter === 'all' ? 'Aucune ressource disponible.' : `Aucune ressource de type "${this.getTypeText(this.currentFilter)}" trouvée.`}</p>
                <button class="empty-state-btn" onclick="filterResources('all')">
                    <i class="ph ph-arrow-left"></i> Voir toutes les ressources
                </button>
            </div>
        `;
    }

    selectResource(resourceId) {
        this.selectedResource = this.resources.find(resource => resource.id === resourceId);
        this.displayResourceDetails();
    }

    displayResourceDetails() {
        const resourceDetails = document.getElementById('resource-details');
        if (!resourceDetails) return;
        
        if (!this.selectedResource) {
            resourceDetails.innerHTML = `
                <h3><i class="ph ph-book-open"></i> Détails de la ressource</h3>
                <p style="text-align: center; color: var(--c-text-tertiary); margin-top: 2rem;">
                    Cliquez sur une ressource pour voir les détails
                </p>
            `;
            return;
        }
        
        const resource = this.selectedResource;
        const progressBar = resource.progress > 0 ? `
            <div class="progress-bar" style="margin-top: 0.5rem;">
                <div class="progress-fill" style="width: ${resource.progress}%"></div>
            </div>
        ` : '';
        
        resourceDetails.innerHTML = `
            <h3><i class="ph ph-book-open"></i> Détails de la ressource</h3>
            <div class="resource-detail-item">
                <i class="ph ph-user"></i>
                <strong>Auteur:</strong> ${resource.author}
            </div>
            <div class="resource-detail-item">
                <i class="ph ph-calendar"></i>
                <strong>Publié:</strong> ${resource.publishedDate}
            </div>
            <div class="resource-detail-item">
                <i class="ph ph-clock"></i>
                <strong>Durée:</strong> ${resource.duration}
            </div>
            <div class="resource-detail-item">
                <i class="ph ph-star"></i>
                <strong>Note:</strong> ${resource.rating}/5
            </div>
            <div class="resource-detail-item">
                <i class="ph ph-translate"></i>
                <strong>Langage:</strong> ${resource.language}
            </div>
            <div class="resource-detail-item">
                <i class="ph ph-trend-up"></i>
                <strong>Niveau:</strong> ${resource.level}
            </div>
            ${resource.progress > 0 ? `
                <div class="resource-detail-item">
                    <i class="ph ph-chart-line"></i>
                    <strong>Progression:</strong> ${resource.progress}%
                </div>
            ` : ''}
            <div class="resource-description-full">
                ${resource.description}
            </div>
            ${progressBar}
            <div class="resource-actions-detail">
                <button class="resource-action-btn-detail secondary" onclick="toggleFavorite(${resource.id})">
                    <i class="ph ph-heart"></i> ${resource.isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                </button>
                <button class="resource-action-btn-detail primary" onclick="startReading(${resource.id})">
                    <i class="ph ph-play"></i> Commencer
                </button>
            </div>
        `;
    }

    displayProgressStats() {
        const progressStats = document.getElementById('progress-stats');
        if (!progressStats) return;
        
        const totalResources = this.resources.length;
        const completedResources = this.resources.filter(r => r.progress === 100).length;
        const readingResources = this.resources.filter(r => r.progress > 0 && r.progress < 100).length;
        const favoriteResources = this.favorites.length;
        
        const avgProgress = this.resources.reduce((sum, r) => sum + r.progress, 0) / totalResources;
        
        progressStats.innerHTML = `
            <div class="progress-item">
                <div class="progress-icon reading">
                    <i class="ph ph-book-open"></i>
                </div>
                <div class="progress-info">
                    <div class="progress-label">En cours de lecture</div>
                    <div class="progress-value">${readingResources} ressources</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(readingResources/totalResources)*100}%"></div>
                    </div>
                </div>
            </div>
            <div class="progress-item">
                <div class="progress-icon completed">
                    <i class="ph ph-check-circle"></i>
                </div>
                <div class="progress-info">
                    <div class="progress-label">Terminées</div>
                    <div class="progress-value">${completedResources} ressources</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(completedResources/totalResources)*100}% ; background-color: green"></div>
                    </div>
                </div>
            </div>
            <div class="progress-item">
                <div class="progress-icon favorites">
                    <i class="ph ph-heart"></i>
                </div>
                <div class="progress-info" >
                    <div class="progress-label">Favoris</div>
                    <div class="progress-value">${favoriteResources} ressources</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(favoriteResources/totalResources)*100}% ; background-color: red" ></div>
                    </div>
                </div>
            </div>
        `;
    }

    displayRecommendations() {
        const recommendationsList = document.getElementById('recommendations-list');
        if (!recommendationsList) return;
        
        let html = '';
        this.recommendations.forEach(recommendation => {
            html += `
                <div class="recommendation-item" onclick="selectResource(${recommendation.id})">
                    <div class="recommendation-cover ${recommendation.cover}">
                        <i class="ph ph-book"></i>
                    </div>
                    <div class="recommendation-info">
                        <div class="recommendation-title">${recommendation.title}</div>
                        <div class="recommendation-author">${recommendation.author}</div>
                    </div>
                </div>
            `;
        });
        
        recommendationsList.innerHTML = html;
    }

    toggleFavorite(resourceId) {
        const resource = this.resources.find(r => r.id === resourceId);
        if (resource) {
            resource.isFavorite = !resource.isFavorite;
            if (resource.isFavorite) {
                this.favorites.push(resourceId);
            } else {
                this.favorites = this.favorites.filter(id => id !== resourceId);
            }
            this.displayResources();
            this.displayResourceDetails();
            this.displayProgressStats();
        }
    }

    startReading(resourceId) {
        console.log('Commencer la lecture de la ressource:', resourceId);
        //Load video from src in a pop up window
        const videoWindow = window.open('', '_blank', 'width=800,height=600');
        videoWindow.document.write(`
            <html>
                <body>
                    <iframe allow="fullscreen;autoplay" allowfullscreen height="100%" src="https://streamable.com/e/wzxj53?autoplay=1" width="100%" style="border:none;"></iframe>
                </body>
            </html>
        `);
        videoWindow.document.close();
        videoWindow.focus();
        alert('Ouverture de la ressource en cours...');
    }

    downloadResource(resourceId) {
        console.log('Télécharger la ressource:', resourceId);
        alert('Téléchargement en cours...');
    }

    showFavorites() {
        this.currentFilter = 'favorites';
        this.currentPage = 1; // Reset à la première page
        const filteredResources = this.resources.filter(resource => resource.isFavorite);
        
        const resourcesGrid = document.getElementById('resources-grid');
        const paginationContainer = document.getElementById('pagination-container');
        if (!resourcesGrid || !paginationContainer) return;
        
        if (filteredResources.length === 0) {
            resourcesGrid.innerHTML = `
                <div class="empty-state">
                    <i class="ph ph-heart"></i>
                    <h3>Aucun favori</h3>
                    <p>Vous n'avez pas encore ajouté de ressources à vos favoris.</p>
                    <button class="empty-state-btn" onclick="filterResources('all')">
                        <i class="ph ph-arrow-left"></i> Parcourir les ressources
                    </button>
                </div>
            `;
            paginationContainer.innerHTML = '';
            return;
        }
        
        // Calculer la pagination pour les favoris
        const totalPages = Math.ceil(filteredResources.length / this.itemsPerPage);
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const currentResources = filteredResources.slice(startIndex, endIndex);
        
        let html = '';
        currentResources.forEach(resource => {
            html += this.createResourceCard(resource);
        });
        
        resourcesGrid.innerHTML = html;
        
        // Afficher la pagination pour les favoris
        this.displayPagination(filteredResources.length, totalPages);
    }

    addToFavorites() {
        if (this.selectedResource) {
            this.toggleFavorite(this.selectedResource.id);
        } else {
            alert('Veuillez sélectionner une ressource d\'abord');
        }
    }

    getResourcesByType(type) {
        return this.resources.filter(resource => resource.type === type);
    }

    getAllResources() {
        return this.resources;
    }

    // ===== MÉTHODES DE PAGINATION =====
    
    displayPagination(totalItems, totalPages) {
        const paginationContainer = document.getElementById('pagination-container');
        if (!paginationContainer) return;
        
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }
        
        const startItem = (this.currentPage - 1) * this.itemsPerPage + 1;
        const endItem = Math.min(this.currentPage * this.itemsPerPage, totalItems);
        
        let paginationHTML = `
            <div class="pagination-info">
                <span>Affichage de ${startItem} à ${endItem} sur ${totalItems} ressources</span>
            </div>
            <div class="pagination-controls">
                <div class="pagination-nav">
                    <button class="pagination-nav-btn" onclick="prevPage()" ${this.currentPage === 1 ? 'disabled' : ''}>
                        <i class="ph ph-caret-left"></i>
                    </button>
                </div>
        `;
        
        // Générer les boutons de page
        const maxVisiblePages = 5;
        let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        // Ajuster si on est près de la fin
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        // Bouton première page
        if (startPage > 1) {
            paginationHTML += `<button class="pagination-btn" onclick="goToPage(1)">1</button>`;
            if (startPage > 2) {
                paginationHTML += `<div class="pagination-dots">...</div>`;
            }
        }
        
        // Pages visibles
        for (let i = startPage; i <= endPage; i++) {
            const activeClass = i === this.currentPage ? 'active' : '';
            paginationHTML += `<button class="pagination-btn ${activeClass}" onclick="goToPage(${i})">${i}</button>`;
        }
        
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                paginationHTML += `<div class="pagination-dots">...</div>`;
            }
            paginationHTML += `<button class="pagination-btn" onclick="goToPage(${totalPages})">${totalPages}</button>`;
        }
        
        paginationHTML += `
                <div class="pagination-nav">
                    <button class="pagination-nav-btn" onclick="nextPage()" ${this.currentPage === totalPages ? 'disabled' : ''}>
                        <i class="ph ph-caret-right"></i>
                    </button>
                </div>
            </div>
        `;
        
        paginationContainer.innerHTML = paginationHTML;
    }
    
    goToPage(page) {
        this.currentPage = page;
        this.displayResources();
        
        // Scroll vers le haut de la grille
        const resourcesGrid = document.getElementById('resources-grid');
        if (resourcesGrid) {
            resourcesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    nextPage() {
        const filteredResources = this.currentFilter === 'all' 
            ? this.resources 
            : this.resources.filter(resource => resource.type === this.currentFilter);
        const totalPages = Math.ceil(filteredResources.length / this.itemsPerPage);
        
        if (this.currentPage < totalPages) {
            this.goToPage(this.currentPage + 1);
        }
    }
    
    prevPage() {
        if (this.currentPage > 1) {
            this.goToPage(this.currentPage - 1);
        }
    }
}

class LibraryApp {
    constructor() {
        this.libraryManager = new LibraryManager();
    }
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    window.libraryApp = new LibraryApp();
}); 