/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Social Work & Community Initiatives Data
 */

const socialWorkData = [
    {
        id: "education-support",
        icon: "bi-book",
        title: { mr: "गुणवंत विद्यार्थी सत्कार व शैक्षणिक सहाय्य", en: "Student Academic Excellence & Scholarships" },
        desc: { 
            mr: "दरवर्षी दहावी व बारावीतील गुणवंत विद्यार्थ्यांचा सत्कार आणि गरजू विद्यार्थ्यांना वह्या व शैक्षणिक साहित्याचे वाटप.",
            en: "Felicitation of meritorious 10th & 12th board students and distribution of educational kits to underprivileged students."
        },
        imageSlot: "assets/images/social-work/education.jpg"
    },
    {
        id: "tree-plantation",
        icon: "bi-tree",
        title: { mr: "वृक्षारोपण व पर्यावरण संवर्धन", en: "Tree Plantation & Environmental Drive" },
        desc: { 
            mr: "छत्रपती संभाजीनगर परिसरामध्ये हिरवाई वाढवण्यासाठी संस्थेच्या वतीने दरवर्षी शेकडो वृक्षांची लागवड व जतन.",
            en: "Annual green drives planting hundreds of trees across Chhatrapati Sambhajinagar to nurture local ecology."
        },
        imageSlot: "assets/images/social-work/tree-plantation.jpg"
    },
    {
        id: "health-camp",
        icon: "bi-hospital",
        title: { mr: "मोफत आरोग्य तपासणी व रक्तदान शिबिर", en: "Free Health Checkup & Blood Donation Camps" },
        desc: { 
            mr: "सभासद आणि नागरिकांच्या आरोग्यासाठी तज्ज्ञ डॉक्टरांच्या सहकार्याने नेत्र व आरोग्य शिबिरांचे आयोजन.",
            en: "Organizing free health screenings, eye checkups, and voluntary blood donation camps in association with medical experts."
        },
        imageSlot: "assets/images/social-work/health-camp.jpg"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = socialWorkData;
} else {
    window.socialWorkData = socialWorkData;
}
