
 // Anima os cards quando entram na tela
const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
        }
    });
}, { threshold: 0.2 });

skillCards.forEach(card => observer.observe(card));


// ------------------------------
// DARK MODE COMPLETO E CORRIGIDO
// ------------------------------

const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;

function applyTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';  
        toggleBtn.setAttribute('aria-pressed', 'true');
        toggleBtn.setAttribute('aria-label', 'Ativar modo claro');
    } else {
        body.classList.remove('dark-mode');
        toggleBtn.textContent = '🌙';
        toggleBtn.setAttribute('aria-pressed', 'false');
        toggleBtn.setAttribute('aria-label', 'Ativar modo escuro');
    }
}

function systemPrefersDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function initTheme() {
    const saved = localStorage.getItem('site-theme');

    if (saved === 'dark') {
        applyTheme(true);
    } else if (saved === 'light') {
        applyTheme(false);
    } else {
        applyTheme(systemPrefersDark());
    }
}

function toggleTheme() {
    const isDark = body.classList.contains('dark-mode');
    applyTheme(!isDark);
    localStorage.setItem('site-theme', !isDark ? 'dark' : 'light');
}

toggleBtn.addEventListener('click', toggleTheme);

initTheme();
