// ===== GESTION DES DEVOIRS =====
class AssignmentsManager {
    constructor() {
        this.assignments = [
            {
                id: 1,
                title: "Projet Web Final - E-commerce",
                course: "Développement Web",
                description: "Créer une application e-commerce complète avec React, Node.js et MongoDB. Inclure l'authentification, la gestion des produits, le panier et les paiements.",
                status: "urgent",
                dueDate: "2025-01-25",
                progress: 75,
                priority: "high",
                type: "project",
                estimatedHours: 20,
                submitted: false,
                attachments: ["specifications.pdf", "wireframes.fig"],
                notes: "Focus sur l'UX/UI et la sécurité des paiements"
            },
            {
                id: 2,
                title: "Algorithmes de Tri - Rapport",
                course: "Algorithmes et Structures de Données",
                description: "Analyser et comparer les performances de différents algorithmes de tri (QuickSort, MergeSort, HeapSort) avec des tests empiriques.",
                status: "in-progress",
                dueDate: "2025-01-28",
                progress: 45,
                priority: "medium",
                type: "report",
                estimatedHours: 8,
                submitted: false,
                attachments: ["algorithms.pdf"],
                notes: "Utiliser Python pour les tests de performance"
            },
            {
                id: 3,
                title: "Base de Données - Modélisation",
                course: "Bases de Données",
                description: "Concevoir et implémenter une base de données pour un système de gestion de bibliothèque universitaire.",
                status: "completed",
                dueDate: "2025-01-20",
                progress: 100,
                priority: "low",
                type: "assignment",
                estimatedHours: 6,
                submitted: true,
                attachments: ["database_schema.sql", "documentation.pdf"],
                notes: "Projet terminé avec succès"
            },
            {
                id: 4,
                title: "Machine Learning - Classification",
                course: "Intelligence Artificielle",
                description: "Implémenter un algorithme de classification pour prédire les résultats d'étudiants basé sur leurs données académiques.",
                status: "upcoming",
                dueDate: "2025-02-05",
                progress: 0,
                priority: "high",
                type: "project",
                estimatedHours: 15,
                submitted: false,
                attachments: ["dataset.csv", "requirements.txt"],
                notes: "Utiliser scikit-learn et pandas"
            },
            {
                id: 5,
                title: "Sécurité Web - Audit",
                course: "Sécurité Informatique",
                description: "Effectuer un audit de sécurité sur une application web et proposer des améliorations.",
                status: "urgent",
                dueDate: "2025-01-23",
                progress: 30,
                priority: "high",
                type: "report",
                estimatedHours: 12,
                submitted: false,
                attachments: ["security_checklist.pdf"],
                notes: "Focus sur les vulnérabilités OWASP Top 10"
            },
            {
                id: 6,
                title: "Interface Utilisateur - Prototype",
                course: "Design d'Interface",
                description: "Créer un prototype interactif pour une application mobile de fitness avec Figma.",
                status: "in-progress",
                dueDate: "2025-01-30",
                progress: 60,
                priority: "medium",
                type: "design",
                estimatedHours: 10,
                submitted: false,
                attachments: ["design_system.fig", "user_research.pdf"],
                notes: "Inclure les tests utilisateurs"
            },
            {
                id: 7,
                title: "Réseaux - Simulation",
                course: "Réseaux et Télécommunications",
                description: "Simuler un réseau local avec différents protocoles de routage et analyser les performances.",
                status: "upcoming",
                dueDate: "2025-02-10",
                progress: 0,
                priority: "medium",
                type: "simulation",
                estimatedHours: 8,
                submitted: false,
                attachments: ["network_topology.net"],
                notes: "Utiliser Cisco Packet Tracer"
            },
            {
                id: 8,
                title: "Mathématiques - Calcul Différentiel",
                course: "Mathématiques Avancées",
                description: "Résoudre une série d'exercices sur les dérivées partielles et les intégrales multiples.",
                status: "completed",
                dueDate: "2025-01-18",
                progress: 100,
                priority: "low",
                type: "homework",
                estimatedHours: 4,
                submitted: true,
                attachments: ["solutions.pdf"],
                notes: "Tous les exercices résolus correctement"
            }
        ];
        
        this.currentFilter = 'all';
        this.selectedAssignment = null;
        
        this.init();
    }

    init() {
        this.updateStats();
        this.displayAssignments();
        this.displayTimeline();
        this.bindEvents();
    }

    bindEvents() {
        window.filterAssignments = (filter) => this.filterAssignments(filter);
        window.selectAssignment = (assignmentId) => this.selectAssignment(assignmentId);
        window.createAssignment = () => this.createAssignment();
        window.editAssignment = (assignmentId) => this.editAssignment(assignmentId);
        window.deleteAssignment = (assignmentId) => this.deleteAssignment(assignmentId);
        window.markAsCompleted = (assignmentId) => this.markAsCompleted(assignmentId);
        window.updateProgress = (assignmentId, progress) => this.updateProgress(assignmentId, progress);
    }

    updateStats() {
        const urgentCount = this.assignments.filter(a => a.status === 'urgent').length;
        const inProgressCount = this.assignments.filter(a => a.status === 'in-progress').length;
        const completedCount = this.assignments.filter(a => a.status === 'completed').length;
        const upcomingCount = this.assignments.filter(a => a.status === 'upcoming').length;

        document.getElementById('urgent-count').textContent = urgentCount;
        document.getElementById('progress-count').textContent = inProgressCount;
        document.getElementById('completed-count').textContent = completedCount;
        document.getElementById('upcoming-count').textContent = upcomingCount;
    }

    filterAssignments(filter) {
        this.currentFilter = filter;
        this.displayAssignments();
        
        // Mettre à jour les boutons de filtre
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }

    displayAssignments() {
        const assignmentsList = document.getElementById('assignments-list');
        if (!assignmentsList) return;
        
        let filteredAssignments = this.assignments;
        
        // Appliquer le filtre
        if (this.currentFilter !== 'all') {
            filteredAssignments = this.assignments.filter(assignment => assignment.status === this.currentFilter);
        }
        
        // Trier par priorité et date d'échéance
        filteredAssignments.sort((a, b) => {
            if (a.status === 'urgent' && b.status !== 'urgent') return -1;
            if (b.status === 'urgent' && a.status !== 'urgent') return 1;
            return new Date(a.dueDate) - new Date(b.dueDate);
        });
        
        if (filteredAssignments.length === 0) {
            assignmentsList.innerHTML = `
                <div class="empty-assignments">
                    <i class="ph ph-notebook"></i>
                    <h3>Aucun devoir trouvé</h3>
                    <p>${this.currentFilter === 'all' ? 'Vous n\'avez pas encore de devoirs.' : `Aucun devoir avec le statut "${this.currentFilter}" trouvé.`}</p>
                    <button class="add-assignment-btn" onclick="createAssignment()">
                        <i class="ph ph-plus"></i> Créer un devoir
                    </button>
                </div>
            `;
            return;
        }
        
        let html = '';
        filteredAssignments.forEach(assignment => {
            html += this.createAssignmentItem(assignment);
        });
        
        assignmentsList.innerHTML = html;
    }

    createAssignmentItem(assignment) {
        const isSelected = this.selectedAssignment && this.selectedAssignment.id === assignment.id;
        const selectedClass = isSelected ? 'selected' : '';
        const dueDate = new Date(assignment.dueDate);
        const daysLeft = Math.ceil((dueDate - new Date()) / (1000 * 60 * 60 * 24));
        const dueText = daysLeft < 0 ? 'En retard' : daysLeft === 0 ? 'Aujourd\'hui' : `${daysLeft} jour${daysLeft > 1 ? 's' : ''}`;
        
        return `
            <div class="assignment-item ${selectedClass}" onclick="selectAssignment(${assignment.id})">
                <div class="assignment-header">
                    <div>
                        <h3 class="assignment-title">${assignment.title}</h3>
                        <p class="assignment-course">${assignment.course}</p>
                    </div>
                    <div class="assignment-status ${assignment.status}">${this.getStatusText(assignment.status)}</div>
                </div>
                <div class="assignment-details">
                    <div class="assignment-due">
                        <i class="ph ph-calendar"></i>
                        <span>${dueText}</span>
                    </div>
                    <div class="assignment-progress">
                        <span>${assignment.progress}%</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${assignment.progress}%"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getStatusText(status) {
        const statuses = {
            'urgent': 'Urgent',
            'in-progress': 'En cours',
            'completed': 'Terminé',
            'upcoming': 'À venir'
        };
        return statuses[status] || status;
    }

    selectAssignment(assignmentId) {
        this.selectedAssignment = this.assignments.find(assignment => assignment.id === assignmentId);
        this.displayAssignmentDetails();
        this.updateSelectedState(assignmentId);
    }

    updateSelectedState(assignmentId) {
        // Retirer la sélection de tous les éléments
        document.querySelectorAll('.assignment-item').forEach(item => {
            item.classList.remove('selected');
        });
        
        // Ajouter la sélection à l'élément cliqué
        const selectedItem = document.querySelector(`[onclick="selectAssignment(${assignmentId})"]`);
        if (selectedItem) {
            selectedItem.classList.add('selected');
        }
    }

    displayAssignmentDetails() {
        const detailsContent = document.getElementById('assignment-details');
        if (!detailsContent) return;
        
        if (!this.selectedAssignment) {
            detailsContent.innerHTML = `
                <div class="empty-details">
                    <div class="empty-icon">
                        <i class="ph ph-notebook"></i>
                    </div>
                    <h3>Sélectionnez un devoir</h3>
                    <p>Cliquez sur un devoir pour voir les détails et les actions disponibles</p>
                </div>
            `;
            return;
        }
        
        const assignment = this.selectedAssignment;
        const dueDate = new Date(assignment.dueDate).toLocaleDateString('fr-FR');
        const priorityText = this.getPriorityText(assignment.priority);
        
        detailsContent.innerHTML = `
            <div class="assignment-detail-content active">
                <div class="detail-section">
                    <h3><i class="ph ph-info"></i> Informations générales</h3>
                    <div class="detail-item">
                        <i class="ph ph-book"></i>
                        <strong>Cours:</strong>
                        <span>${assignment.course}</span>
                    </div>
                    <div class="detail-item">
                        <i class="ph ph-calendar"></i>
                        <strong>Date limite:</strong>
                        <span>${dueDate}</span>
                    </div>
                    <div class="detail-item">
                        <i class="ph ph-trend-up"></i>
                        <strong>Priorité:</strong>
                        <span>${priorityText}</span>
                    </div>
                    <div class="detail-item">
                        <i class="ph ph-clock"></i>
                        <strong>Heures estimées:</strong>
                        <span>${assignment.estimatedHours}h</span>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3><i class="ph ph-file-text"></i> Description</h3>
                    <div class="detail-description">
                        ${assignment.description}
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3><i class="ph ph-paperclip"></i> Fichiers joints</h3>
                    ${assignment.attachments.length > 0 ? 
                        assignment.attachments.map(file => `
                            <div class="detail-item">
                                <i class="ph ph-file"></i>
                                <span>${file}</span>
                            </div>
                        `).join('') : 
                        '<p style="color: var(--c-text-tertiary);">Aucun fichier joint</p>'
                    }
                </div>
                
                <div class="detail-section">
                    <h3><i class="ph ph-note"></i> Notes</h3>
                    <div class="detail-description">
                        ${assignment.notes}
                    </div>
                </div>
                
                <div class="detail-actions">
                    <button class="detail-btn secondary" onclick="editAssignment(${assignment.id})">
                        <i class="ph ph-pencil"></i> Modifier
                    </button>
                    ${assignment.status !== 'completed' ? 
                        `<button class="detail-btn primary" onclick="markAsCompleted(${assignment.id})">
                            <i class="ph ph-check"></i> Marquer comme terminé
                        </button>` : 
                        `<button class="detail-btn primary" onclick="viewSubmission(${assignment.id})">
                            <i class="ph ph-eye"></i> Voir la soumission
                        </button>`
                    }
                </div>
            </div>
        `;
    }

    getPriorityText(priority) {
        const priorities = {
            'high': 'Élevée',
            'medium': 'Moyenne',
            'low': 'Faible'
        };
        return priorities[priority] || priority;
    }

    displayTimeline() {
        const timelineContainer = document.getElementById('timeline-container');
        if (!timelineContainer) return;
        
        const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
        const today = new Date();
        const currentDay = today.getDay();
        
        let html = '';
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() - currentDay + i + 1);
            
            const dayName = days[i];
            const dayDate = date.getDate();
            const isToday = i === currentDay - 1;
            const todayClass = isToday ? 'today' : '';
            
            // Compter les devoirs pour ce jour
            const dayAssignments = this.assignments.filter(assignment => {
                const assignmentDate = new Date(assignment.dueDate);
                return assignmentDate.toDateString() === date.toDateString();
            });
            
            const progressText = dayAssignments.length > 0 ? `${dayAssignments.length} devoir${dayAssignments.length > 1 ? 's' : ''}` : 'Aucun';
            
            html += `
                <div class="timeline-day ${todayClass}">
                    <div class="day-name">${dayName}</div>
                    <div class="day-date">${dayDate}</div>
                    <div class="day-progress">${progressText}</div>
                </div>
            `;
        }
        
        timelineContainer.innerHTML = html;
    }

    createAssignment() {
        console.log('Créer un nouveau devoir');
        alert('Fonctionnalité de création de devoir à venir !');
    }

    editAssignment(assignmentId) {
        console.log('Éditer le devoir:', assignmentId);
        alert('Fonctionnalité d\'édition de devoir à venir !');
    }

    deleteAssignment(assignmentId) {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce devoir ?')) {
            const index = this.assignments.findIndex(assignment => assignment.id === assignmentId);
            if (index > -1) {
                this.assignments.splice(index, 1);
                this.updateStats();
                this.displayAssignments();
                this.displayAssignmentDetails();
            }
        }
    }

    markAsCompleted(assignmentId) {
        const assignment = this.assignments.find(a => a.id === assignmentId);
        if (assignment) {
            assignment.status = 'completed';
            assignment.progress = 100;
            assignment.submitted = true;
            this.updateStats();
            this.displayAssignments();
            this.displayAssignmentDetails();
        }
    }

    updateProgress(assignmentId, progress) {
        const assignment = this.assignments.find(a => a.id === assignmentId);
        if (assignment) {
            assignment.progress = Math.min(100, Math.max(0, progress));
            if (assignment.progress === 100) {
                assignment.status = 'completed';
            } else if (assignment.progress > 0) {
                assignment.status = 'in-progress';
            }
            this.updateStats();
            this.displayAssignments();
            this.displayAssignmentDetails();
        }
    }

    getAssignmentsByStatus(status) {
        return this.assignments.filter(assignment => assignment.status === status);
    }

    getAllAssignments() {
        return this.assignments;
    }
}

class AssignmentsApp {
    constructor() {
        this.assignmentsManager = new AssignmentsManager();
    }
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    window.assignmentsApp = new AssignmentsApp();
}); 