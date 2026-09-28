/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Categorized FAQ Database
 */

const faqsData = [
    {
        category: "general",
        categoryName: { mr: "सामान्य प्रश्न", en: "General Queries" },
        question: { mr: "गुरुकृपा अर्बन चे सभासद कसे व्हावे?", en: "How do I become a member of Gurukrupa Urban?" },
        answer: { 
            mr: "संस्थेचे सभासद होण्यासाठी जवळच्या शाखेत भेट देऊन केवायसी कागदपत्रे (आधार कार्ड, पॅन कार्ड, २ फोटो) आणि विहित नमुन्यातील अर्ज भरून सभासदत्व मिळवता येते.",
            en: "To become a member, visit your nearest branch with KYC documents (Aadhaar, PAN, 2 photos) and complete the membership application form."
        }
    },
    {
        category: "general",
        categoryName: { mr: "सामान्य प्रश्न", en: "General Queries" },
        question: { mr: "संस्थेची कामकाजाची वेळ काय आहे?", en: "What are the branch working hours?" },
        answer: { 
            mr: "शाखेचे कामकाज सकाळी १०:०० ते सायंकाळी ५:३० या वेळेत चालते. (रविवार व सार्वजनिक बँक सुट्ट्या वगळून)",
            en: "Branch operations run from 10:00 AM to 5:30 PM (except Sundays and statutory public holidays)."
        }
    },
    {
        category: "deposits",
        categoryName: { mr: "ठेवी व बचत खाते", en: "Deposits & Savings" },
        question: { mr: "मुदत ठेवीवर (FD) वरिष्ठ नागरिकांना अतिरिक्त व्याज मिळते का?", en: "Do senior citizens get extra interest on Fixed Deposits?" },
        answer: { 
            mr: "होय, वरिष्ठ नागरिकांना नियमित व्याजदरापेक्षा अतिरिक्त सवलतीचा व्याजदर लागू असतो. अचूक दरासाठी अधिकृत व्याजदर तक्ता किंवा शाखेशी संपर्क साधा.",
            en: "Yes, senior citizens receive an additional interest rate benefit over standard FD rates. Check our interest rate schedule for exact details."
        }
    },
    {
        category: "deposits",
        categoryName: { mr: "ठेवी व बचत खाते", en: "Deposits & Savings" },
        question: { mr: "मुदत ठेवीवर कर्ज घेण्याची सोय आहे का?", en: "Is loan facility available against Fixed Deposit?" },
        answer: { 
            mr: "होय, सभासद आपल्या मुदत ठेवीच्या एकूण मूल्याच्या ९०% पर्यंत सुलभ कर्ज मिळवू शकतात.",
            en: "Yes, members can avail loan up to 90% against their active Fixed Deposit value."
        }
    },
    {
        category: "loans",
        categoryName: { mr: "कर्ज योजना", en: "Loans" },
        question: { mr: "गृह कर्जासाठी कोणती मुख्य कागदपत्रे आवश्यक आहेत?", en: "What are the primary documents required for a Home Loan?" },
        answer: { 
            mr: "केवायसी पुरावे (आधार, पॅन), मागील ६ महिन्यांचे बँक स्टेटमेंट, उत्पन्नाचा पुरावा (पगार स्लिप / आयटीआर) आणि मालमत्तेची कायदेशीर कागदपत्रे आवश्यक आहेत.",
            en: "KYC proofs (Aadhaar, PAN), last 6 months bank statements, income proof (salary slips / ITR), and property legal documents are required."
        }
    },
    {
        category: "loans",
        categoryName: { mr: "कर्ज योजना", en: "Loans" },
        question: { mr: "सोने तारण कर्ज मंजुरीसाठी किती वेळ लागतो?", en: "How long does Gold Loan sanction take?" },
        answer: { 
            mr: "सोन्याचे तारण मूल्य पडताळणीनंतर अवघ्या ३० मिनिटांत रोख किंवा बँक खात्यात कर्ज रक्कम वितरित केली जाते.",
            en: "Post gold appraisal, gold loan is disbursed within 30 minutes in cash or account transfer."
        }
    },
    {
        category: "customer_service",
        categoryName: { mr: "ग्राहक सेवा व तक्रार", en: "Customer Care & Complaints" },
        question: { mr: "तक्रार किंवा अभिप्राय कसा नोंदवावा?", en: "How can I register a complaint or feedback?" },
        answer: { 
            mr: "वेबसाईटवरील 'तक्रार नोंदणी' पेजवरून किंवा थेट शाखेत जाऊन तक्रार निवारण कक्षात नोंदवता येते.",
            en: "You can submit grievances through our online 'Register Complaint' page or by contacting our branch grievance redressal cell."
        }
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = faqsData;
} else {
    window.faqsData = faqsData;
}
