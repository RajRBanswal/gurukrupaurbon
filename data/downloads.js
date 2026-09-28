/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Downloads Center Database
 */

const downloadsData = [
    {
        id: "membership-form",
        category: "forms",
        title: { mr: "सभासदत्व नोंदणी अर्ज", en: "Society Membership Application Form" },
        format: "PDF",
        fileSize: "450 KB",
        fileUrl: "#"
    },
    {
        id: "home-loan-form",
        category: "loan_forms",
        title: { mr: "गृह कर्ज अर्ज नमुना", en: "Home Loan Application Form" },
        format: "PDF",
        fileSize: "620 KB",
        fileUrl: "#"
    },
    {
        id: "fd-opening-form",
        category: "deposit_forms",
        title: { mr: "मुदत ठेव (FD) खाते उघडण्याचा अर्ज", en: "Fixed Deposit Opening Form" },
        format: "PDF",
        fileSize: "380 KB",
        fileUrl: "#"
    },
    {
        id: "kyc-update-form",
        category: "kyc",
        title: { mr: "केवायसी (KYC) अद्ययावत अर्ज", en: "KYC Details Updation Form" },
        format: "PDF",
        fileSize: "310 KB",
        fileUrl: "#"
    },
    {
        id: "annual-report-2025",
        category: "reports",
        title: { mr: "वार्षिक अहवाल २०२४-२०२५", en: "Annual Financial Report 2024-2025" },
        format: "PDF",
        fileSize: "2.4 MB",
        fileUrl: "#"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = downloadsData;
} else {
    window.downloadsData = downloadsData;
}
