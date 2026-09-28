/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Board of Directors & Leadership Data
 */

const directorsData = [
    {
        id: "chairman",
        designation: { mr: "अध्यक्ष", en: "Chairman" },
        name: { mr: "[अधिकृत अध्यक्षांचे नाव]", en: "[OFFICIAL CHAIRMAN NAME REQUIRED]" },
        messageSnippet: {
            mr: "सभासदांचा विश्वास आणि आर्थिक पारदर्शकता हेच आमचे मुख्य ध्येय आहे. संस्थेच्या प्रगतीत प्रत्येक सभासदाचे योगदान मोलाचे आहे.",
            en: "Member trust and financial transparency are our guiding principles. Every member plays a crucial role in our progress."
        },
        imageSlot: "assets/images/directors/chairman.jpg"
    },
    {
        id: "vice-chairman",
        designation: { mr: "उपाध्यक्ष", en: "Vice Chairman" },
        name: { mr: "[अधिकृत उपाध्यक्षांचे नाव]", en: "[OFFICIAL VICE CHAIRMAN NAME REQUIRED]" },
        messageSnippet: {
            mr: "सहकाराच्या माध्यमातून समाजातील तळागाळातील घटकांचा आर्थिक विकास साधण्यासाठी आम्ही कटिबद्ध आहोत.",
            en: "We are committed to empowering every section of society through cooperative financial support."
        },
        imageSlot: "assets/images/directors/vice-chairman.jpg"
    },
    {
        id: "general-manager",
        designation: { mr: "मुख्य कार्यकारी अधिकारी / व्यवस्थापक", en: "Chief Executive Officer / Manager" },
        name: { mr: "[अधिकृत मुख्य कार्यकारी अधिकारी]", en: "[OFFICIAL CEO NAME REQUIRED]" },
        messageSnippet: {
            mr: "ग्राहक समाधान आणि आधुनिक तंत्रज्ञानाची जोड देऊन सुलभ बँकिंग सेवा पुरवणे हे आमचे ध्येय आहे.",
            en: "Providing seamless banking services backed by customer satisfaction and modern technology."
        },
        imageSlot: "assets/images/directors/ceo.jpg"
    },
    {
        id: "director-1",
        designation: { mr: "संचालक", en: "Director" },
        name: { mr: "[अधिकृत संचालकांचे नाव]", en: "[OFFICIAL DIRECTOR NAME REQUIRED]" },
        imageSlot: "assets/images/directors/director-1.jpg"
    },
    {
        id: "director-2",
        designation: { mr: "संचालक", en: "Director" },
        name: { mr: "[अधिकृत संचालकांचे नाव]", en: "[OFFICIAL DIRECTOR NAME REQUIRED]" },
        imageSlot: "assets/images/directors/director-2.jpg"
    },
    {
        id: "director-3",
        designation: { mr: "संचालक", en: "Director" },
        name: { mr: "[अधिकृत संचालकांचे नाव]", en: "[OFFICIAL DIRECTOR NAME REQUIRED]" },
        imageSlot: "assets/images/directors/director-3.jpg"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = directorsData;
} else {
    window.directorsData = directorsData;
}
