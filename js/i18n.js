/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Multilingual Engine (i18n)
 * Default Language: Marathi ('mr')
 */

class I18nEngine {
    constructor() {
        this.currentLang = localStorage.getItem('gurukrupa_lang') || 'mr';
        this.init();
    }

    init() {
        this.bindEvents();
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.applyTranslations();
                this.updateLanguageToggleUI();
            });
        } else {
            this.applyTranslations();
            this.updateLanguageToggleUI();
        }
    }

    setLanguage(lang) {
        if (lang !== 'mr' && lang !== 'en') return;
        this.currentLang = lang;
        localStorage.setItem('gurukrupa_lang', lang);
        this.applyTranslations();
        this.updateLanguageToggleUI();
        
        // Dispatch custom event for dynamic components
        const event = new CustomEvent('languageChanged', { detail: { lang } });
        window.dispatchEvent(event);
    }

    getTranslation(key) {
        if (!window.translations) return key;
        const dict = window.translations[this.currentLang] || window.translations['mr'];
        return dict[key] || (window.translations['mr'] ? window.translations['mr'][key] : key);
    }

    applyTranslations() {
        if (!window.translations) return;

        // Set HTML lang attribute
        document.documentElement.lang = this.currentLang;

        // 1. Text content elements
        const textElements = document.querySelectorAll('[data-i18n]');
        textElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                el.innerText = translation;
            }
        });

        // 2. HTML content elements (where formatting is needed)
        const htmlElements = document.querySelectorAll('[data-i18n-html]');
        htmlElements.forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const translation = this.getTranslation(key);
            if (translation) {
                el.innerHTML = translation;
            }
        });

        // 3. Form input placeholders
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = this.getTranslation(key);
            if (translation) {
                el.setAttribute('placeholder', translation);
            }
        });

        // 4. Accessibility aria-labels
        const ariaElements = document.querySelectorAll('[data-i18n-aria]');
        ariaElements.forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            const translation = this.getTranslation(key);
            if (translation) {
                el.setAttribute('aria-label', translation);
            }
        });
    }

    updateLanguageToggleUI() {
        const langBtns = document.querySelectorAll('.lang-btn');
        langBtns.forEach(btn => {
            const langVal = btn.getAttribute('data-lang');
            if (langVal === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('.lang-btn');
            if (target) {
                const lang = target.getAttribute('data-lang');
                if (lang) {
                    this.setLanguage(lang);
                }
            }
        });
    }
}

// Global instance
window.i18n = new I18nEngine();
