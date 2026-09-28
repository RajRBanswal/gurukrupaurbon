/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Branch Locator Data Structure
 */

const branchesData = [
    {
        id: "main-branch",
        isHeadOffice: true,
        name: { 
            mr: "मुख्य कार्यालय व मध्यवर्ती शाखा, छत्रपती संभाजीनगर", 
            en: "Head Office & Main Branch, Chhatrapati Sambhajinagar" 
        },
        address: { 
            mr: "गुरुकृपा अर्बन मध्यवर्ती इमारत, [OFFICIAL ADDRESS REQUIRED], छत्रपती संभाजीनगर (औरंगाबाद) - ४३१००१, महाराष्ट्र.", 
            en: "Gurukrupa Urban Central Building, [OFFICIAL ADDRESS REQUIRED], Chhatrapati Sambhajinagar (Aurangabad) - 431001, Maharashtra." 
        },
        phone: "[OFFICIAL PHONE REQUIRED]",
        email: "[OFFICIAL EMAIL REQUIRED]",
        timing: { 
            mr: "सकाळी १०:०० ते सायंकाळी ५:३० (रविवार व बँक सुट्ट्या वगळून)", 
            en: "10:00 AM to 5:30 PM (Except Sundays & Holidays)" 
        },
        manager: { mr: "[OFFICIAL MANAGER NAME REQUIRED]", en: "[OFFICIAL MANAGER NAME REQUIRED]" },
        mapUrl: "https://maps.google.com/?q=Chhatrapati+Sambhajinagar",
        imageSlot: "assets/images/branches/main-branch.jpg"
    },
    {
        id: "cidco-branch",
        isHeadOffice: false,
        name: { 
            mr: "सिडको शाखा, छत्रपती संभाजीनगर", 
            en: "CIDCO Branch, Chhatrapati Sambhajinagar" 
        },
        address: { 
            mr: "सिडको परिसर, [OFFICIAL ADDRESS REQUIRED], छत्रपती संभाजीनगर, महाराष्ट्र.", 
            en: "CIDCO Area, [OFFICIAL ADDRESS REQUIRED], Chhatrapati Sambhajinagar, Maharashtra." 
        },
        phone: "[OFFICIAL PHONE REQUIRED]",
        email: "[OFFICIAL EMAIL REQUIRED]",
        timing: { 
            mr: "सकाळी १०:०० ते सायंकाळी ५:३०", 
            en: "10:00 AM to 5:30 PM" 
        },
        manager: { mr: "[OFFICIAL MANAGER NAME REQUIRED]", en: "[OFFICIAL MANAGER NAME REQUIRED]" },
        mapUrl: "https://maps.google.com/?q=CIDCO+Chhatrapati+Sambhajinagar",
        imageSlot: "assets/images/branches/cidco-branch.jpg"
    },
    {
        id: "waluj-branch",
        isHeadOffice: false,
        name: { 
            mr: "वाळूज औद्योगिक शाखा, औरंगाबाद", 
            en: "Waluj Industrial Branch, Chhatrapati Sambhajinagar" 
        },
        address: { 
            mr: "वाळूज एमआयडीसी परिसर, [OFFICIAL ADDRESS REQUIRED], छत्रपती संभाजीनगर, महाराष्ट्र.", 
            en: "Waluj MIDC Area, [OFFICIAL ADDRESS REQUIRED], Chhatrapati Sambhajinagar, Maharashtra." 
        },
        phone: "[OFFICIAL PHONE REQUIRED]",
        email: "[OFFICIAL EMAIL REQUIRED]",
        timing: { 
            mr: "सकाळी १०:०० ते सायंकाळी ५:३०", 
            en: "10:00 AM to 5:30 PM" 
        },
        manager: { mr: "[OFFICIAL MANAGER NAME REQUIRED]", en: "[OFFICIAL MANAGER NAME REQUIRED]" },
        mapUrl: "https://maps.google.com/?q=Waluj+MIDC+Aurangabad",
        imageSlot: "assets/images/branches/waluj-branch.jpg"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = branchesData;
} else {
    window.branchesData = branchesData;
}
