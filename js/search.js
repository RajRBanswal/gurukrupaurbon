/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Global Search Overlay & Live Search Engine
 */

class SiteSearchEngine {
    constructor() {
        this.searchIndex = [];
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.buildIndex();
            this.bindSearchEvents();
        });
    }

    buildIndex() {
        this.searchIndex = [];

        // 1. Index Loans
        if (window.loansData) {
            window.loansData.forEach(loan => {
                this.searchIndex.push({
                    title: loan.title,
                    desc: loan.shortDesc,
                    url: `loans.html#${loan.id}`,
                    type: { mr: "कर्ज योजना", en: "Loan Scheme" }
                });
            });
        }

        // 2. Index Deposits
        if (window.depositsData) {
            window.depositsData.forEach(dep => {
                this.searchIndex.push({
                    title: dep.title,
                    desc: dep.shortDesc,
                    url: `deposits.html#${dep.id}`,
                    type: { mr: "ठेव योजना", en: "Deposit Scheme" }
                });
            });
        }

        // 3. Index Services
        if (window.servicesData) {
            window.servicesData.forEach(srv => {
                this.searchIndex.push({
                    title: srv.title,
                    desc: srv.desc,
                    url: "services.html",
                    type: { mr: "सेवा", en: "Service" }
                });
            });
        }

        // 4. Index FAQs
        if (window.faqsData) {
            window.faqsData.forEach(faq => {
                this.searchIndex.push({
                    title: faq.question,
                    desc: faq.answer,
                    url: "faq.html",
                    type: { mr: "प्रश्न", en: "FAQ" }
                });
            });
        }

        // 5. Index Downloads
        if (window.downloadsData) {
            window.downloadsData.forEach(dl => {
                this.searchIndex.push({
                    title: dl.title,
                    desc: { mr: `फॉर्म डाऊनलोड (${dl.format})`, en: `Download Form (${dl.format})` },
                    url: "downloads.html",
                    type: { mr: "डाउनलोड", en: "Download" }
                });
            });
        }

        // 6. Index Static Pages
        const staticPages = [
            { title: { mr: "आमच्याविषयी", en: "About Us" }, desc: { mr: "संस्थेचा इतिहास, ध्येय आणि धोरणे", en: "History, vision and mission of society" }, url: "about.html", type: { mr: "पान", en: "Page" } },
            { title: { mr: "अध्यक्षांचे मनोगत", en: "Chairman's Message" }, desc: { mr: "संस्थेच्या अध्यक्षांचे मनोगत व संदेश", en: "Message from the chairman" }, url: "chairman-message.html", type: { mr: "पान", en: "Page" } },
            { title: { mr: "संचालक मंडळ", en: "Board of Directors" }, desc: { mr: "संचालक मंडळ व कार्यकारिणी सदस्य", en: "Board members and executive team" }, url: "board-of-directors.html", type: { mr: "पान", en: "Page" } },
            { title: { mr: "व्याजदर तक्ता", en: "Interest Rates" }, desc: { mr: "ठेवी व कर्जाचे अद्ययावत व्याजदर", en: "Deposit and loan interest rate chart" }, url: "interest-rates.html", type: { mr: "पान", en: "Page" } },
            { title: { mr: "तक्रार नोंदणी", en: "Grievance Redressal" }, desc: { mr: "ऑनलाईन तक्रार व अभिप्राय", en: "Online grievance and feedback" }, url: "complaints.html", type: { mr: "पान", en: "Page" } },
            { title: { mr: "संपर्क व शाखा", en: "Contact & Branches" }, desc: { mr: "शाखांचा पत्ता व फोन नंबर", en: "Branch addresses and contact numbers" }, url: "contact.html", type: { mr: "पान", en: "Page" } }
        ];

        this.searchIndex.push(...staticPages);
    }

    bindSearchEvents() {
        const searchInput = document.getElementById('globalSearchInput');
        const resultsContainer = document.getElementById('globalSearchResults');

        if (!searchInput || !resultsContainer) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            this.performSearch(query, resultsContainer);
        });
    }

    performSearch(query, container) {
        if (!query || query.length < 2) {
            container.innerHTML = `<div class="p-4 text-center text-muted" data-i18n="search_placeholder">${window.i18n ? window.i18n.getTranslation('search_placeholder') : 'शोधा...'}</div>`;
            return;
        }

        const lang = window.i18n ? window.i18n.currentLang : 'mr';

        const matches = this.searchIndex.filter(item => {
            const titleStr = (item.title[lang] || item.title['mr'] || '').toLowerCase();
            const descStr = (item.desc[lang] || item.desc['mr'] || '').toLowerCase();
            return titleStr.includes(query) || descStr.includes(query);
        });

        if (matches.length === 0) {
            container.innerHTML = `<div class="p-4 text-center text-muted" data-i18n="no_results">${window.i18n ? window.i18n.getTranslation('no_results') : 'कोणतेही निकाल आढळले नाहीत.'}</div>`;
            return;
        }

        let html = '<div class="list-group list-group-flush">';
        matches.forEach(item => {
            const title = item.title[lang] || item.title['mr'];
            const desc = item.desc[lang] || item.desc['mr'];
            const type = item.type[lang] || item.type['mr'];

            html += `
                <a href="${item.url}" class="list-group-item list-group-item-action p-3">
                    <div class="d-flex w-100 justify-content-between align-items-center mb-1">
                        <h6 class="mb-0 text-primary font-weight-bold">${title}</h6>
                        <span class="badge bg-light text-dark border">${type}</span>
                    </div>
                    <small class="text-muted d-block text-truncate">${desc}</small>
                </a>
            `;
        });
        html += '</div>';

        container.innerHTML = html;
    }
}

window.siteSearch = new SiteSearchEngine();
