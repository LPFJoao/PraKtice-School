
// ===== ANIMATION SHREK =====
class ShrekAnimationManager {
    constructor() {
        this.shrekImages = [
            "../../../assets/canvas.png",
            "../../../assets/canvas2.png",
            "../../../assets/canvas3.png",
            "../../../assets/canvas4.png",
            "../../../assets/canvas5.png",
            "../../../assets/canvas6.png"
        ];
        this.startInterval();
    }
    randomEdgePosition(imgWidth, imgHeight) {
        const side = Math.floor(Math.random() * 4);
        let x = 0, y = 0, transform = '';
        switch (side) {
            case 0: // gauche
                x = -imgWidth;
                y = Math.random() * (window.innerHeight - imgHeight);
                transform = `translateX(${imgWidth}px)`;
                break;
            case 1: // haut
                x = Math.random() * (window.innerWidth - imgWidth);
                y = -imgHeight;
                transform = `translateY(${imgHeight}px)`;
                break;
            case 2: // droite
                x = window.innerWidth;
                y = Math.random() * (window.innerHeight - imgHeight);
                transform = `translateX(-${imgWidth}px)`;
                break;
            case 3: // bas
                x = Math.random() * (window.innerWidth - imgWidth);
                y = window.innerHeight;
                transform = `translateY(-${imgHeight}px)`;
                break;
        }
        return { x, y, transform };
    }
    showRandomShrekHead() {
        const imgSrc = this.shrekImages[Math.floor(Math.random() * this.shrekImages.length)];
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = "Shrek";
        img.className = "shrek-head";
        img.style.position = "fixed";
        img.style.zIndex = 3000;
        img.style.width = "120px";
        img.style.height = "auto";
        img.style.transition = "transform 1.2s cubic-bezier(.77,0,.18,1.01), opacity 0.8s";
        img.style.opacity = 0;
        img.style.pointerEvents = "none";
        img.style.display = "block";
        document.body.appendChild(img);
        const imgWidth = 120;
        const imgHeight = 120;
        const { x, y, transform } = this.randomEdgePosition(imgWidth, imgHeight);
        img.style.left = x + 'px';
        img.style.top = y + 'px';
        img.style.transform = 'none';
        img.style.opacity = 0;
        setTimeout(() => {
            img.style.transform = transform;
            img.style.opacity = 1;
        }, 50);
        setTimeout(() => {
            img.style.opacity = 0;
            setTimeout(() => {
                img.remove();
            }, 1000);
        }, 1000 + Math.random() * 2000);
    }
    startInterval() {
        setInterval(() => {
            if (Math.random() < 0.5) this.showRandomShrekHead();
        }, 100);
    }
}

// ===== APPLICATION PRINCIPALE =====
class HomeDashboard {
    constructor() {
        this.shrekAnimationManager = new ShrekAnimationManager();   

    }
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {

    window.priceTestApp = new HomeDashboard();
z
});

