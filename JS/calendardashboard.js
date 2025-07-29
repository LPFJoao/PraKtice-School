
// ===== GESTION DU CALENDRIER =====
class CalendarManager {
    constructor() {
        this.events = [
            {
                id: 1,
                title: "Cours de Mathématiques",
                description: "Algèbre linéaire - Salle A101",
                startTime: "09:00",
                endTime: "11:00",
                date: "2025-01-23",
                type: "course",
                color: "#4a90e2"
            },
            {
                id: 2,
                title: "TP Programmation",
                description: "Développement Web - Salle Info 2",
                startTime: "14:00",
                endTime: "16:30",
                date: "2025-01-23",
                type: "lab",
                color: "#27ae60"
            },
            {
                id: 3,
                title: "Pause Déjeuner",
                description: "Cafétéria étudiante",
                startTime: "12:00",
                endTime: "13:00",
                date: "2025-01-23",
                type: "break",
                color: "#f39c12"
            },
            {
                id: 4,
                title: "Réunion Groupe",
                description: "Préparation présentation finale - Salle B105",
                startTime: "16:00",
                endTime: "17:00",
                date: "2025-01-24",
                type: "meeting",
                color: "#e67e22"
            },
            {
                id: 5,
                title: "Cours de Physique",
                description: "Mécanique quantique - Salle B203",
                startTime: "10:00",
                endTime: "12:00",
                date: "2025-01-24",
                type: "course",
                color: "#9b59b6"
            },
            {
                id: 6,
                title: "Séminaire",
                description: "Intelligence Artificielle - Amphi C",
                startTime: "08:30",
                endTime: "09:30",
                date: "2025-01-23",
                type: "seminar",
                color: "#e74c3c"
            }
        ];
        
        this.currentDate = new Date();
        this.selectedDate = new Date();
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();
        
        this.init();
    }

    init() {
        this.updateCalendarDisplay();
        this.generateMiniCalendar();
        this.bindEvents();
    }

    bindEvents() {
        window.changeDate = (direction) => this.changeDate(direction);
        window.goToToday = () => this.goToToday();
        window.changeMonth = (direction) => this.changeMonth(direction);
        window.selectDate = (dateString) => this.selectDate(dateString);
        window.editEvent = (eventId) => this.editEvent(eventId);
        window.shareEvent = (eventId) => this.shareEvent(eventId);
    }

    formatDate(date) {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('fr-FR', options);
    }

    getMonthName(month) {
        const months = [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
            'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ];
        return months[month];
    }
    // Fonction pour changer la date en fonction de la direction
    changeDate(direction) {
        this.selectedDate.setDate(this.selectedDate.getDate() + direction);
        this.updateCalendarDisplay();
    }
    // Fonction pour aller à la date d'aujourd'hui button vert
    goToToday() {
        this.selectedDate = new Date();
        this.currentDate = new Date();
        this.currentMonth = this.selectedDate.getMonth();
        this.currentYear = this.selectedDate.getFullYear();
        this.updateCalendarDisplay();
    }
    // Fonction pour changer le mois en fonction de la direction (droit ou gauche)
    changeMonth(direction) {
        this.currentMonth += direction;
        if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear++;
        } else if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        this.generateMiniCalendar();
    }
    // Fonction pour generer le mini-calendrier a droite du calendrier principal
    generateMiniCalendar() {
        const calendarBody = document.getElementById('calendar-body');
        const monthDisplay = document.getElementById('calendar-month');
        
        if (!calendarBody || !monthDisplay) return;
        
        monthDisplay.textContent = `${this.getMonthName(this.currentMonth)} ${this.currentYear}`;
        
        // Obtenir le premier jour du mois
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay() + 1);
        
        let html = '';
        let currentRow = '';
        
        for (let i = 0; i < 39; i++) {
            const currentCellDate = new Date(startDate);
            currentCellDate.setDate(startDate.getDate() + i);
            
            const isCurrentMonth = currentCellDate.getMonth() === this.currentMonth;
            const isToday = currentCellDate.toDateString() === new Date().toDateString();
            const isSelected = currentCellDate.toDateString() === this.selectedDate.toDateString();
            const hasEvents = this.hasEventsOnDate(currentCellDate);
            
            let cellClass = '';
            if (!isCurrentMonth) cellClass += ' other-month';
            if (isToday) cellClass += ' today';
            if (isSelected) cellClass += ' selected';
            if (hasEvents) cellClass += ' has-event';
            
            currentRow += `<td class="${cellClass}" onclick="selectDate('${currentCellDate.toISOString()}')">${currentCellDate.getDate()}</td>`;
            
            if ((i + 1) % 7 === 0) {
                html += `<tr>${currentRow}</tr>`;
                currentRow = '';
            }
        }
        
        calendarBody.innerHTML = html;
    }

    hasEventsOnDate(date) {
        const dateStr = date.toISOString().split('T')[0];
        return this.events.some(event => event.date === dateStr);
    }

    selectDate(dateString) {
        this.selectedDate = new Date(dateString);
        this.updateCalendarDisplay();
    }

    updateCalendarDisplay() {
        // Mettre a jour les dates affichees
        const pageSubtitle = document.getElementById('page-subtitle');
        const agendaDate = document.getElementById('agenda-date');
        
        if (pageSubtitle) pageSubtitle.textContent = this.formatDate(this.selectedDate);
        if (agendaDate) agendaDate.textContent = this.formatDate(this.selectedDate);
        
        // Mettre a jour le mini-calendrier
        this.currentMonth = this.selectedDate.getMonth();
        this.currentYear = this.selectedDate.getFullYear();
        this.generateMiniCalendar();
        
        // Mettre a jour les evenements de l'agenda
        this.displayAgendaEvents();
    }

    displayAgendaEvents() {
        const agendaEvents = document.getElementById('agenda-events');
        if (!agendaEvents) return;
        
        const selectedDateStr = this.selectedDate.toISOString().split('T')[0];
        const dayEvents = this.events.filter(event => event.date === selectedDateStr);
        
        const existingEvents = agendaEvents.querySelectorAll('.agenda-event');
        existingEvents.forEach(event => event.remove());
        
        dayEvents.forEach(event => {
            const eventElement = this.createEventElement(event);
            agendaEvents.appendChild(eventElement);
        });
    }

    createEventElement(event) {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'agenda-event';
        eventDiv.style.backgroundColor = event.color + '15';
        eventDiv.style.borderLeftColor = event.color;
        
        // Calculer la position et la hauteur
        const startHour = parseInt(event.startTime.split(':')[0]);
        const startMinute = parseInt(event.startTime.split(':')[1]);
        const endHour = parseInt(event.endTime.split(':')[0]);
        const endMinute = parseInt(event.endTime.split(':')[1]);
        
        const startMinutes = startHour * 60 + startMinute;
        const endMinutes = endHour * 60 + endMinute;
        const duration = endMinutes - startMinutes;
        
        // Configuration du calendrier : 8h-17h (10 heures), hauteur totale 600px
        const CALENDAR_START_HOUR = 8;
        const CALENDAR_END_HOUR = 18; // 17h59 max
        const CALENDAR_HEIGHT = 600; // hauteur en pixels
        const TOTAL_HOURS = CALENDAR_END_HOUR - CALENDAR_START_HOUR; // 10 heures
        const PIXELS_PER_MINUTE = CALENDAR_HEIGHT / (TOTAL_HOURS * 60);
        console.log(PIXELS_PER_MINUTE);
        
        
        // Calculer la position depuis le début du calendrier (8h)
        const startMinutesFromBeginning = startMinutes - (CALENDAR_START_HOUR * 60);
        const top = Math.max(0, startMinutesFromBeginning * PIXELS_PER_MINUTE);
        const height = duration * PIXELS_PER_MINUTE;
        
        // Vérifier que l'événement est dans la plage horaire visible
        if (startHour < CALENDAR_START_HOUR || startHour >= CALENDAR_END_HOUR) {
            console.warn(`Événement "${event.title}" en dehors des heures d'affichage (${CALENDAR_START_HOUR}h-${CALENDAR_END_HOUR-1}h)`);
        }
        
        eventDiv.style.top = `${top}px`;
        eventDiv.style.height = `${Math.max(20, height)}px`; // hauteur minimale de 20px
        
        eventDiv.innerHTML = `
            <div class="event-title">${event.title}</div>
            <div class="event-time">${event.startTime} - ${event.endTime}</div>
            <div class="event-desc">${event.description}</div>
        `;
        
        eventDiv.addEventListener('click', () => this.showEventDetails(event));
        
        return eventDiv;
    }

    showEventDetails(event) {
        const eventDetails = document.getElementById('event-details');
        if (!eventDetails) return;
        
        if (!event) {
            eventDetails.innerHTML = `
                <h3><i class="ph ph-calendar-check"></i> Détail de l'événement</h3>
                <p style="text-align: center; color: var(--c-text-tertiary); margin-top: 2rem;">
                    Cliquez sur un événement pour voir les détails
                </p>
            `;
            return;
        }
        
        const startTime = event.startTime;
        const endTime = event.endTime;
        const isAllDay = startTime === "00:00" && endTime === "23:59";
        
        eventDetails.innerHTML = `
            <h3><i class="ph ph-calendar-check"></i> Détail de l'événement</h3>
            <div class="event-detail-item">
                <i class="ph ph-bookmark"></i>
                <strong>Type:</strong> ${this.getEventTypeName(event.type)}
            </div>
            <div class="event-detail-item">
                <i class="ph ph-clock"></i>
                <strong>Horaire:</strong> ${isAllDay ? 'Toute la journée' : `${startTime} - ${endTime}`}
            </div>
            <div class="event-detail-item">
                <i class="ph ph-map-pin"></i>
                <strong>Lieu:</strong> ${event.description.split(' - ')[1] || 'Non spécifié'}
            </div>
            <div class="event-description">
                ${event.description}
            </div>
            <div class="event-actions">
                <button class="event-action-btn secondary" onclick="editEvent(${event.id})">
                    <i class="ph ph-pencil"></i> Modifier
                </button>
                <button class="event-action-btn primary" onclick="shareEvent(${event.id})">
                    <i class="ph ph-share-network"></i> Partager
                </button>
            </div>
        `;
    }

    getEventTypeName(type) {
        const types = {
            'course': 'Cours',
            'lab': 'Travaux Pratiques',
            'assignment': 'Devoir',
            'meeting': 'Réunion',
            'exam': 'Examen'
        };
        return types[type] || type;
    }

    editEvent(eventId) {
        console.log('Éditer l\'événement:', eventId);
        alert('Fonctionnalité d\'édition à venir !');
    }

    //deleteEvent(eventId) {
        //if (confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
        //    const index = this.events.findIndex(event => event.id === eventId);
        //    if (index > -1) {
        //        this.events.splice(index, 1);
        //        this.displayAgendaEvents();
        //        this.generateMiniCalendar();
        //        this.showEventDetails(null);
        //    }
        //}
    //}

    shareEvent(eventId) {
        console.log('Partager l\'événement:', eventId);
        alert('Fonctionnalité de partage à venir !');
    }

    addEvent(eventData) {
        const newEvent = {
            id: Date.now(), // Générer un ID unique
            ...eventData
        };
        this.events.push(newEvent);
        this.updateCalendarDisplay();
        return newEvent;
    }

    getEventsForDate(date) {
        const dateStr = date.toISOString().split('T')[0];
        return this.events.filter(event => event.date === dateStr);
    }

    getAllEvents() {
        return this.events;
    }
}


class CalendarApp {
    constructor() {
        this.calendarManager = new CalendarManager();
    }
}


// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    window.calendarApp = new CalendarApp();
});