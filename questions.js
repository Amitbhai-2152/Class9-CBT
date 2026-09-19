// JNVST Class 9 Mock Test 2027–28 — Hindi Medium
// Part 1: Mathematics (35 MCQs)
// Class 8 level diagnostic question bank.

const QUESTIONS = [
  {
    id: 1,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "3/4 - 5/6 का मान क्या है?",
    options: ["1/12", "-1/12", "-7/12", "7/12"],
    correct: 1
  },
  {
    id: 2,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "(-7/9) × (27/14) का मान है—",
    options: ["-3/2", "3/2", "-7/6", "7/6"],
    correct: 0
  },
  {
    id: 3,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "-5/8 का गुणनात्मक प्रतिलोम क्या है?",
    options: ["5/8", "-5/8", "8/5", "-8/5"],
    correct: 3
  },
  {
    id: 4,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "35 का वर्ग क्या है?",
    options: ["1125", "1225", "1250", "1325"],
    correct: 1
  },
  {
    id: 5,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "√1764 का मान है—",
    options: ["38", "40", "42", "44"],
    correct: 2
  },
  {
    id: 6,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "√0.0081 का मान क्या है?",
    options: ["0.009", "0.09", "0.9", "0.0009"],
    correct: 1
  },
  {
    id: 7,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "12³ का मान है—",
    options: ["144", "432", "1728", "1331"],
    correct: 2
  },
  {
    id: 8,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "∛3375 का मान है—",
    options: ["12", "15", "18", "25"],
    correct: 1
  },
  {
    id: 9,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "(-2)⁵ का मान क्या है?",
    options: ["32", "-32", "16", "-16"],
    correct: 1
  },
  {
    id: 10,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "2³ × 2⁴ का मान है—",
    options: ["32", "64", "128", "256"],
    correct: 2
  },
  {
    id: 11,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "3⁻² का मान है—",
    options: ["9", "-9", "1/9", "-1/9"],
    correct: 2
  },
  {
    id: 12,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "5 कॉपियों की कीमत ₹60 है। समान दर पर 8 कॉपियों की कीमत कितनी होगी?",
    options: ["₹84", "₹90", "₹96", "₹100"],
    correct: 2
  },
  {
    id: 13,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "12 मजदूर किसी काम को 15 दिनों में पूरा करते हैं। उसी काम को 20 मजदूर कितने दिनों में पूरा करेंगे?",
    options: ["8 दिन", "9 दिन", "10 दिन", "12 दिन"],
    correct: 1
  },
  {
    id: 14,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "240 का 25% कितना है?",
    options: ["50", "55", "60", "65"],
    correct: 2
  },
  {
    id: 15,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "किसी वस्तु का क्रय मूल्य ₹800 और विक्रय मूल्य ₹920 है। लाभ प्रतिशत कितना है?",
    options: ["10%", "12%", "15%", "20%"],
    correct: 2
  },
  {
    id: 16,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "किसी वस्तु का अंकित मूल्य ₹1500 है और उस पर 12% की छूट दी गई। विक्रय मूल्य क्या होगा?",
    options: ["₹1280", "₹1320", "₹1350", "₹1380"],
    correct: 1
  },
  {
    id: 17,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "₹5000 पर 8% वार्षिक दर से 2 वर्षों का साधारण ब्याज कितना होगा?",
    options: ["₹400", "₹600", "₹800", "₹1000"],
    correct: 2
  },
  {
    id: 18,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "₹10,000 पर 10% वार्षिक चक्रवृद्धि ब्याज की दर से 2 वर्षों में चक्रवृद्धि ब्याज कितना होगा?",
    options: ["₹2000", "₹2100", "₹2200", "₹2500"],
    correct: 1
  },
  {
    id: 19,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "3x + 5x - 2 का सरल रूप है—",
    options: ["8x - 2", "8x + 2", "2x - 8", "8x"],
    correct: 0
  },
  {
    id: 20,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "(a + b)² बराबर है—",
    options: ["a² + b²", "a² + 2ab + b²", "a² - ab + b²", "a² + ab + b²"],
    correct: 1
  },
  {
    id: 21,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "x² - 9 का गुणनखंड है—",
    options: ["(x - 9)(x + 1)", "(x - 3)(x + 3)", "(x - 9)(x + 9)", "(x - 1)(x + 9)"],
    correct: 1
  },
  {
    id: 22,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "6x + 12 का गुणनखंड रूप है—",
    options: ["6(x + 2)", "12(x + 6)", "6(x - 2)", "3(x + 4)"],
    correct: 0
  },
  {
    id: 23,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "3x + 7 = 25 में x का मान क्या है?",
    options: ["5", "6", "7", "8"],
    correct: 1
  },
  {
    id: 24,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "5(x - 2) = 3x + 14 में x का मान है—",
    options: ["10", "11", "12", "13"],
    correct: 2
  },
  {
    id: 25,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "2x/3 = 10 में x का मान है—",
    options: ["12", "15", "18", "20"],
    correct: 1
  },
  {
    id: 26,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "एक समांतर चतुर्भुज का एक कोण 110° है। उसके आसन्न कोण का माप होगा—",
    options: ["60°", "70°", "80°", "110°"],
    correct: 1
  },
  {
    id: 27,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "एक चतुर्भुज के तीन कोण 80°, 90° और 100° हैं। चौथे कोण का माप कितना है?",
    options: ["80°", "90°", "100°", "110°"],
    correct: 1
  },
  {
    id: 28,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "समांतर चतुर्भुज की कौन-सी बात सदैव सत्य है?",
    options: ["सभी कोण 90° होते हैं", "सभी भुजाएँ बराबर होती हैं", "विपरीत भुजाएँ बराबर और समांतर होती हैं", "विकर्ण सदैव लंबवत होते हैं"],
    correct: 2
  },
  {
    id: 29,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "एक समलंब चतुर्भुज की समानांतर भुजाएँ 10 सेमी और 16 सेमी हैं तथा ऊँचाई 7 सेमी है। उसका क्षेत्रफल कितना होगा?",
    options: ["84 सेमी²", "91 सेमी²", "98 सेमी²", "105 सेमी²"],
    correct: 1
  },
  {
    id: 30,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "एक घनाभ की लंबाई 12 सेमी, चौड़ाई 5 सेमी और ऊँचाई 4 सेमी है। उसका आयतन कितना है?",
    options: ["200 सेमी³", "220 सेमी³", "240 सेमी³", "260 सेमी³"],
    correct: 2
  },
  {
    id: 31,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "6 सेमी भुजा वाले घन का सम्पूर्ण पृष्ठीय क्षेत्रफल कितना होगा?",
    options: ["144 सेमी²", "180 सेमी²", "216 सेमी²", "256 सेमी²"],
    correct: 2
  },
  {
    id: 32,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "एक बेलन की त्रिज्या 7 सेमी और ऊँचाई 10 सेमी है। π = 22/7 लेने पर उसका आयतन कितना होगा?",
    options: ["1540 सेमी³", "3080 सेमी³", "440 सेमी³", "770 सेमी³"],
    correct: 1
  },
  {
    id: 33,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "किसी कक्षा में चार दिनों में उपस्थित विद्यार्थियों की संख्या क्रमशः 20, 25, 30 और 35 थी। इन चार दिनों का औसत उपस्थित विद्यार्थियों की संख्या कितनी है?",
    options: ["25", "26.5", "27.5", "30"],
    correct: 2
  },
  {
    id: 34,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "किसी वृत्त-चित्र (Pie Chart) में किसी भाग का कोण 90° है। वह पूरे आँकड़े का कितने प्रतिशत दर्शाता है?",
    options: ["20%", "25%", "30%", "40%"],
    correct: 1
  },
  {
    id: 35,
    subject: "गणित",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "एक थैले में 5 लाल और 3 नीली गेंदें हैं। बिना देखे एक गेंद निकाली जाती है। नीली गेंद निकलने की प्रायिकता क्या है?",
    options: ["3/5", "3/8", "5/8", "1/3"],
    correct: 1
  }
];
