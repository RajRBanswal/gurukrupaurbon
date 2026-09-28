/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Core Banking & Value-Added Services Data
 */

const servicesData = [
    {
        id: "sms-banking",
        icon: "bi-chat-left-dots",
        title: { mr: "एसएमएस अलर्ट सेवा (SMS Alerts)", en: "SMS Banking Alerts" },
        desc: { 
            mr: "प्रत्येक ठेव व कर्ज खात्यातील व्यवहारांची तात्काळ एसएमएसद्वारे माहिती.",
            en: "Instant SMS updates on your registered mobile for every deposit and withdrawal transaction."
        }
    },
    {
        id: "rtgs-neft",
        icon: "bi-arrow-left-right",
        title: { mr: "RTGS / NEFT फंड ट्रान्सफर", en: "RTGS / NEFT Money Transfer" },
        desc: { 
            mr: "भारतातील कोणत्याही बँकेत सुरक्षित आणि जलद पैसे ट्रान्सफर करण्याची सुविधा.",
            en: "Fast and safe fund transfers to any bank account across India via RTGS / NEFT."
        }
    },
    {
        id: "safe-deposit-locker",
        icon: "bi-shield-lock",
        title: { mr: "सुरक्षित लॉकर सुविधा (Safe Deposit Locker)", en: "Safe Deposit Lockers" },
        desc: { 
            mr: "तुमचे दागिने आणि मौल्यवान दस्तऐवज सुरक्षित ठेवण्यासाठी आधुनिक तिजोरी व लॉकर सुविधा.",
            en: "State-of-the-art secure vaults and lockers for safe custody of your jewelry and legal documents."
        }
    },
    {
        id: "micro-atm-pigmy",
        icon: "bi-credit-card-2-front",
        title: { mr: "मायक्रो एटीएम व दारात ठेवी", en: "Micro ATM & Doorstep Collection" },
        desc: { 
            mr: "दैनिक ठेव संकलकांकडे डिजिटल पावती आणि संगणकीकृत व्यवहार नोंद.",
            en: "Digital handheld terminals carried by collection agents for instant printed receipts."
        }
    },
    {
        id: "qr-upi-payment",
        icon: "bi-qr-code-scan",
        title: { mr: "क्यूआर व डिजिटल पेमेंट", en: "QR & Digital Collection" },
        desc: { 
            mr: "व्यापाऱ्यांसाठी सुलभ क्यूआर कोडद्वारे ठेव जमा व कर्ज हप्ता भरण्याची आधुनिक सोय.",
            en: "Modern QR code payment collection for merchant members to deposit daily installments."
        }
    },
    {
        id: "senior-citizen-desk",
        icon: "bi-heart-pulse",
        title: { mr: "ज्येष्ठ नागरिक विशेष कक्ष", en: "Senior Citizen Special Desk" },
        desc: { 
            mr: "ज्येष्ठ नागरिकांसाठी शाखेत प्राधान्याने सेवा आणि मार्गदर्शन.",
            en: "Priority assistance, comfortable lounge, and dedicated guidance for senior citizens."
        }
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = servicesData;
} else {
    window.servicesData = servicesData;
}
