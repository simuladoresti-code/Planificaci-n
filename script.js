// ===== CONFIGURACIÓN =====
const WEDDING_DATE = new Date('2026-09-30T16:00:00');
const WHATSAPP_NUMBER = '51999888777';

// ===== DOM ELEMENTS =====
const loadingScreen = document.getElementById('loading-screen');
const app = document.getElementById('app');
const musicControl = document.getElementById('musicControl');
const bgMusic = document.getElementById('bgMusic');
const envelope = document.getElementById('envelope');
const envelopeHint = document.getElementById('envelope-hint');
const envelopeSeal = document.getElementById('envelope-seal');
const musicOverlay = document.getElementById('musicOverlay');

// ===== SCROLL TO SECTION =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            app.classList.remove('hidden');
            initAnimations();
        }, 800);
    }, 2800);
});

// ===== MUSIC OVERLAY =====
if (musicOverlay) {
    musicOverlay.addEventListener('click', () => {
        // Reproducir música con gesto del usuario
        bgMusic.play().then(() => {
            isPlaying = true;
            musicControl.classList.add('playing');
            musicOverlay.classList.add('hidden');
            setTimeout(() => {
                musicOverlay.style.display = 'none';
            }, 500);
        }).catch(() => {
            showToast('No se pudo reproducir la música');
        });
    });
}

// ===== ENVELOPE ANIMATION =====
let envelopeOpened = false;

function openEnvelope() {
    if (envelopeOpened) return;
    envelopeOpened = true;
    
    envelope.classList.add('opened');
    envelopeHint.textContent = '¡Tienes una invitación!';
    envelopeHint.style.animation = 'none';
    envelopeHint.style.opacity = '1';
    
    // Si la música no está sonando, intentar reproducirla
    if (!isPlaying) {
        bgMusic.play().then(() => {
            isPlaying = true;
            musicControl.classList.add('playing');
        }).catch(() => {
            showToast('Toca el botón de música');
        });
    }
    
    setTimeout(() => {
        scrollToSection('hero');
    }, 2500);
}

if (envelope) {
    envelope.addEventListener('click', openEnvelope);
    envelope.addEventListener('touchend', (e) => {
        e.preventDefault();
        openEnvelope();
    });
}

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
    const now = new Date();
    const diff = WEDDING_DATE - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ===== MUSIC CONTROL =====
let isPlaying = false;

musicControl.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicControl.classList.remove('playing');
    } else {
        bgMusic.play().catch(() => {
            showToast('No se pudo reproducir la música');
        });
        musicControl.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// ===== COPY TO CLIPBOARD =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Número copiado al portapapeles');
        
        // Animación del botón
        event.target.closest('.copy-btn').classList.add('copied');
        event.target.closest('.copy-btn').innerHTML = '<i class="fas fa-check"></i> Copiado';
        
        setTimeout(() => {
            event.target.closest('.copy-btn').classList.remove('copied');
            event.target.closest('.copy-btn').innerHTML = '<i class="fas fa-copy"></i> Copiar';
        }, 2000);
    }).catch(() => {
        showToast('Error al copiar');
    });
}

// ===== TOAST NOTIFICATION =====
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== SCROLL ANIMATIONS =====
function initAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                const animateElements = entry.target.querySelectorAll(
                    '.invitation-card, .event-card, .gift-card, .gallery-item, .timeline-item, .rsvp-card'
                );
                
                animateElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('fade-in', 'visible');
                    }, index * 100);
                });
            }
        });
    }, {
        threshold: 0.2
    });
    
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// ===== GALLERY LIGHTBOX =====
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        showToast('Galería de fotos - Próximamente');
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SHARE FUNCTIONALITY =====
function shareInvitation() {
    if (navigator.share) {
        navigator.share({
            title: 'Invitación de Boda - Margie & Cristian',
            text: '¡Estás invitado a nuestra boda!',
            url: window.location.href
        }).catch(() => {
            console.log('Error al compartir');
        });
    } else {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('Enlace copiado al portapapeles');
        });
    }
}

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.getElementById('hero');
    
    if (hero) {
        const hearts = hero.querySelectorAll('.heart');
        hearts.forEach((heart, index) => {
            const speed = 0.5 + (index * 0.1);
            heart.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
});

// ===== TOUCH EFFECTS =====
document.querySelectorAll('.event-card, .gift-card, .gallery-item').forEach(card => {
    card.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.98)';
    });
    
    card.addEventListener('touchend', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===== HIDE SCROLL INDICATOR ON SCROLL =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        const src = img.getAttribute('data-src');
        if (src) {
            img.src = src;
        }
    });
});

// ===== CONSOLE MESSAGE =====
console.log(`
%c¡Bienvenido a nuestra invitación de boda! 💒
%cMargie & Cristian - 30 de Septiembre 2026
%cHecho con amor ❤️
`, 
'font-size: 20px; color: #8b5a2b; font-weight: bold;',
'font-size: 14px; color: #d4a574;',
'font-size: 12px; color: #c9a86c;'
);
