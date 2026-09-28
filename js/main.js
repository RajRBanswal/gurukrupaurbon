/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Main Application Logic, UI Handlers & Scroll Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initAnimatedCounters();
    initFormHandlers();
    initImagePlaceholders();
    initScrollAnimations();
    initJourneyTimelineAnimation();
});

/**
 * Header Scroll Effects & Glassmorphism
 */
function initHeaderScroll() {
    const header = document.querySelector('.header-nav');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.classList.add('glassmorphism');
        } else {
            header.classList.remove('glassmorphism');
        }
    });
}

/**
 * Animated Journey Stacking Timeline
 */
function initJourneyTimelineAnimation() {
    const stackRows = document.querySelectorAll('.journey-stack-row');
    if (!stackRows.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -30% 0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    stackRows.forEach(row => observer.observe(row));
}

/**
 * Smooth Scroll Animations (Sahayog Style Entrance Effect)
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Animated Stat Counters
 */
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endVal = parseInt(target.getAttribute('data-count'), 10);
                if (isNaN(endVal)) return;

                let startVal = 0;
                let duration = 1500; // ms
                let stepTime = 30;
                let steps = duration / stepTime;
                let increment = endVal / steps;

                let timer = setInterval(() => {
                    startVal += increment;
                    if (startVal >= endVal) {
                        target.innerText = endVal;
                        clearInterval(timer);
                    } else {
                        target.innerText = Math.ceil(startVal);
                    }
                }, stepTime);

                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

/**
 * Form Handling & Validation
 */
function initFormHandlers() {
    const complaintForm = document.getElementById('complaintForm');
    if (complaintForm) {
        complaintForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const refId = 'GK-' + Math.floor(100000 + Math.random() * 900000);
            const refEl = document.getElementById('complaintRefId');
            if (refEl) refEl.innerText = refId;

            const modalEl = document.getElementById('complaintSuccessModal');
            if (modalEl && typeof bootstrap !== 'undefined') {
                const modal = new bootstrap.Modal(modalEl);
                modal.show();
            } else {
                alert(`आपली तक्रार नोंदवली आहे. संदर्भ आयडी (Ref ID): ${refId}`);
            }

            complaintForm.reset();
        });
    }

    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('धन्यवाद! आपली चौकशी यशस्वीरित्या प्राप्त झाली आहे. आमचा प्रतिनिधी लवकरच आपल्याशी संपर्क साधेल.');
            enquiryForm.reset();
        });
    }
}

/**
 * SVG Dynamic Placeholder fallback for image slots
 */
function initImagePlaceholders() {
    const images = document.querySelectorAll('img[data-placeholder-title], img');
    images.forEach(img => {
        const handlePlaceholder = function() {
            const title = img.getAttribute('data-placeholder-title') || img.getAttribute('alt') || 'Gurukrupa Urban';
            const iconType = img.getAttribute('data-placeholder-icon') || 'bi-building';
            
            let iconSymbol = '🏦';
            if (iconType.includes('piggy') || title.includes('ठेव') || title.includes('Deposit')) iconSymbol = '💰';
            else if (iconType.includes('briefcase') || iconType.includes('cash') || title.includes('कर्ज') || title.includes('Loan')) iconSymbol = '💼';
            else if (iconType.includes('newspaper') || title.includes('बातमी') || title.includes('News')) iconSymbol = '📰';
            else if (iconType.includes('award') || title.includes('पुरस्कार') || title.includes('Award')) iconSymbol = '🏆';
            else if (iconType.includes('person') || title.includes('संचालक') || title.includes('Director')) iconSymbol = '👤';
            else if (iconType.includes('calculator') || title.includes('गणक') || title.includes('Calculator')) iconSymbol = '📊';

            const svg = `
                <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
                    <defs>
                        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#0F292F"/>
                            <stop offset="100%" stop-color="#12343B"/>
                        </linearGradient>
                        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#08A6A0"/>
                            <stop offset="100%" stop-color="#70E4D7"/>
                        </linearGradient>
                    </defs>
                    <rect width="800" height="500" fill="url(#bgGrad)"/>
                    <circle cx="400" cy="200" r="140" fill="#08A6A0" opacity="0.08"/>
                    <circle cx="400" cy="200" r="90" fill="#08A6A0" opacity="0.12"/>
                    <rect x="20" y="20" width="760" height="460" rx="16" fill="none" stroke="#08A6A0" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="6 6"/>
                    <circle cx="120" cy="100" r="40" fill="url(#accentGrad)" opacity="0.1"/>
                    <circle cx="680" cy="400" r="60" fill="url(#accentGrad)" opacity="0.1"/>
                    <text x="50%" y="205" dominant-baseline="middle" text-anchor="middle" font-size="64">${iconSymbol}</text>
                    <text x="50%" y="320" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="700" letter-spacing="0.5">${title}</text>
                    <rect x="250" y="360" width="300" height="32" rx="16" fill="url(#accentGrad)" opacity="0.2"/>
                    <text x="50%" y="378" dominant-baseline="middle" text-anchor="middle" fill="#70E4D7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" letter-spacing="1">GURUKRUPA URBAN CO-OP</text>
                </svg>
            `;
            img.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
        };

        img.addEventListener('error', handlePlaceholder);
        if (!img.getAttribute('src')) {
            handlePlaceholder();
        }
    });
}
