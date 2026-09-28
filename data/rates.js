/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Interest Rates Data Structure
 * IMPORTANT: Rates marked with '[OFFICIAL RATE REQUIRED]' must be updated once official rate card is provided.
 */

const ratesData = {
    lastUpdated: "2026-01-01",
    disclaimer: {
        mr: "टीप: व्याजाचे दर वेळोवेळी बदलू शकतात. वरिष्ठ नागरिकांसाठी अतिरिक्त व्याजदर लागू असू शकतो. अचूक दरासाठी शाखेशी संपर्क साधा.",
        en: "Note: Interest rates are subject to change. Senior citizens may get additional interest rates. Please contact branch for exact rates."
    },
    deposits: [
        {
            id: "fd",
            name: { mr: "मुदत ठेव", en: "Fixed Deposit (FD)" },
            tenure: { mr: "७ दिवस ते ५ वर्षे", en: "7 Days to 5 Years" },
            generalRate: "[OFFICIAL RATE REQUIRED]",
            seniorCitizenRate: "[OFFICIAL RATE REQUIRED]",
            minAmount: "₹ 1,000",
            payoutOption: { mr: "मासिक / त्रैमासिक / मुदतीअंती", en: "Monthly / Quarterly / Maturity" }
        },
        {
            id: "rd",
            name: { mr: "आवर्त ठेव", en: "Recurring Deposit (RD)" },
            tenure: { mr: "१२ महिने ते ६० महिने", en: "12 Months to 60 Months" },
            generalRate: "[OFFICIAL RATE REQUIRED]",
            seniorCitizenRate: "[OFFICIAL RATE REQUIRED]",
            minAmount: "₹ 500 / महिना",
            payoutOption: { mr: "मुदतीअंती एकरकमी", en: "Lumpsum at Maturity" }
        },
        {
            id: "mis",
            name: { mr: "मासिक उत्पन्न ठेव", en: "Monthly Income Scheme (MIS)" },
            tenure: { mr: "१ वर्ष ते ५ वर्षे", en: "1 Year to 5 Years" },
            generalRate: "[OFFICIAL RATE REQUIRED]",
            seniorCitizenRate: "[OFFICIAL RATE REQUIRED]",
            minAmount: "₹ 25,000",
            payoutOption: { mr: "दरमहा व्याज बँक खात्यात", en: "Monthly Interest Payout" }
        },
        {
            id: "daily",
            name: { mr: "दैनिक ठेव", en: "Daily Deposit (Pigmy)" },
            tenure: { mr: "१ वर्ष / ३६५ दिवस", en: "1 Year / 365 Days" },
            generalRate: "[OFFICIAL RATE REQUIRED]",
            seniorCitizenRate: "[OFFICIAL RATE REQUIRED]",
            minAmount: "₹ 50 / रोज",
            payoutOption: { mr: "मुदतीअंती किंवा नूतनीकरण", en: "Maturity / Renewal" }
        },
        {
            id: "savings",
            name: { mr: "बचत ठेव", en: "Savings Deposit" },
            tenure: { mr: "दैनिक शिल्लक", en: "Daily Balance" },
            generalRate: "[OFFICIAL RATE REQUIRED]",
            seniorCitizenRate: "[OFFICIAL RATE REQUIRED]",
            minAmount: "₹ 500",
            payoutOption: { mr: "सहामाही व्याज जमा", en: "Half-yearly Credit" }
        }
    ],
    loans: [
        {
            id: "home-loan",
            name: { mr: "गृह कर्ज", en: "Home Loan" },
            rateRange: "[OFFICIAL RATE REQUIRED]",
            maxTenure: { mr: "२० वर्षांपर्यंत", en: "Up to 20 Years" },
            maxAmount: { mr: "पात्रतेनुसार", en: "As per eligibility" },
            processingFee: "[OFFICIAL FEE REQUIRED]"
        },
        {
            id: "vehicle-loan",
            name: { mr: "वाहन कर्ज", en: "Vehicle Loan" },
            rateRange: "[OFFICIAL RATE REQUIRED]",
            maxTenure: { mr: "७ वर्षांपर्यंत", en: "Up to 7 Years" },
            maxAmount: { mr: "वाहनाच्या मूल्याच्या ८५% पर्यंत", en: "Up to 85% of vehicle value" },
            processingFee: "[OFFICIAL FEE REQUIRED]"
        },
        {
            id: "business-loan",
            name: { mr: "व्यवसाय कर्ज", en: "Business Loan" },
            rateRange: "[OFFICIAL RATE REQUIRED]",
            maxTenure: { mr: "५ वर्षांपर्यंत", en: "Up to 5 Years" },
            maxAmount: { mr: "व्यावसायिक उलाढालीनुसार", en: "Based on business turnover" },
            processingFee: "[OFFICIAL FEE REQUIRED]"
        },
        {
            id: "gold-loan",
            name: { mr: "सोने तारण कर्ज", en: "Gold Loan" },
            rateRange: "[OFFICIAL RATE REQUIRED]",
            maxTenure: { mr: "१२ महिने (सुविधाजनक नूतनीकरण)", en: "12 Months (Easy renewal)" },
            maxAmount: { mr: "सोण्याच्या मूल्याच्या ७५% पर्यंत", en: "Up to 75% of gold value" },
            processingFee: "[OFFICIAL FEE REQUIRED]"
        },
        {
            id: "personal-loan",
            name: { mr: "वैयक्तिक कर्ज", en: "Personal Loan" },
            rateRange: "[OFFICIAL RATE REQUIRED]",
            maxTenure: { mr: "३ ते ५ वर्षे", en: "3 to 5 Years" },
            maxAmount: { mr: "उत्पन्न व पात्रतेनुसार", en: "As per income & eligibility" },
            processingFee: "[OFFICIAL FEE REQUIRED]"
        },
        {
            id: "education-loan",
            name: { mr: "शैक्षणिक कर्ज", en: "Education Loan" },
            rateRange: "[OFFICIAL RATE REQUIRED]",
            maxTenure: { mr: "शिक्षणाचा कालावधी + सुट", en: "Course duration + moratorium" },
            maxAmount: { mr: "फि आणि खर्चाच्या रचनेनुसार", en: "As per fee & cost structure" },
            processingFee: "[OFFICIAL FEE REQUIRED]"
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ratesData;
} else {
    window.ratesData = ratesData;
}
