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
    correct: 0
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
  },

  {
    id: 36,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "निम्नलिखित में से कौन-सी फसल सामान्यतः खरीफ फसल है?",
    options: ["गेहूँ", "धान", "चना", "सरसों"],
    correct: 1
  },
  {
    id: 37,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "मिट्टी को पलटने और ढीला करने के लिए किस कृषि उपकरण का उपयोग किया जाता है?",
    options: ["हल", "खुरपी", "दरांती", "थ्रेशर"],
    correct: 0
  },
  {
    id: 38,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "वायुमंडलीय नाइट्रोजन को पौधों के लिए उपयोगी रूप में बदलने में कौन-सा जीवाणु सहायक है?",
    options: ["लैक्टोबैसिलस", "राइजोबियम", "यीस्ट", "पेनिसिलियम"],
    correct: 1
  },
  {
    id: 39,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "दूध से दही बनाने में कौन-सा सूक्ष्मजीव मुख्य रूप से सहायक होता है?",
    options: ["राइजोबियम", "लैक्टोबैसिलस", "प्लाज्मोडियम", "यीस्ट"],
    correct: 1
  },
  {
    id: 40,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "लकड़ी के गूदे से बनाए जाने वाले कृत्रिम रेशे को क्या कहते हैं?",
    options: ["नायलॉन", "पॉलिएस्टर", "रेयॉन", "ऐक्रिलिक"],
    correct: 2
  },
  {
    id: 41,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "निम्नलिखित में से कौन-सा थर्मोसेटिंग प्लास्टिक है?",
    options: ["पॉलीथीन", "PVC", "बेकेलाइट", "पॉलिप्रोपिलीन"],
    correct: 2
  },
  {
    id: 42,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "निम्नलिखित में से कौन-सी धातु विद्युत की अच्छी चालक है?",
    options: ["तांबा", "गंधक", "फॉस्फोरस", "कार्बन"],
    correct: 0
  },
  {
    id: 43,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "कोयला और पेट्रोलियम किस प्रकार के ईंधन हैं?",
    options: ["जैव ईंधन", "जीवाश्म ईंधन", "सौर ईंधन", "कृत्रिम ईंधन"],
    correct: 1
  },
  {
    id: 44,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "वह न्यूनतम तापमान जिस पर कोई पदार्थ आग पकड़ लेता है, कहलाता है—",
    options: ["उबलने का तापमान", "गलनांक", "प्रज्वलन तापमान", "कमरे का तापमान"],
    correct: 2
  },
  {
    id: 45,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "वन्यजीव अभयारण्य का मुख्य उद्देश्य क्या है?",
    options: ["केवल लकड़ी प्राप्त करना", "वन्य जीवों की सुरक्षा करना", "खेती बढ़ाना", "शहर बसाना"],
    correct: 1
  },
  {
    id: 46,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "वनों की कटाई से निम्नलिखित में से कौन-सी समस्या बढ़ सकती है?",
    options: ["मृदा अपरदन", "वर्षा जल का संचयन", "मिट्टी की उर्वरता में हमेशा वृद्धि", "जैव विविधता में वृद्धि"],
    correct: 0
  },
  {
    id: 47,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "जीवों की संरचनात्मक और क्रियात्मक मूल इकाई क्या है?",
    options: ["ऊतक", "कोशिका", "अंग", "नाभिक"],
    correct: 1
  },
  {
    id: 48,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "कोशिका का कौन-सा भाग उसकी अधिकांश गतिविधियों को नियंत्रित करता है?",
    options: ["कोशिका झिल्ली", "नाभिक", "रिक्तिका", "कोशिका भित्ति"],
    correct: 1
  },
  {
    id: 49,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "यीस्ट में अलैंगिक जनन सामान्यतः किस विधि से होता है?",
    options: ["खंडन", "कलिकाजनन", "बीजाणु निर्माण", "परागण"],
    correct: 1
  },
  {
    id: 50,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "मलेरिया रोग किस सूक्ष्मजीव के कारण होता है?",
    options: ["बैक्टीरिया", "विषाणु", "प्लाज्मोडियम नामक प्रोटोजोआ", "कवक"],
    correct: 2
  },
  {
    id: 51,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "दाब (Pressure) किसके बराबर होता है?",
    options: ["बल × क्षेत्रफल", "बल ÷ क्षेत्रफल", "क्षेत्रफल ÷ बल", "बल + क्षेत्रफल"],
    correct: 1
  },
  {
    id: 52,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "हम बिना फिसले जमीन पर चल पाते हैं। इसमें मुख्य रूप से किसका योगदान है?",
    options: ["गुरुत्वाकर्षण की अनुपस्थिति", "घर्षण", "चुंबकत्व", "ध्वनि"],
    correct: 1
  },
  {
    id: 53,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "ध्वनि उत्पन्न होने का मूल कारण क्या है?",
    options: ["प्रकाश", "कंपन", "ऊष्मा", "दाब का अभाव"],
    correct: 1
  },
  {
    id: 54,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "ध्वनि का तारत्व (Pitch) मुख्य रूप से किस पर निर्भर करता है?",
    options: ["आवृत्ति", "आयाम", "ध्वनि की चाल", "माध्यम के रंग"],
    correct: 0
  },
  {
    id: 55,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "किसी धातु की वस्तु पर दूसरी धातु की पतली परत चढ़ाने की प्रक्रिया कहलाती है—",
    options: ["विद्युत अपघटन", "विद्युतलेपन (Electroplating)", "वाष्पीकरण", "आसवन"],
    correct: 1
  },
  {
    id: 56,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "आकाश में बिजली चमकने के समय खुले मैदान में होने पर सबसे सुरक्षित व्यवहार क्या है?",
    options: ["पेड़ के नीचे खड़ा होना", "जमीन पर सीधा लेट जाना", "नीचे झुककर शरीर को जितना संभव हो छोटा रखना", "धातु की वस्तु पकड़ना"],
    correct: 2
  },
  {
    id: 57,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "परावर्तन के नियम के अनुसार आपतन कोण और परावर्तन कोण में क्या संबंध है?",
    options: ["दोनों हमेशा अलग होते हैं", "आपतन कोण परावर्तन कोण के बराबर होता है", "आपतन कोण दोगुना होता है", "परावर्तन कोण शून्य होता है"],
    correct: 1
  },
  {
    id: 58,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "प्रिज्म से गुजरते समय श्वेत प्रकाश का कई रंगों में विभाजित होना कहलाता है—",
    options: ["परावर्तन", "विसरण (Dispersion)", "वाष्पीकरण", "चालन"],
    correct: 1
  },
  {
    id: 59,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "निम्नलिखित में से कौन स्वयं प्रकाश उत्पन्न नहीं करता?",
    options: ["सूर्य", "तारा", "विद्युत बल्ब", "चंद्रमा"],
    correct: 3
  },
  {
    id: 60,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "किसी वस्तु पर लगाया गया बल उसकी गति के साथ-साथ उसके आकार में भी क्या कर सकता है?",
    options: ["केवल रंग बदल सकता है", "परिवर्तन कर सकता है", "हमेशा तापमान घटा सकता है", "कुछ नहीं कर सकता"],
    correct: 1
  },
  {
    id: 61,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "किसी द्रव द्वारा लगाया गया दाब गहराई बढ़ने पर सामान्यतः क्या होता है?",
    options: ["घटता है", "बढ़ता है", "हमेशा शून्य हो जाता है", "बदलता नहीं है"],
    correct: 1
  },
  {
    id: 62,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "गर्मियों में मिट्टी के घड़े का पानी ठंडा क्यों रहता है?",
    options: ["घड़ा पानी को गर्म करता है", "पानी जम जाता है", "घड़े की सतह से पानी का वाष्पीकरण ऊष्मा ले जाता है", "घड़े में प्रकाश नहीं पहुँचता"],
    correct: 2
  },
  {
    id: 63,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "दलहनी फसल को फसल चक्र में शामिल करने से मिट्टी की उर्वरता बनाए रखने में क्यों मदद मिलती है?",
    options: ["वे मिट्टी से सारा नाइट्रोजन निकाल लेती हैं", "उनकी जड़ों में राइजोबियम नाइट्रोजन स्थिरीकरण में मदद करता है", "वे मिट्टी को पूरी तरह सूखा देती हैं", "वे सूर्य के प्रकाश को रोकती हैं"],
    correct: 1
  },
  {
    id: 64,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "एक किसान बहुत अधिक रासायनिक उर्वरक के बजाय जैविक खाद का प्रयोग करता है। खाद का एक प्रमुख लाभ क्या है?",
    options: ["यह तुरंत सभी कीटों को समाप्त कर देती है", "यह मिट्टी में ह्यूमस बढ़ाकर उसकी जलधारण क्षमता सुधार सकती है", "यह पौधों को प्रकाश से मुक्त कर देती है", "यह मिट्टी को हमेशा अम्लीय बना देती है"],
    correct: 1
  },
  {
    id: 65,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "पेनिसिलिन जैसे कुछ एंटीबायोटिक किस प्रकार के सूक्ष्मजीव से प्राप्त किए जाते हैं?",
    options: ["कुछ कवक", "केवल शैवाल", "केवल प्रोटोजोआ", "केवल कीट"],
    correct: 0
  },
  {
    id: 66,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "सोडियम जैसी अत्यधिक क्रियाशील धातु को मिट्टी के तेल (केरोसिन) में क्यों रखा जाता है?",
    options: ["उसे ठंडा रखने के लिए", "हवा और नमी के साथ तीव्र अभिक्रिया से बचाने के लिए", "उसका रंग बदलने के लिए", "उसकी विद्युत चालकता बढ़ाने के लिए"],
    correct: 1
  },
  {
    id: 67,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "तेल की आग पर पानी डालना खतरनाक हो सकता है। ऐसी आग को बुझाने में रेत या उपयुक्त अग्निशामक क्यों अधिक उपयोगी है?",
    options: ["वे आग को अधिक ऑक्सीजन देते हैं", "वे आग और वायु के संपर्क को कम करते हैं", "वे तेल का तापमान बढ़ाते हैं", "वे तेल को अधिक ज्वलनशील बनाते हैं"],
    correct: 1
  },
  {
    id: 68,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "लुप्तप्राय और संकटग्रस्त प्रजातियों के बारे में जानकारी दर्ज करने वाली पुस्तक को क्या कहा जाता है?",
    options: ["ग्रीन बुक", "ब्लू बुक", "रेड डेटा बुक", "व्हाइट बुक"],
    correct: 2
  },
  {
    id: 69,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "पौधों की कोशिकाओं में प्रकाश संश्लेषण के लिए मुख्य रूप से कौन-सा कोशिकांग आवश्यक है?",
    options: ["नाभिक", "क्लोरोप्लास्ट", "रिक्तिका", "राइबोसोम"],
    correct: 1
  },
  {
    id: 70,
    subject: "सामान्य विज्ञान",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "आकाश में बिजली चमकने के कुछ समय बाद गरज सुनाई देती है। इसका मुख्य कारण क्या है?",
    options: ["ध्वनि प्रकाश से तेज चलती है", "प्रकाश ध्वनि की तुलना में बहुत तेज चलता है", "बिजली केवल रात में बनती है", "ध्वनि हवा में नहीं चलती"],
    correct: 1
  },

  {
    id: 71,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "Read the passage and answer the question.\n\nRiya enjoys reading books in her free time. She visits the school library every Friday and usually borrows one storybook. Reading has helped her learn many new words and ideas.\n\nWhy does Riya visit the school library?",
    options: ["To play games", "To borrow a storybook", "To meet her friends", "To complete a science experiment"],
    correct: 1
  },
  {
    id: 72,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "According to the passage, how has reading helped Riya?",
    options: ["It has helped her learn new words and ideas", "It has made her sleep more", "It has taught her to play football", "It has reduced her school time"],
    correct: 0
  },
  {
    id: 73,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "Read the passage.\n\nRiya enjoys reading books in her free time. She visits the school library every Friday and usually borrows one storybook. Reading has helped her learn many new words and ideas.\n\nWhich statement is true?",
    options: ["Riya visits the library every Monday", "Riya borrows a newspaper every Friday", "Riya usually borrows one storybook", "Riya does not like reading"],
    correct: 2
  },
  {
    id: 74,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "Read the passage and choose the best meaning of the word “usually”.",
    options: ["Never", "Normally", "Suddenly", "Rarely"],
    correct: 1
  },
  {
    id: 75,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "What is the main idea of the passage?",
    options: ["Riya dislikes books", "The school library is closed on Fridays", "Reading is a useful habit for Riya", "Riya wants to become a teacher"],
    correct: 2
  },
  {
    id: 76,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "Choose the correct option: She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    correct: 1
  },
  {
    id: 77,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "Choose the correct article: He is ___ honest boy.",
    options: ["a", "an", "the", "no article"],
    correct: 1
  },
  {
    id: 78,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "Choose the correct preposition: The book is ___ the table.",
    options: ["in", "on", "at", "by"],
    correct: 1
  },
  {
    id: 79,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "Choose the correct form: When I reached the station, the train ___.",
    options: ["leaves", "has left", "had left", "will leave"],
    correct: 2
  },
  {
    id: 80,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "Choose the sentence with correct subject–verb agreement.",
    options: ["The boys plays cricket.", "The boys play cricket.", "The boys playing cricket.", "The boys has played cricket."],
    correct: 1
  },
  {
    id: 81,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "Choose the synonym of “brave”.",
    options: ["Cowardly", "Clever", "Courageous", "Quiet"],
    correct: 2
  },
  {
    id: 82,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "Choose the antonym of “ancient”.",
    options: ["Old", "Modern", "Broken", "Large"],
    correct: 1
  },
  {
    id: 83,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "Choose the word that best completes the sentence: The child was very ___ because he had won the prize.",
    options: ["sad", "angry", "happy", "careless"],
    correct: 2
  },
  {
    id: 84,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "Choose the correctly arranged sentence.",
    options: ["Always school I on time reach.", "I reach always on time school.", "I always reach school on time.", "On school I always time reach."],
    correct: 2
  },
  {
    id: 85,
    subject: "English",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "Choose the correct sentence.",
    options: ["Neither of the boys are ready.", "Neither of the boys is ready.", "Neither of the boys were ready.", "Neither of the boys have ready."],
    correct: 1
  },

  {
    id: 86,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए।\n\nपेड़ हमारे जीवन के लिए बहुत महत्वपूर्ण हैं। वे हमें ऑक्सीजन, फल, छाया और लकड़ी देते हैं। पेड़ मिट्टी के कटाव को रोकने में भी सहायता करते हैं। इसलिए हमें अधिक से अधिक पेड़ लगाकर उनकी रक्षा करनी चाहिए।\n\nगद्यांश के अनुसार पेड़ हमें क्या देते हैं?",
    options: ["केवल लकड़ी", "ऑक्सीजन, फल, छाया और लकड़ी", "केवल फल", "केवल छाया"],
    correct: 1
  },
  {
    id: 87,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "उपरोक्त गद्यांश का मुख्य संदेश क्या है?",
    options: ["पेड़ काटने चाहिए", "केवल फल देने वाले पेड़ लगाने चाहिए", "पेड़ों को लगाना और उनकी रक्षा करना चाहिए", "पेड़ों की कोई आवश्यकता नहीं है"],
    correct: 2
  },
  {
    id: 88,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "‘प्रसन्न’ शब्द का विलोम क्या है?",
    options: ["आनंदित", "उदास", "हर्षित", "खुश"],
    correct: 1
  },
  {
    id: 89,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "‘सूर्य’ का पर्यायवाची शब्द कौन-सा है?",
    options: ["पवन", "रवि", "जलद", "धरती"],
    correct: 1
  },
  {
    id: 90,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    question: "‘विद्यालय’ शब्द में कौन-सी संधि है?",
    options: ["गुण संधि", "वृद्धि संधि", "दीर्घ संधि", "यण संधि"],
    correct: 2
  },
  {
    id: 91,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "‘राजपुत्र’ शब्द में कौन-सा समास है?",
    options: ["द्वंद्व समास", "तत्पुरुष समास", "बहुव्रीहि समास", "अव्ययीभाव समास"],
    correct: 1
  },
  {
    id: 92,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "‘लड़कियाँ मैदान में खेल रही हैं।’ इस वाक्य में क्रिया कौन-सी है?",
    options: ["लड़कियाँ", "मैदान", "में", "खेल रही हैं"],
    correct: 3
  },
  {
    id: 93,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "‘राम ने आम खाया।’ वाक्य में ‘राम’ कौन-सा कारक है?",
    options: ["कर्म कारक", "कर्ता कारक", "करण कारक", "अधिकरण कारक"],
    correct: 1
  },
  {
    id: 94,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "निम्नलिखित में से शुद्ध वाक्य कौन-सा है?",
    options: ["मुझे हिंदी पढ़ना अच्छा लगती है।", "मुझे हिंदी पढ़ना अच्छा लगता है।", "मुझे हिंदी पढ़ना अच्छी लगता है।", "मुझे हिंदी पढ़ना अच्छे लगता है।"],
    correct: 1
  },
  {
    id: 95,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "‘आँखों का तारा’ मुहावरे का सही अर्थ क्या है?",
    options: ["बहुत दूर की वस्तु", "बहुत प्रिय व्यक्ति", "बहुत क्रोधित व्यक्ति", "बहुत कमजोर व्यक्ति"],
    correct: 1
  },
  {
    id: 96,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "‘जो मेहनत करता है, वही सफल होता है।’ यह किस प्रकार का वाक्य है?",
    options: ["सरल वाक्य", "संयुक्त वाक्य", "मिश्र वाक्य", "विस्मयादिबोधक वाक्य"],
    correct: 2
  },
  {
    id: 97,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "moderate",
    question: "‘धीरे-धीरे’ शब्द किस प्रकार का क्रिया-विशेषण है?",
    options: ["कालवाचक", "स्थानवाचक", "रीतिवाचक", "परिमाणवाचक"],
    correct: 2
  },
  {
    id: 98,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "‘नदी’ का लिंग क्या है?",
    options: ["पुल्लिंग", "स्त्रीलिंग", "उभयलिंग", "इनमें से कोई नहीं"],
    correct: 1
  },
  {
    id: 99,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "‘वह बाजार गया और फल खरीद लाया।’ यह किस प्रकार का वाक्य है?",
    options: ["सरल वाक्य", "संयुक्त वाक्य", "मिश्र वाक्य", "प्रश्नवाचक वाक्य"],
    correct: 1
  },
  {
    id: 100,
    subject: "हिंदी",
    type: "mcq",
    marks: 1,
    difficulty: "challenging",
    question: "‘यदि तुम नियमित अभ्यास करोगे, तो तुम्हारे अंक बेहतर होंगे।’ वाक्य में ‘यदि’ किस प्रकार का अव्यय है?",
    options: ["समुच्चयबोधक अव्यय", "क्रियाविशेषण", "संबंधबोधक अव्यय", "विस्मयादिबोधक अव्यय"],
    correct: 0
  }
];