/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Comprehensive Loan Schemes Data
 */

const loansData = [
    {
        id: "home-loan",
        icon: "bi-house-heart",
        category: "retail",
        title: { mr: "गृह कर्ज", en: "Home Loan" },
        tagline: { mr: "आपल्या हक्काच्या घराचे स्वप्न करा साकार", en: "Turn Your Dream of Owning a Home into Reality" },
        shortDesc: { 
            mr: "नवीन घर खरेदी, प्लॉट खरेदी किंवा घराच्या बांधकामासाठी सोयीस्कर अटींवर गृह कर्ज.",
            en: "Home loans on convenient terms for purchasing a new house, plot purchase, or construction."
        },
        overview: {
            mr: "गुरुकृपा अर्बनचे गृह कर्ज आपल्याला स्वतःचे घर घेण्याचे स्वप्न साकार करण्यास मदत करते. कमीत कमी कागदपत्रे आणि त्वरित मंजुरी प्रक्रियेमुळे आपले घराचे स्वप्न सहज पूर्ण होते.",
            en: "Gurukrupa Urban Home Loan helps you fulfill your dream of owning a home. Minimal documentation and quick sanction process make home buying hassle-free."
        },
        features: [
            { mr: "सुलभ हप्ते व दीर्घ मुदत", en: "Flexible EMIs & Long Tenure" },
            { mr: "पारदर्शक व्यवहार, लपलेले शुल्क नाही", en: "Transparent charges, no hidden fees" },
            { mr: "घर बांधकाम व नूतनीकरणासाठीही उपलब्ध", en: "Available for construction & renovation" },
            { mr: "जलद दस्तऐवजीकरण व पडताळणी", en: "Quick documentation & verification" }
        ],
        eligibility: [
            { mr: "संस्थेचे सभासदत्व आवश्यक", en: "Society Membership mandatory" },
            { mr: "नियमित उत्पन्नाचा स्त्रोत (पगारदार किंवा व्यावसायिक)", en: "Regular source of income (Salaried or Self-Employed)" },
            { mr: "वयोमर्यादा: २१ ते ६५ वर्षे", en: "Age Criteria: 21 to 65 Years" }
        ],
        documents: [
            { mr: "ओळख पुरावा (आधार कार्ड, पॅन कार्ड)", en: "Identity Proof (Aadhaar, PAN)" },
            { mr: "पत्ता पुरावा (वीज बिल, रेशन कार्ड)", en: "Address Proof (Electricity Bill, Ration Card)" },
            { mr: "उत्पन्न पुरावा (६ महिन्यांचे बँक स्टेटमेंट, ६ महिन्यांचे पे-स्लिप / IT Return)", en: "Income Proof (6 Months Bank Statement, Salary Slips / ITR)" },
            { mr: "मालमत्तेची कागदपत्रे (सेल डीड, लेआउट प्लॅन, मालमत्ता पत्रक)", en: "Property Documents (Sale Deed, Approved Layout, Property Card)" }
        ],
        interestRate: "[OFFICIAL RATE REQUIRED]",
        maxTenure: { mr: "२० वर्षांपर्यंत", en: "Up to 20 Years" },
        imageSlotHint: "assets/images/loans/home-loan.jpg (Recommended: Local house / happy family with new home)"
    },
    {
        id: "vehicle-loan",
        icon: "bi-car-front",
        category: "retail",
        title: { mr: "वाहन कर्ज", en: "Vehicle Loan" },
        tagline: { mr: "नवीन किंवा जुन्या वाहनासाठी सुलभ कर्ज", en: "Easy Financing for New or Pre-owned Vehicles" },
        shortDesc: { 
            mr: "चारचाकी, दुचाकी किंवा व्यावसायिक वाहनासाठी आकर्षक व्याजदरावर कर्ज.",
            en: "Loan for four-wheelers, two-wheelers, or commercial vehicles at attractive interest rates."
        },
        overview: {
            mr: "आपल्या किंवा कुटुंबाच्या प्रवासासाठी नवीन गाडी घ्यायची असो वा व्यवसायासाठी व्यावसायिक वाहन, गुरुकृपा अर्बन वाहन कर्ज अत्यंत सोप्या पद्धतीने उपलब्ध करून देते.",
            en: "Whether purchasing a new vehicle for personal family travel or a commercial vehicle for business expansion, Gurukrupa Urban provides swift vehicle loans."
        },
        features: [
            { mr: "वाहनाच्या ऑन-रोड मूल्याच्या ८५% पर्यंत कर्ज", en: "Up to 85% financing of on-road vehicle value" },
            { mr: "चारचाकी व दुचाकी वाहनांसाठी उपलब्ध", en: "Available for both 2-wheelers and 4-wheelers" },
            { mr: "कमीत कमी पूर्व-प्रक्रिया शुल्क", en: "Nominal processing fees" },
            { mr: "त्वरित कर्ज वितरण", en: "Fast loan disbursement" }
        ],
        eligibility: [
            { mr: "संस्थेचे सभासदत्व", en: "Society Membership" },
            { mr: "उत्पन्नाची योग्य क्षमता", en: "Repayment income capacity" },
            { mr: "वैध वाहन चालक परवाना (ड्रायव्हिंग लायसन्स)", en: "Valid Driving License" }
        ],
        documents: [
            { mr: "केवायसी कागदपत्रे (आधार, पॅन)", en: "KYC Documents (Aadhaar, PAN)" },
            { mr: "उत्पन्नाचा पुरावा / बँक पासबुक", en: "Income Proof / Bank Passbook" },
            { mr: "कोटेशन (डीलर कडून वाहनाचे अधिकृत कोटेशन)", en: "Official Vehicle Quotation from Authorized Dealer" }
        ],
        interestRate: "[OFFICIAL RATE REQUIRED]",
        maxTenure: { mr: "७ वर्षांपर्यंत", en: "Up to 7 Years" },
        imageSlotHint: "assets/images/loans/vehicle-loan.jpg (Recommended: Customer receiving vehicle key)"
    },
    {
        id: "business-loan",
        icon: "bi-briefcase",
        category: "commercial",
        title: { mr: "व्यवसाय कर्ज", en: "Business Loan" },
        tagline: { mr: "आपल्या व्यवसायाच्या विस्ताराला नवी गती", en: "Fuel the Growth and Expansion of Your Business" },
        shortDesc: { 
            mr: "लघु व मध्यम उद्योजक, व्यापारी आणि दुकानदारांसाठी खेळते भांडवल व विस्तार कर्ज.",
            en: "Working capital and expansion loans for small & medium entrepreneurs, traders, and shopkeepers."
        },
        overview: {
            mr: "छत्रपती संभाजीनगर व परिसरातील व्यापाऱ्यांच्या प्रगतीसाठी गुरुकृपा अर्बनचे व्यवसाय कर्ज अत्यंत उपयुक्त आहे. स्टॉक खरेदी, यंत्रसामग्री किंवा नवीन शाखा उघडण्यासाठी सुलभ कर्ज पुरवठा.",
            en: "Empowering local traders and enterprises in Chhatrapati Sambhajinagar with flexible working capital, machinery funding, and business expansion credit."
        },
        features: [
            { mr: "खेळत्या भांडवलासाठी कार्यक्षम रचना", en: "Tailored for working capital requirements" },
            { mr: "व्यावसायिक उलाढालीनुसार आकर्षक व्याजदर", en: "Attractive rates based on business turnover" },
            { mr: "मुदत कर्ज व कॅश क्रेडिट सुविधा", en: "Term loan and Cash Credit facilities available" },
            { mr: "व्यावसायिक सहकार्याचा दीर्घ अनुभव", en: "Longstanding support for local commerce" }
        ],
        eligibility: [
            { mr: "किमान २ वर्षांचा व्यवसाय अनुभव", en: "Minimum 2 years of business operations" },
            { mr: "व्यवसाय नोंदणी किंवा शॉप ॲक्ट लायसन्स", en: "Business registration / Shop Act license" },
            { mr: "संस्थेचे सभासदत्व", en: "Society Membership" }
        ],
        documents: [
            { mr: "शॉप ॲक्ट / जीएसटी नोंदणी प्रमाणपत्र", en: "Shop Act License / GST Registration" },
            { mr: "मागील २ वर्षांचे आयटी रिटर्न किंवा आर्थिक पत्रके", en: "Last 2 Years ITR / Financial Statements" },
            { mr: "मागील १२ महिन्यांचे बँक स्टेटमेंट", en: "Last 12 Months Bank Account Statement" },
            { mr: "प्रोप्रायटर / पार्टनर्सचे केवायसी", en: "KYC of Proprietors / Partners" }
        ],
        interestRate: "[OFFICIAL RATE REQUIRED]",
        maxTenure: { mr: "५ वर्षांपर्यंत", en: "Up to 5 Years" },
        imageSlotHint: "assets/images/loans/business-loan.jpg (Recommended: Local shopkeeper or enterprise owner)"
    },
    {
        id: "gold-loan",
        icon: "bi-gem",
        category: "priority",
        title: { mr: "सोने तारण कर्ज", en: "Gold Loan" },
        tagline: { mr: "सोने घरात पडून न ठेवता मिळवा तात्काळ रोख रक्कम", en: "Instant Cash Against Your Gold Ornaments" },
        shortDesc: { 
            mr: "कमीत कमी वेळेत आणि सोप्या प्रक्रियेत सोन्याच्या दागिन्यांवर सुरक्षित कर्ज.",
            en: "Instant loan disbursed in minimal time against secure gold ornaments valuation."
        },
        overview: {
            mr: "अचानक उद्भवणाऱ्या आर्थिक गरजांसाठी गुरुकृपा अर्बनचे सोने तारण कर्ज हा अत्यंत जलद आणि सोपा पर्याय आहे. आपले दागिने संस्थेच्या तिजोरीत पूर्णतः सुरक्षित राहतात.",
            en: "Gold loan is the fastest financial solution for unexpected needs. Your gold ornaments remain completely secure in our vault with full insurance coverage."
        },
        features: [
            { mr: "अवघ्या ३० मिनिटांत कर्ज वितरण", en: "Disbursement within 30 minutes" },
            { mr: "सोन्याचे मोफत मूल्यांकन", en: "Free expert gold valuation" },
            { mr: "उच्च दर्जाची लॉकर सुरक्षितता", en: "High-grade vault security for ornaments" },
            { mr: "फक्त व्याजाची परतफेडीचा पर्याय", en: "Flexible interest payment options" }
        ],
        eligibility: [
            { mr: "वय १८ वर्षे पूर्ण", en: "Age 18+ years" },
            { mr: "सोने स्वतःच्या मालकीचे असणे आवश्यक", en: "Self-owned gold ornaments" },
            { mr: "संस्थेचे प्राथमिक सभासदत्व", en: "Basic Society Membership" }
        ],
        documents: [
            { mr: "आधार कार्ड आणि पॅन कार्ड", en: "Aadhaar Card and PAN Card" },
            { mr: "पासपोर्ट साईज फोटो", en: "Passport size photographs" }
        ],
        interestRate: "[OFFICIAL RATE REQUIRED]",
        maxTenure: { mr: "१२ महिने (सुलभ नूतनीकरण)", en: "12 Months (Easy renewal option)" },
        imageSlotHint: "assets/images/loans/gold-loan.jpg (Recommended: Professional branch gold appraisal counter)"
    },
    {
        id: "personal-loan",
        icon: "bi-person-badge",
        category: "retail",
        title: { mr: "वैयक्तिक कर्ज", en: "Personal Loan" },
        tagline: { mr: "वैयक्तिक, कौटुंबिक व वैद्यकीय गरजांसाठी तत्पर कर्ज", en: "Quick Financing for Personal, Family & Medical Expenses" },
        shortDesc: { 
            mr: "लग्नकार्य, वैद्यकीय उपचार, किंवा इतर तातडीच्या खर्चासाठी वैयक्तिक कर्ज.",
            en: "Personal loans for wedding expenses, medical treatments, or emergency family requirements."
        },
        overview: {
            mr: "कोणत्याही अनपेक्षित खर्चासाठी किंवा कौटुंबिक प्रसंगासाठी गुरुकृपा अर्बन वैयक्तिक कर्ज पुरवते. सुलभ हप्ते आणि जलद प्रक्रियेमुळे तणावमुक्त आर्थिक मदत मिळते.",
            en: "For any unexpected personal expense or family occasion, Gurukrupa Urban personal loans deliver hassle-free credit."
        },
        features: [
            { mr: "तारणरहित / जामीनदार आधारित कर्ज सुविधा", en: "Collateral-free / Guarantor based options" },
            { mr: "मासिक पगारावर आधारित सोयीस्कर हप्ते", en: "Convenient EMIs suited to monthly income" },
            { mr: "पारदर्शक अटी व शर्ती", en: "Clear and transparent terms" }
        ],
        eligibility: [
            { mr: "नोकरदार किंवा नियमित व्यावसायिक", en: "Salaried employee or self-employed individual" },
            { mr: "किमान १ वर्षाची सेवा किंवा व्यवसाय अनुभव", en: "Minimum 1 year service or business record" }
        ],
        documents: [
            { mr: "केवायसी पुरावे", en: "KYC Documents" },
            { mr: "मागील ३ महिन्यांच्या पे-स्लिप्स / आयटीआर", en: "Last 3 months salary slips / ITR" },
            { mr: "२ जामीनदारांची कागदपत्रे", en: "Documents of 2 guarantors" }
        ],
        interestRate: "[OFFICIAL RATE REQUIRED]",
        maxTenure: { mr: "३ ते ५ वर्षे", en: "3 to 5 Years" },
        imageSlotHint: "assets/images/loans/personal-loan.jpg (Recommended: Happy customer / family)"
    },
    {
        id: "education-loan",
        icon: "bi-mortarboard",
        category: "retail",
        title: { mr: "शैक्षणिक कर्ज", en: "Education Loan" },
        tagline: { mr: "विद्यार्थ्यांच्या उच्च शिक्षणासाठी खंबीर आर्थिक पाठबळ", en: "Empowering Students to Pursue Higher Education Goals" },
        shortDesc: { 
            mr: "भारतात किंवा परदेशात उच्च शिक्षणासाठी विद्यार्थ्यांसाठी शैक्षणिक कर्ज.",
            en: "Financial assistance for students undertaking higher education in India or abroad."
        },
        overview: {
            mr: "गुणवंत विद्यार्थ्यांनी पैशाअभावी शिक्षणापासून वंचित राहू नये यासाठी गुरुकृपा अर्बन शैक्षणिक कर्ज योजना राबवते. शैक्षणिक फी, पुस्तके व इतर खर्चासाठी सुलभ मदत.",
            en: "Gurukrupa Urban Education Loan ensures deserving students achieve academic excellence without financial barriers."
        },
        features: [
            { mr: "शिक्षण पूर्ण होईपर्यंत हप्त्यात सवलत (मोरेटोरियम)", en: "Moratorium period during course tenure" },
            { mr: "ट्यूशन फी, हॉस्टेल फी व अभ्यासाच्या साहित्यासाठी मदत", en: "Covers tuition fees, hostel, and books" },
            { mr: "विद्यार्थीस्नेही व्याजदर रचना", en: "Student-friendly interest framework" }
        ],
        eligibility: [
            { mr: "मान्यताप्राप्त संस्थेत प्रवेश निश्चित", en: "Confirmed admission in recognized institute" },
            { mr: "पालक किंवा पालक-सह-कर्जदार", en: "Parent or guardian as co-borrower" }
        ],
        documents: [
            { mr: "विद्यार्थी व पालकांचे केवायसी", en: "KYC of student & parent" },
            { mr: "प्रवेश पत्र व फि स्ट्रक्चर", en: "Admission Letter & Fee Structure" },
            { mr: "मागील शैक्षणिक निकालांच्या प्रती", en: "Mark sheets of previous academic qualifying exams" }
        ],
        interestRate: "[OFFICIAL RATE REQUIRED]",
        maxTenure: { mr: "शिक्षणाचा कालावधी + सवलत कालावधी", en: "Course Duration + Moratorium" },
        imageSlotHint: "assets/images/loans/education-loan.jpg (Recommended: Indian student celebrating academic success)"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = loansData;
} else {
    window.loansData = loansData;
}
