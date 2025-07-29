// ===== GESTION DES GROUPES =====
class GroupsManager {
    constructor() {
        this.groups = [
            {
                id: 1,
                name: "Groupe d'étude Mathématiques",
                description: "Groupe d'étude pour les cours de mathématiques avancées. Révisions, exercices et entraide.",
                type: "study",
                members: [
                    { id: 1, name: "Alice Martin", role: "Admin", avatar: "AM" },
                    { id: 2, name: "Bob Dupont", role: "Membre", avatar: "BD" },
                    { id: 3, name: "Claire Leroy", role: "Membre", avatar: "CL" },
                    { id: 4, name: "David Moreau", role: "Membre", avatar: "DM" }
                ],
                memberCount: 4,
                lastActivity: "Il y a 2 heures",
                status: "active",
                createdDate: "2025-01-15",
                color: "#4a90e2"
            },
            {
                id: 2,
                name: "Projet Web Final",
                description: "Groupe de projet pour le développement d'une application web moderne avec React et Node.js.",
                type: "project",
                members: [
                    { id: 1, name: "Alice Martin", role: "Admin", avatar: "AM" },
                    { id: 5, name: "Emma Rousseau", role: "Membre", avatar: "ER" },
                    { id: 6, name: "François Dubois", role: "Membre", avatar: "FD" }
                ],
                memberCount: 3,
                lastActivity: "Il y a 30 minutes",
                status: "active",
                createdDate: "2025-01-10",
                color: "#27ae60"
            },
            {
                id: 3,
                name: "Club de Programmation",
                description: "Club étudiant pour partager des connaissances en programmation et organiser des hackathons.",
                type: "social",
                members: [
                    { id: 1, name: "Alice Martin", role: "Membre", avatar: "AM" },
                    { id: 7, name: "Gabriel Petit", role: "Admin", avatar: "GP" },
                    { id: 8, name: "Hélène Blanc", role: "Membre", avatar: "HB" },
                    { id: 9, name: "Ivan Kovac", role: "Membre", avatar: "IK" },
                    { id: 10, name: "Julie Simon", role: "Membre", avatar: "JS" }
                ],
                memberCount: 5,
                lastActivity: "Il y a 1 jour",
                status: "active",
                createdDate: "2024-12-20",
                color: "#e67e22"
            },
            {
                id: 4,
                name: "Recherche IA",
                description: "Groupe de recherche sur l'intelligence artificielle et le machine learning.",
                type: "research",
                members: [
                    { id: 1, name: "Alice Martin", role: "Membre", avatar: "AM" },
                    { id: 11, name: "Kevin Leroy", role: "Admin", avatar: "KL" },
                    { id: 12, name: "Laura Garcia", role: "Membre", avatar: "LG" }
                ],
                memberCount: 3,
                lastActivity: "Il y a 3 jours",
                status: "active",
                createdDate: "2024-11-15",
                color: "#9b59b6"
            },
            {
                id: 5,
                name: "Groupe Physique Quantique",
                description: "Étude approfondie de la physique quantique et ses applications modernes.",
                type: "study",
                members: [
                    { id: 1, name: "Alice Martin", role: "Membre", avatar: "AM" },
                    { id: 13, name: "Marc Bernard", role: "Admin", avatar: "MB" },
                    { id: 14, name: "Nina Torres", role: "Membre", avatar: "NT" },
                    { id: 15, name: "Olivier Durand", role: "Membre", avatar: "OD" }
                ],
                memberCount: 4,
                lastActivity: "Il y a 1 semaine",
                status: "inactive",
                createdDate: "2024-10-05",
                color: "#4a90e2"
            }
        ];
        
        this.activities = [
            {
                id: 1,
                type: "message",
                text: "Nouveau message dans Groupe d'étude Mathématiques",
                time: "Il y a 2 heures",
                groupId: 1
            },
            {
                id: 2,
                type: "file",
                text: "Document partagé dans Projet Web Final",
                time: "Il y a 30 minutes",
                groupId: 2
            },
            {
                id: 3,
                type: "event",
                text: "Nouvelle réunion planifiée dans Club de Programmation",
                time: "Il y a 1 jour",
                groupId: 3
            },
            {
                id: 4,
                type: "member",
                text: "Nouveau membre dans Recherche IA",
                time: "Il y a 3 jours",
                groupId: 4
            },
            {
                id: 5,
                type: "message",
                text: "Message dans Groupe Physique Quantique",
                time: "Il y a 1 semaine",
                groupId: 5
            }
        ];
        
        this.currentFilter = 'all';
        this.selectedGroup = null;
        
        this.init();
    }

    init() {
        this.displayGroups();
        this.displayRecentActivity();
        this.bindEvents();
    }

    bindEvents() {
        window.filterGroups = (filter) => this.filterGroups(filter);
        window.createGroup = () => this.createGroup();
        window.selectGroup = (groupId) => this.selectGroup(groupId);
        window.editGroup = (groupId) => this.editGroup(groupId);
        window.deleteGroup = (groupId) => this.deleteGroup(groupId);
        window.leaveGroup = (groupId) => this.leaveGroup(groupId);
        window.inviteMember = (groupId) => this.inviteMember(groupId);
    }

    filterGroups(filter) {
        this.currentFilter = filter;
        this.displayGroups();
        
        // Mettre à jour les boutons de filtre
        const filterButtons = document.querySelectorAll('.groups-controls .icon-button');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Ajouter la classe active au bouton cliqué
        event.target.closest('.icon-button').classList.add('active');
    }

    displayGroups() {
        const groupsGrid = document.getElementById('groups-grid');
        if (!groupsGrid) return;
        
        let filteredGroups = this.groups;
        
        // Appliquer le filtre
        if (this.currentFilter === 'study') {
            filteredGroups = this.groups.filter(group => group.type === 'study');
        } else if (this.currentFilter === 'project') {
            filteredGroups = this.groups.filter(group => group.type === 'project');
        }
        
        if (filteredGroups.length === 0) {
            groupsGrid.innerHTML = this.createEmptyState();
            return;
        }
        
        let html = '';
        filteredGroups.forEach(group => {
            html += this.createGroupCard(group);
        });
        
        groupsGrid.innerHTML = html;
    }

    createGroupCard(group) {
        const iconClass = this.getGroupIconClass(group.type);
        const statusClass = `group-status ${group.status}`;
        
        return `
            <div class="group-card" onclick="selectGroup(${group.id})">
                <div class="${statusClass}">${this.getStatusText(group.status)}</div>
                <div class="group-header">
                    <div class="group-icon ${group.type}">
                        <i class="${iconClass}"></i>
                    </div>
                    <div class="group-info">
                        <h3>${group.name}</h3>
                        <div class="group-type">${this.getTypeText(group.type)}</div>
                    </div>
                </div>
                <div class="group-description">${group.description}</div>
                <div class="group-stats">
                    <div class="group-members">
                        <div class="member-avatars">
                            ${this.createMemberAvatars(group.members.slice(0, 3))}
                        </div>
                        <span>${group.memberCount} membres</span>
                    </div>
                    <div class="group-activity">${group.lastActivity}</div>
                </div>
                <div class="group-actions">
                    <button class="group-action-btn secondary" onclick="event.stopPropagation(); editGroup(${group.id})">
                        <i class="ph ph-pencil"></i> Modifier
                    </button>
                    <button class="group-action-btn primary" onclick="event.stopPropagation(); inviteMember(${group.id})">
                        <i class="ph ph-user-plus"></i> Inviter
                    </button>
                </div>
            </div>
        `;
    }

    createMemberAvatars(members) {
        return members.map(member => 
            `<div class="member-avatar" title="${member.name}">${member.avatar}</div>`
        ).join('');
    }

    getGroupIconClass(type) {
        const icons = {
            'study': 'ph ph-book-open',
            'project': 'ph ph-folder',
            'social': 'ph ph-users',
            'research': 'ph ph-microscope'
        };
        return icons[type] || 'ph ph-users-three';
    }

    getTypeText(type) {
        const types = {
            'study': 'Groupe d\'étude',
            'project': 'Projet',
            'social': 'Club social',
            'research': 'Recherche'
        };
        return types[type] || type;
    }

    getStatusText(status) {
        const statuses = {
            'active': 'Actif',
            'inactive': 'Inactif',
            'archived': 'Archivé'
        };
        return statuses[status] || status;
    }

    createEmptyState() {
        return `
            <div class="empty-state">
                <i class="ph ph-users-three"></i>
                <h3>Aucun groupe trouvé</h3>
                <p>${this.currentFilter === 'all' ? 'Vous n\'avez pas encore de groupes.' : `Aucun groupe de type "${this.getTypeText(this.currentFilter)}" trouvé.`}</p>
                <button class="empty-state-btn" onclick="createGroup()">
                    <i class="ph ph-plus"></i> Créer un groupe
                </button>
            </div>
        `;
    }

    selectGroup(groupId) {
        this.selectedGroup = this.groups.find(group => group.id === groupId);
        this.displayGroupDetails();
    }

    displayGroupDetails() {
        const groupDetails = document.getElementById('group-details');
        if (!groupDetails) return;
        
        if (!this.selectedGroup) {
            groupDetails.innerHTML = `
                <h3><i class="ph ph-users-three"></i> Détails du groupe</h3>
                <p style="text-align: center; color: var(--c-text-tertiary); margin-top: 2rem;">
                    Cliquez sur un groupe pour voir les détails
                </p>
            `;
            return;
        }
        
        const group = this.selectedGroup;
        const createdDate = new Date(group.createdDate).toLocaleDateString('fr-FR');
        
        groupDetails.innerHTML = `
            <h3><i class="ph ph-users-three"></i> Détails du groupe</h3>
            <div class="group-detail-item">
                <i class="ph ph-bookmark"></i>
                <strong>Type:</strong> ${this.getTypeText(group.type)}
            </div>
            <div class="group-detail-item">
                <i class="ph ph-calendar"></i>
                <strong>Créé le:</strong> ${createdDate}
            </div>
            <div class="group-detail-item">
                <i class="ph ph-users"></i>
                <strong>Membres:</strong> ${group.memberCount} personnes
            </div>
            <div class="group-detail-item">
                <i class="ph ph-clock"></i>
                <strong>Dernière activité:</strong> ${group.lastActivity}
            </div>
            <div class="group-detail-item">
                <i class="ph ph-circle"></i>
                <strong>Statut:</strong> ${this.getStatusText(group.status)}
            </div>
            <div class="group-description" style="margin-top: 1rem; padding: 1rem; background: var(--c-beige); border-radius: 8px;">
                ${group.description}
            </div>
            <div class="group-members-list">
                <h4 style="margin: 1rem 0 0.5rem 0; color: var(--c-accent-dark);">Membres du groupe</h4>
                ${this.createMembersList(group.members)}
            </div>
            <div class="group-actions-detail">
                <button class="group-action-btn-detail secondary" onclick="editGroup(${group.id})">
                    <i class="ph ph-pencil"></i> Modifier
                </button>
                <button class="group-action-btn-detail primary" onclick="inviteMember(${group.id})">
                    <i class="ph ph-user-plus"></i> Inviter
                </button>
            </div>
        `;
    }

    createMembersList(members) {
        return members.map(member => `
            <div class="group-member">
                <div class="member-avatar-large">${member.avatar}</div>
                <div class="member-info">
                    <h4>${member.name}</h4>
                    <div class="member-role">${member.role}</div>
                </div>
            </div>
        `).join('');
    }

    displayRecentActivity() {
        const activityList = document.getElementById('activity-list');
        if (!activityList) return;
        
        const recentActivities = this.activities.slice(0, 5);
        
        let html = '';
        recentActivities.forEach(activity => {
            html += this.createActivityItem(activity);
        });
        
        activityList.innerHTML = html;
    }

    createActivityItem(activity) {
        const iconClass = `activity-icon ${activity.type}`;
        const iconMap = {
            'message': 'ph ph-chat-circle',
            'file': 'ph ph-file',
            'event': 'ph ph-calendar',
            'member': 'ph ph-user-plus'
        };
        
        return `
            <div class="activity-item">
                <div class="${iconClass}">
                    <i class="${iconMap[activity.type]}"></i>
                </div>
                <div class="activity-content">
                    <div class="activity-text">${activity.text}</div>
                    <div class="activity-time">${activity.time}</div>
                </div>
            </div>
        `;
    }

    createGroup() {
        console.log('Créer un nouveau groupe');
        alert('Fonctionnalité de création de groupe à venir !');
    }

    editGroup(groupId) {
        console.log('Éditer le groupe:', groupId);
        alert('Fonctionnalité d\'édition de groupe à venir !');
    }

    deleteGroup(groupId) {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce groupe ?')) {
            const index = this.groups.findIndex(group => group.id === groupId);
            if (index > -1) {
                this.groups.splice(index, 1);
                this.displayGroups();
                this.displayGroupDetails();
            }
        }
    }

    leaveGroup(groupId) {
        if (confirm('Êtes-vous sûr de vouloir quitter ce groupe ?')) {
            console.log('Quitter le groupe:', groupId);
            alert('Fonctionnalité de sortie de groupe à venir !');
        }
    }

    inviteMember(groupId) {
        console.log('Inviter un membre au groupe:', groupId);
        alert('Fonctionnalité d\'invitation à venir !');
    }

    addGroup(groupData) {
        const newGroup = {
            id: Date.now(),
            ...groupData
        };
        this.groups.push(newGroup);
        this.displayGroups();
        return newGroup;
    }

    getGroupsByType(type) {
        return this.groups.filter(group => group.type === type);
    }

    getAllGroups() {
        return this.groups;
    }
}

class GroupsApp {
    constructor() {
        this.groupsManager = new GroupsManager();
    }
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    window.groupsApp = new GroupsApp();
}); 