


// ===== PROFIL (ONGLETS ET ANIMATIONS) =====
class ProfileTabManager {
    constructor() {
        this.initEventListeners();
    }
    initEventListeners() {
        // Remplacer les onclick par des event listeners
        document.querySelectorAll('[onclick^="showTab"]').forEach(tab => {
            const onclick = tab.getAttribute('onclick');
            const tabName = onclick.match(/showTab\('([^']+)'\)/)?.[1];
            if (tabName) {
                tab.removeAttribute('onclick');
                tab.addEventListener('click', () => this.showTab(tabName));
            }
        });
    }
    showTab(tabName) {
        document.getElementById('courses-tab').style.display = 'none';
        document.getElementById('achievements-tab').style.display = 'none';
        document.getElementById('settings-tab').style.display = 'none';
        document.querySelectorAll('.profile-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        if (tabName === 'courses') {
            document.getElementById('courses-tab').style.display = 'block';
            document.querySelectorAll('.profile-tab')[0].classList.add('active');
        } else if (tabName === 'achievements') {
            document.getElementById('achievements-tab').style.display = 'block';
            document.querySelectorAll('.profile-tab')[1].classList.add('active');
        } else if (tabName === 'settings') {
            document.getElementById('settings-tab').style.display = 'block';
            document.querySelectorAll('.profile-tab')[2].classList.add('active');
        }
    }
}

class ProfileAnimationManager {
    constructor() {
        this.animateProgressBars();
        this.animateAchievements();
        this.saveButtonFeedback();
        this.animateStats();
    }
    animateProgressBars() {
        const progressBars = document.querySelectorAll('.course-progress-bar');
        progressBars.forEach((bar, index) => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100 + (index * 100));
        });
    }
    animateAchievements() {
        const achievementCards = document.querySelectorAll('.achievement-card');
        achievementCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 + (index * 100));
        });
    }
    saveButtonFeedback() {
        const saveBtn = document.querySelector('.save-btn');
        if (saveBtn) {
            saveBtn.addEventListener('click', function() {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="ph ph-check-circle"></i> Enregistré !';
                this.style.background = 'var(--c-success)';
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = 'var(--c-accent)';
                }, 2000);
            });
        }
    }
    animateStats() {
        const stats = document.querySelectorAll('.profile-stat-value');
        stats.forEach(stat => {
            const finalValue = stat.textContent;
            const isPercentage = finalValue.includes('%');
            const isDecimal = finalValue.includes('.');
            let currentValue = 0;
            const increment = isDecimal ? 0.1 : 1;
            const duration = 1500;
            const steps = isDecimal ? 158 : (isPercentage ? 92 : parseInt(finalValue));
            const stepDuration = duration / steps;
            const counter = setInterval(() => {
                if (isDecimal) {
                    currentValue += increment;
                    if (currentValue >= parseFloat(finalValue)) {
                        stat.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        stat.textContent = currentValue.toFixed(1);
                    }
                } else if (isPercentage) {
                    currentValue += increment;
                    if (currentValue >= parseInt(finalValue)) {
                        stat.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        stat.textContent = currentValue + '%';
                    }
                } else {
                    currentValue += increment;
                    if (currentValue >= parseInt(finalValue)) {
                        stat.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        stat.textContent = currentValue;
                    }
                }
            }, stepDuration);
        });
    }
}



// ===== APPLICATION PRINCIPALE =====
class ProfileApp {
    constructor() {
        this.profileTabManager = new ProfileTabManager();
        this.profileAnimationManager = new ProfileAnimationManager();

        
    }
}


// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    window.profileApp = new ProfileApp();
});