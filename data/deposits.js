/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Deposit Schemes Data
 */

const depositsData = [
    {
        id: "fixed-deposit",
        icon: "bi-safe",
        title: { mr: "मुदत ठेव", en: "Fixed Deposit (FD)" },
        tagline: { mr: "गुंतवणुकीवर सुरक्षित आणि आकर्षक परतावा", en: "Guaranteed & High-Yield Fixed Investment" },
        shortDesc: { 
            mr: "आपल्या रकमेवर उत्तम परतावा देणारी सर्वात सुरक्षित ठेव योजना.",
            en: "The safest investment option offering high returns on your lump-sum savings."
        },
        overview: {
            mr: "गुरुकृपा अर्बन मुदत ठेव (FD) आपल्या कष्टाच्या पैशाला पूर्ण सुरक्षितता आणि ठरविक कालावधीसाठी निश्चित परतावा देते. मासिक, त्रैमासिक किंवा मुदतीअंती व्याजाचे पर्याय उपलब्ध आहेत.",
            en: "Gurukrupa Urban Fixed Deposit offers maximum security and assured returns over fixed tenure. Choose flexible monthly, quarterly, or maturity interest payout options."
        },
        features: [
            { mr: "वरिष्ठ नागरिकांसाठी अतिरिक्त व्याजदर सवलत", en: "Special additional interest rate for senior citizens" },
            { mr: "ठेवीवर ९०% पर्यंत सुलभ कर्जाची सोय", en: "Loan up to 90% against deposit value" },
            { mr: "मासिक, त्रैमासिक व वार्षिक व्याज मिळण्याचा पर्याय", en: "Monthly, quarterly & annual interest payout options" },
            { mr: "नामांकन सुलभ सुविधा", en: "Hassle-free nomination facility" }
        ],
        eligibility: [
            { mr: "भारतातील कोणताही नागरिक, संस्था किंवा मंडळ", en: "Any resident Indian, firm, or trust" },
            { mr: "संस्थेचे प्राथमिक सभासदत्व", en: "Society Membership" }
        ],
        documents: [
            { mr: "ओळख पुरावा (आधार कार्ड / पॅन कार्ड)", en: "Identity Proof (Aadhaar / PAN)" },
            { mr: "रहिवासी पुरावा (वीज बिल / रेशन कार्ड)", en: "Address Proof (Electricity Bill / Ration Card)" },
            { mr: "२ अद्ययावत पासपोर्ट साईज फोटो", en: "2 Passport size photographs" }
        ],
        minTenure: { mr: "७ दिवस", en: "7 Days" },
        maxTenure: { mr: "५ वर्षे", en: "5 Years" },
        minAmount: "₹ 1,000",
        rateInfo: { mr: "[अधिकृत दर आवश्यक]", en: "[OFFICIAL RATE REQUIRED]" },
        imageSlotHint: "assets/images/deposits/fixed-deposit.jpg"
    },
    {
        id: "recurring-deposit",
        icon: "bi-graph-up-arrow",
        title: { mr: "आवर्त ठेव", en: "Recurring Deposit (RD)" },
        tagline: { mr: "दरमहा लहान बचतीतून उभारा मोठा निधी", en: "Build a Substantial Corpus Through Small Monthly Savings" },
        shortDesc: { 
            mr: "दरमहा विशिष्ट रक्कम जमा करून भविष्यातील मोठ्या उद्दिष्टांसाठी बचत करा.",
            en: "Save a fixed sum every month to achieve your long-term financial milestones."
        },
        overview: {
            mr: "दरमहा ठराविक बचत करण्याची सवय लावणारी आवर्त ठेव ही अत्यंत लोकप्रिय योजना आहे. नोकरदार आणि व्यावसायिकांसाठी भविष्यातील खर्चाची पूर्वतयारी करण्याचा हा सोपा मार्ग आहे.",
            en: "Recurring Deposit encourages disciplined monthly savings. It is ideal for salaried individuals and traders planning ahead for future financial expenses."
        },
        features: [
            { mr: "दरमहा सानुकूलित बचत रक्कम", en: "Customizable monthly installment amount" },
            { mr: "चक्रवाढ व्याजाचा फायदा", en: "Compounded interest benefits" },
            { mr: "मुदतीनंतर एकरकमी चक्रवाढ परतावा", en: "Lump sum payout upon maturity" },
            { mr: "मुदतपूर्व बंद करण्याची सवलत (अटींनुसार)", en: "Premature withdrawal facility (subject to terms)" }
        ],
        eligibility: [
            { mr: "वैयक्तिक नागरिक, नोकरदार, महिला किंवा व्यावसायिक", en: "Individuals, salaried professionals, homemakers, or traders" }
        ],
        documents: [
            { mr: "केवायसी कागदपत्रे (आधार, पॅन)", en: "KYC Documents (Aadhaar, PAN)" },
            { mr: "फोटो", en: "Photos" }
        ],
        minTenure: { mr: "१२ महिने", en: "12 Months" },
        maxTenure: { mr: "६० महिने", en: "60 Months" },
        minAmount: "₹ 500 / महिना",
        rateInfo: { mr: "[अधिकृत दर आवश्यक]", en: "[OFFICIAL RATE REQUIRED]" },
        imageSlotHint: "assets/images/deposits/recurring-deposit.jpg"
    },
    {
        id: "daily-deposit",
        icon: "bi-piggy-bank",
        title: { mr: "दैनिक ठेव", en: "Daily Deposit (Pigmy)" },
        tagline: { mr: "रोजच्या लहान बचतीतून मोठी भांडवल निर्मिती", en: "Convert Daily Micro-Savings into Big Financial Strength" },
        shortDesc: { 
            mr: "दुकानदार, व्यापारी आणि व्यावसायिकांसाठी रोजच्या रोज दारात बचत सुविधा.",
            en: "Doorstep daily collection facility tailored for shopkeepers, hawkers, and traders."
        },
        overview: {
            mr: "गुरुकृपा अर्बनचे प्रतिनिधी रोज तुमच्या दुकानात किंवा घरी येऊन दैनिक ठेवीची रक्कम जमा करतात. व्यवसायातील दररोजचे किरकोळ पैसे सुरक्षित ठेवण्याचा हा उत्तम मार्ग आहे.",
            en: "Authorized Gurukrupa Urban collection agents collect daily savings directly from your shop or doorstep, offering complete safety and accounting."
        },
        features: [
            { mr: "दारात रोज ठेव संकलन सुविधा", en: "Doorstep daily deposit collection service" },
            { mr: "संगणकीकृत पावती व पासबुक नोंद", en: "Computerized receipts & digital passbook entries" },
            { mr: "व्यापाऱ्यांसाठी अत्यंत सोयीस्कर", en: "Highly convenient for daily cashflow businesses" },
            { mr: "ठेवीच्या आधारे सुलभ कर्ज सुविधा", en: "Easy credit facility backed by pigmy balance" }
        ],
        eligibility: [
            { mr: "स्थानिक दुकानदार, छोटे व्यावसायिक, विक्रेते", en: "Local shopkeepers, vendors, micro-entrepreneurs" }
        ],
        documents: [
            { mr: "आधार कार्ड आणि फोटो", en: "Aadhaar Card and Photograph" }
        ],
        minTenure: { mr: "१ वर्ष (३६५ दिवस)", en: "1 Year (365 Days)" },
        maxTenure: { mr: "१ वर्ष नूतनीकरण योग्य", en: "1 Year renewable" },
        minAmount: "₹ 50 / रोज",
        rateInfo: { mr: "[अधिकृत दर आवश्यक]", en: "[OFFICIAL RATE REQUIRED]" },
        imageSlotHint: "assets/images/deposits/daily-deposit.jpg"
    },
    {
        id: "savings-account",
        icon: "bi-wallet2",
        title: { mr: "बचत खाते", en: "Savings Deposit" },
        tagline: { mr: "दैनंदिन व्यवहारांसाठी सुलभ आणि सुरक्षित खाते", en: "Flexible & Secure Account for Daily Transactions" },
        shortDesc: { 
            mr: "तुमचे पैसे हवे तेव्हा काढण्याची सुविधा आणि शिल्लक रकमेवर नियमित व्याज.",
            en: "Easy withdrawals whenever needed along with interest on your daily balances."
        },
        overview: {
            mr: "गुरुकृपा अर्बनचे बचत खाते तुमचे दैनंदिन आर्थिक व्यवहार सुलभ बनवते. पासबुक, एसएमएस अलर्ट आणि तत्पर शाखीय सेवेसह तुमचे पैसे सुरक्षित राहतात.",
            en: "Gurukrupa Urban Savings Account simplifies your daily financial transactions with passbook, SMS alerts, and personalized branch services."
        },
        features: [
            { mr: "एसएमएस अलर्ट सुविधा", en: "Instant SMS transaction alerts" },
            { mr: "अमर्याद ठेव व सुलभ पैसे काढणे", en: "Unlimited deposits and convenient withdrawals" },
            { mr: "सहामाही व्याज जमा", en: "Half-yearly interest crediting" },
            { mr: "सर्व शाखांमध्ये व्यवहार सुविधा", en: "Any-branch transaction capability" }
        ],
        eligibility: [
            { mr: "कोणतीही सज्ञान व्यक्ती, संयुक्त खाते किंवा अल्पवयीन पालकासह", en: "Any individual, joint account holders, or guardian for minor" }
        ],
        documents: [
            { mr: "केवायसी पुरावे (पॅन, आधार)", en: "KYC Documents (PAN, Aadhaar)" },
            { mr: "२ फोटो", en: "2 Photographs" }
        ],
        minTenure: { mr: "कालावधी बंधन नाही", en: "No tenure limit" },
        maxTenure: { mr: "अखंडित", en: "Continuous" },
        minAmount: "₹ 500",
        rateInfo: { mr: "[अधिकृत दर आवश्यक]", en: "[OFFICIAL RATE REQUIRED]" },
        imageSlotHint: "assets/images/deposits/savings-account.jpg"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = depositsData;
} else {
    window.depositsData = depositsData;
}
