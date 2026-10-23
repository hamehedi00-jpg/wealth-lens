/*
  ============================================================
  IFA LIST: one entry per advisor
  ============================================================
  Each IFA gets a personal link:  https://your-site/?ifa=CODE
  On that link the page shows that advisor, and every WhatsApp message goes to their number.
  The share card QR also carries the code, so people who scan it land on the same advisor.
  Without a code, the page shows the advisor from config.js.

  To add an IFA, copy one block, change the code and details, and commit this file.
  - code: letters, numbers, - or _ , up to 20 characters (for example the IFA's ID number)
  - whatsapp: international format, no + or spaces (8801XXXXXXXXX)
  - photo: optional. Add a square photo file to the repo and put its file name here, for example "1001.jpg".
  Leave a field out to keep the default from config.js.
*/
window.IFAS = {
  /*
  "1001": {
    nameBn: "আইএফএ-র নাম",
    nameEn: "IFA Name",
    titleBn: "ফাইন্যান্সিয়াল প্ল্যানার",
    titleEn: "Financial Planner",
    whatsapp: "8801XXXXXXXXX",
    whatsappDisplay: "01XXX-XXXXXX",
    facebook: "",
    photo: ""
  }
  */
};
