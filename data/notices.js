/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Public Notices, News, and Tender Data
 */

const noticesData = [
    {
        id: "notice-1",
        category: "notice",
        date: "2026-03-15",
        title: { 
            mr: "वार्षिक सर्वसाधारण सभा सूचना (AGM Notice)", 
            en: "Annual General Body Meeting (AGM) Notice" 
        },
        description: { 
            mr: "संस्थेच्या सर्व सभासदांना कळवण्यात येते की आगामी वार्षिक सर्वसाधारण सभा मुख्य प्रशासकीय इमारतीत आयोजित करण्यात आली आहे.", 
            en: "All esteemed members are hereby notified that the Annual General Meeting will be held at the Main Administrative Building." 
        },
        downloadUrl: "#"
    },
    {
        id: "notice-2",
        category: "tender",
        date: "2026-02-28",
        title: { 
            mr: "संगणक व आयटी उपकरणांच्या पुरवठ्यासाठी जाहीर निविदा", 
            en: "Public Tender for Computer Hardware & IT Infrastructure Supply" 
        },
        description: { 
            mr: "संस्थेच्या शाखांसाठी नवीन संगणक व आयटी उपकरणे पुरवठ्याकरिता सीलबंद निविदा मागवण्यात येत आहेत.", 
            en: "Sealed tenders are invited from authorized vendors for IT hardware supply across society branches." 
        },
        downloadUrl: "#"
    },
    {
        id: "notice-3",
        category: "news",
        date: "2026-01-10",
        title: { 
            mr: "ISO 9001:2015 गुणवत्ता प्रमाणपत्र नूतनीकरण यशस्वी", 
            en: "Successful Renewal of ISO 9001:2015 Quality Certification" 
        },
        description: { 
            mr: "गुरुकृपा अर्बनच्या उत्कृष्ट कामकाजाची दखल घेत ISO 9001:2015 प्रमाणपत्र यशस्वीरित्या नूतनीकृत करण्यात आले.", 
            en: "Recognizing high standards of governance, Gurukrupa Urban's ISO 9001:2015 quality audit was completed successfully." 
        },
        downloadUrl: "#"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = noticesData;
} else {
    window.noticesData = noticesData;
}
