// JNVST Class 9 Mock Test 2027–28 — Hindi Medium
// Complete 100-question diagnostic bank.
// Options are deterministically shuffled to reduce position-pattern guessing.
// English passage questions use a separate passage block for clean rendering.

const QUESTIONS = [
  {
    "id": 1,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "3/4 - 5/6 का मान क्या है?",
    "options": [
      "1/12",
      "7/12",
      "-7/12",
      "-1/12"
    ],
    "correct": 3
  },
  {
    "id": 2,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "(-7/9) × (27/14) का मान है—",
    "options": [
      "-3/2",
      "3/2",
      "7/6",
      "-7/6"
    ],
    "correct": 0
  },
  {
    "id": 3,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "-5/8 का गुणनात्मक प्रतिलोम क्या है?",
    "options": [
      "-5/8",
      "5/8",
      "-8/5",
      "8/5"
    ],
    "correct": 2
  },
  {
    "id": 4,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "35 का वर्ग क्या है?",
    "options": [
      "1250",
      "1325",
      "1125",
      "1225"
    ],
    "correct": 3
  },
  {
    "id": 5,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "√1764 का मान है—",
    "options": [
      "38",
      "40",
      "42",
      "44"
    ],
    "correct": 2
  },
  {
    "id": 6,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "√0.0081 का मान क्या है?",
    "options": [
      "0.009",
      "0.9",
      "0.09",
      "0.0009"
    ],
    "correct": 2
  },
  {
    "id": 7,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "12³ का मान है—",
    "options": [
      "432",
      "1728",
      "144",
      "1331"
    ],
    "correct": 1
  },
  {
    "id": 8,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "∛3375 का मान है—",
    "options": [
      "12",
      "15",
      "18",
      "25"
    ],
    "correct": 1
  },
  {
    "id": 9,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "(-2)⁵ का मान क्या है?",
    "options": [
      "-32",
      "16",
      "-16",
      "32"
    ],
    "correct": 0
  },
  {
    "id": 10,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "2³ × 2⁴ का मान है—",
    "options": [
      "32",
      "64",
      "256",
      "128"
    ],
    "correct": 3
  },
  {
    "id": 11,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "3⁻² का मान है—",
    "options": [
      "-1/9",
      "-9",
      "1/9",
      "9"
    ],
    "correct": 2
  },
  {
    "id": 12,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "5 कॉपियों की कीमत ₹60 है। समान दर पर 8 कॉपियों की कीमत कितनी होगी?",
    "options": [
      "₹90",
      "₹84",
      "₹96",
      "₹100"
    ],
    "correct": 2
  },
  {
    "id": 13,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "12 मजदूर किसी काम को 15 दिनों में पूरा करते हैं। उसी काम को 20 मजदूर कितने दिनों में पूरा करेंगे?",
    "options": [
      "10 दिन",
      "8 दिन",
      "9 दिन",
      "12 दिन"
    ],
    "correct": 2
  },
  {
    "id": 14,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "240 का 25% कितना है?",
    "options": [
      "60",
      "55",
      "50",
      "65"
    ],
    "correct": 0
  },
  {
    "id": 15,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "किसी वस्तु का क्रय मूल्य ₹800 और विक्रय मूल्य ₹920 है। लाभ प्रतिशत कितना है?",
    "options": [
      "10%",
      "15%",
      "20%",
      "12%"
    ],
    "correct": 1
  },
  {
    "id": 16,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "किसी वस्तु का अंकित मूल्य ₹1500 है और उस पर 12% की छूट दी गई। विक्रय मूल्य क्या होगा?",
    "options": [
      "₹1280",
      "₹1320",
      "₹1350",
      "₹1380"
    ],
    "correct": 1
  },
  {
    "id": 17,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "₹5000 पर 8% वार्षिक दर से 2 वर्षों का साधारण ब्याज कितना होगा?",
    "options": [
      "₹1000",
      "₹800",
      "₹600",
      "₹400"
    ],
    "correct": 1
  },
  {
    "id": 18,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "₹10,000 पर 10% वार्षिक चक्रवृद्धि ब्याज की दर से 2 वर्षों में चक्रवृद्धि ब्याज कितना होगा?",
    "options": [
      "₹2200",
      "₹2500",
      "₹2000",
      "₹2100"
    ],
    "correct": 3
  },
  {
    "id": 19,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "3x + 5x - 2 का सरल रूप है—",
    "options": [
      "8x - 2",
      "8x + 2",
      "8x",
      "2x - 8"
    ],
    "correct": 0
  },
  {
    "id": 20,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "(a + b)² बराबर है—",
    "options": [
      "a² + b²",
      "a² - ab + b²",
      "a² + ab + b²",
      "a² + 2ab + b²"
    ],
    "correct": 3
  },
  {
    "id": 21,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "x² - 9 का गुणनखंड है—",
    "options": [
      "(x - 1)(x + 9)",
      "(x - 3)(x + 3)",
      "(x - 9)(x + 9)",
      "(x - 9)(x + 1)"
    ],
    "correct": 1
  },
  {
    "id": 22,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "6x + 12 का गुणनखंड रूप है—",
    "options": [
      "6(x + 2)",
      "12(x + 6)",
      "6(x - 2)",
      "3(x + 4)"
    ],
    "correct": 0
  },
  {
    "id": 23,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "3x + 7 = 25 में x का मान क्या है?",
    "options": [
      "5",
      "7",
      "8",
      "6"
    ],
    "correct": 3
  },
  {
    "id": 24,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "5(x - 2) = 3x + 14 में x का मान है—",
    "options": [
      "10",
      "13",
      "11",
      "12"
    ],
    "correct": 3
  },
  {
    "id": 25,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "2x/3 = 10 में x का मान है—",
    "options": [
      "12",
      "18",
      "15",
      "20"
    ],
    "correct": 2
  },
  {
    "id": 26,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "एक समांतर चतुर्भुज का एक कोण 110° है। उसके आसन्न कोण का माप होगा—",
    "options": [
      "70°",
      "60°",
      "80°",
      "110°"
    ],
    "correct": 0
  },
  {
    "id": 27,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "एक चतुर्भुज के तीन कोण 80°, 90° और 100° हैं। चौथे कोण का माप कितना है?",
    "options": [
      "100°",
      "90°",
      "110°",
      "80°"
    ],
    "correct": 1
  },
  {
    "id": 28,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "समांतर चतुर्भुज की कौन-सी बात सदैव सत्य है?",
    "options": [
      "सभी कोण 90° होते हैं",
      "सभी भुजाएँ बराबर होती हैं",
      "विपरीत भुजाएँ बराबर और समांतर होती हैं",
      "विकर्ण सदैव लंबवत होते हैं"
    ],
    "correct": 2
  },
  {
    "id": 29,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "एक समलंब चतुर्भुज की समानांतर भुजाएँ 10 सेमी और 16 सेमी हैं तथा ऊँचाई 7 सेमी है। उसका क्षेत्रफल कितना होगा?",
    "options": [
      "84 सेमी²",
      "98 सेमी²",
      "105 सेमी²",
      "91 सेमी²"
    ],
    "correct": 3
  },
  {
    "id": 30,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "एक घनाभ की लंबाई 12 सेमी, चौड़ाई 5 सेमी और ऊँचाई 4 सेमी है। उसका आयतन कितना है?",
    "options": [
      "200 सेमी³",
      "220 सेमी³",
      "240 सेमी³",
      "260 सेमी³"
    ],
    "correct": 2
  },
  {
    "id": 31,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "6 सेमी भुजा वाले घन का सम्पूर्ण पृष्ठीय क्षेत्रफल कितना होगा?",
    "options": [
      "216 सेमी²",
      "180 सेमी²",
      "144 सेमी²",
      "256 सेमी²"
    ],
    "correct": 0
  },
  {
    "id": 32,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "एक बेलन की त्रिज्या 7 सेमी और ऊँचाई 10 सेमी है। π = 22/7 लेने पर उसका आयतन कितना होगा?",
    "options": [
      "3080 सेमी³",
      "440 सेमी³",
      "770 सेमी³",
      "1540 सेमी³"
    ],
    "correct": 3
  },
  {
    "id": 33,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "किसी कक्षा में चार दिनों में उपस्थित विद्यार्थियों की संख्या क्रमशः 20, 25, 30 और 35 थी। इन चार दिनों का औसत उपस्थित विद्यार्थियों की संख्या कितनी है?",
    "options": [
      "25",
      "27.5",
      "26.5",
      "30"
    ],
    "correct": 1
  },
  {
    "id": 34,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "किसी वृत्त-चित्र (Pie Chart) में किसी भाग का कोण 90° है। वह पूरे आँकड़े का कितने प्रतिशत दर्शाता है?",
    "options": [
      "30%",
      "40%",
      "20%",
      "25%"
    ],
    "correct": 3
  },
  {
    "id": 35,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "एक थैले में 5 लाल और 3 नीली गेंदें हैं। बिना देखे एक गेंद निकाली जाती है। नीली गेंद निकलने की प्रायिकता क्या है?",
    "options": [
      "3/8",
      "3/5",
      "1/3",
      "5/8"
    ],
    "correct": 0
  },
  {
    "id": 36,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "निम्नलिखित में से कौन-सी फसल सामान्यतः खरीफ फसल है?",
    "options": [
      "चना",
      "धान",
      "गेहूँ",
      "सरसों"
    ],
    "correct": 1
  },
  {
    "id": 37,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "मिट्टी को पलटने और ढीला करने के लिए किस कृषि उपकरण का उपयोग किया जाता है?",
    "options": [
      "दरांती",
      "खुरपी",
      "हल",
      "थ्रेशर"
    ],
    "correct": 2
  },
  {
    "id": 38,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "वायुमंडलीय नाइट्रोजन को पौधों के लिए उपयोगी रूप में बदलने में कौन-सा जीवाणु सहायक है?",
    "options": [
      "पेनिसिलियम",
      "राइजोबियम",
      "यीस्ट",
      "लैक्टोबैसिलस"
    ],
    "correct": 1
  },
  {
    "id": 39,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "दूध से दही बनाने में कौन-सा सूक्ष्मजीव मुख्य रूप से सहायक होता है?",
    "options": [
      "राइजोबियम",
      "प्लाज्मोडियम",
      "यीस्ट",
      "लैक्टोबैसिलस"
    ],
    "correct": 3
  },
  {
    "id": 40,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "लकड़ी के गूदे से बनाए जाने वाले कृत्रिम रेशे को क्या कहते हैं?",
    "options": [
      "पॉलिएस्टर",
      "नायलॉन",
      "रेयॉन",
      "ऐक्रिलिक"
    ],
    "correct": 2
  },
  {
    "id": 41,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "निम्नलिखित में से कौन-सा थर्मोसेटिंग प्लास्टिक है?",
    "options": [
      "बेकेलाइट",
      "PVC",
      "पॉलीथीन",
      "पॉलिप्रोपिलीन"
    ],
    "correct": 0
  },
  {
    "id": 42,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "निम्नलिखित में से कौन-सी धातु विद्युत की अच्छी चालक है?",
    "options": [
      "कार्बन",
      "तांबा",
      "गंधक",
      "फॉस्फोरस"
    ],
    "correct": 1
  },
  {
    "id": 43,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "कोयला और पेट्रोलियम किस प्रकार के ईंधन हैं?",
    "options": [
      "कृत्रिम ईंधन",
      "सौर ईंधन",
      "जीवाश्म ईंधन",
      "जैव ईंधन"
    ],
    "correct": 2
  },
  {
    "id": 44,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "वह न्यूनतम तापमान जिस पर कोई पदार्थ आग पकड़ लेता है, कहलाता है—",
    "options": [
      "उबलने का तापमान",
      "गलनांक",
      "प्रज्वलन तापमान",
      "कमरे का तापमान"
    ],
    "correct": 2
  },
  {
    "id": 45,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "वन्यजीव अभयारण्य का मुख्य उद्देश्य क्या है?",
    "options": [
      "केवल लकड़ी प्राप्त करना",
      "शहर बसाना",
      "वन्य जीवों की सुरक्षा करना",
      "खेती बढ़ाना"
    ],
    "correct": 2
  },
  {
    "id": 46,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "वनों की कटाई से निम्नलिखित में से कौन-सी समस्या बढ़ सकती है?",
    "options": [
      "जैव विविधता में वृद्धि",
      "वर्षा जल का संचयन",
      "मृदा अपरदन",
      "मिट्टी की उर्वरता में हमेशा वृद्धि"
    ],
    "correct": 2
  },
  {
    "id": 47,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "नर और मादा युग्मकों के संलयन की प्रक्रिया को क्या कहते हैं?",
    "options": [
      "अंकुरण",
      "द्विखंडन",
      "परागण",
      "निषेचन"
    ],
    "correct": 3
  },
  {
    "id": 48,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "किशोरावस्था सामान्यतः किस आयु अवधि को कहा जाता है?",
    "options": [
      "1 से 5 वर्ष",
      "20 से 30 वर्ष",
      "11 से 19 वर्ष",
      "6 से 10 वर्ष"
    ],
    "correct": 2
  },
  {
    "id": 49,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "यीस्ट में अलैंगिक जनन सामान्यतः किस विधि से होता है?",
    "options": [
      "बीजाणु निर्माण",
      "कलिकाजनन",
      "खंडन",
      "परागण"
    ],
    "correct": 1
  },
  {
    "id": 50,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "मलेरिया रोग किस सूक्ष्मजीव के कारण होता है?",
    "options": [
      "कवक",
      "विषाणु",
      "बैक्टीरिया",
      "प्लाज्मोडियम नामक प्रोटोजोआ"
    ],
    "correct": 3
  },
  {
    "id": 51,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "दाब (Pressure) किसके बराबर होता है?",
    "options": [
      "बल + क्षेत्रफल",
      "बल × क्षेत्रफल",
      "बल ÷ क्षेत्रफल",
      "क्षेत्रफल ÷ बल"
    ],
    "correct": 2
  },
  {
    "id": 52,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "हम बिना फिसले जमीन पर चल पाते हैं। इसमें मुख्य रूप से किसका योगदान है?",
    "options": [
      "चुंबकत्व",
      "घर्षण",
      "ध्वनि",
      "गुरुत्वाकर्षण की अनुपस्थिति"
    ],
    "correct": 1
  },
  {
    "id": 53,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "ध्वनि उत्पन्न होने का मूल कारण क्या है?",
    "options": [
      "प्रकाश",
      "दाब का अभाव",
      "कंपन",
      "ऊष्मा"
    ],
    "correct": 2
  },
  {
    "id": 54,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "ध्वनि का तारत्व (Pitch) मुख्य रूप से किस पर निर्भर करता है?",
    "options": [
      "माध्यम के रंग",
      "आयाम",
      "ध्वनि की चाल",
      "आवृत्ति"
    ],
    "correct": 3
  },
  {
    "id": 55,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "किसी धातु की वस्तु पर दूसरी धातु की पतली परत चढ़ाने की प्रक्रिया कहलाती है—",
    "options": [
      "विद्युतलेपन (Electroplating)",
      "विद्युत अपघटन",
      "आसवन",
      "वाष्पीकरण"
    ],
    "correct": 0
  },
  {
    "id": 56,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "आकाश में बिजली चमकने के समय खुले मैदान में होने पर सबसे सुरक्षित व्यवहार क्या है?",
    "options": [
      "पेड़ के नीचे खड़ा होना",
      "जमीन पर सीधा लेट जाना",
      "नीचे झुककर शरीर को जितना संभव हो छोटा रखना",
      "धातु की वस्तु पकड़ना"
    ],
    "correct": 2
  },
  {
    "id": 57,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "परावर्तन के नियम के अनुसार आपतन कोण और परावर्तन कोण में क्या संबंध है?",
    "options": [
      "आपतन कोण दोगुना होता है",
      "दोनों हमेशा अलग होते हैं",
      "परावर्तन कोण शून्य होता है",
      "आपतन कोण परावर्तन कोण के बराबर होता है"
    ],
    "correct": 3
  },
  {
    "id": 58,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "प्रिज्म से गुजरते समय श्वेत प्रकाश का कई रंगों में विभाजित होना कहलाता है—",
    "options": [
      "विसरण (Dispersion)",
      "परावर्तन",
      "चालन",
      "वाष्पीकरण"
    ],
    "correct": 0
  },
  {
    "id": 59,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "मानव शरीर में निषेचन के बाद भ्रूण का विकास मुख्य रूप से किस अंग में होता है?",
    "options": [
      "गर्भाशय",
      "फेफड़ा",
      "हृदय",
      "गुर्दा"
    ],
    "correct": 0
  },
  {
    "id": 60,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "किसी वस्तु पर लगाया गया बल उसकी गति के साथ-साथ उसके आकार में भी क्या कर सकता है?",
    "options": [
      "केवल रंग बदल सकता है",
      "कुछ नहीं कर सकता",
      "परिवर्तन कर सकता है",
      "हमेशा तापमान घटा सकता है"
    ],
    "correct": 2
  },
  {
    "id": 61,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "किसी द्रव द्वारा लगाया गया दाब गहराई बढ़ने पर सामान्यतः क्या होता है?",
    "options": [
      "बढ़ता है",
      "घटता है",
      "हमेशा शून्य हो जाता है",
      "बदलता नहीं है"
    ],
    "correct": 0
  },
  {
    "id": 62,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "गर्मियों में मिट्टी के घड़े का पानी ठंडा क्यों रहता है?",
    "options": [
      "घड़ा पानी को गर्म करता है",
      "घड़े में प्रकाश नहीं पहुँचता",
      "पानी जम जाता है",
      "घड़े की सतह से पानी का वाष्पीकरण ऊष्मा ले जाता है"
    ],
    "correct": 3
  },
  {
    "id": 63,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "दलहनी फसल को फसल चक्र में शामिल करने से मिट्टी की उर्वरता बनाए रखने में क्यों मदद मिलती है?",
    "options": [
      "वे मिट्टी को पूरी तरह सूखा देती हैं",
      "उनकी जड़ों में राइजोबियम नाइट्रोजन स्थिरीकरण में मदद करता है",
      "वे सूर्य के प्रकाश को रोकती हैं",
      "वे मिट्टी से सारा नाइट्रोजन निकाल लेती हैं"
    ],
    "correct": 1
  },
  {
    "id": 64,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "एक किसान बहुत अधिक रासायनिक उर्वरक के बजाय जैविक खाद का प्रयोग करता है। खाद का एक प्रमुख लाभ क्या है?",
    "options": [
      "यह मिट्टी में ह्यूमस बढ़ाकर उसकी जलधारण क्षमता सुधार सकती है",
      "यह मिट्टी को हमेशा अम्लीय बना देती है",
      "यह पौधों को प्रकाश से मुक्त कर देती है",
      "यह तुरंत सभी कीटों को समाप्त कर देती है"
    ],
    "correct": 0
  },
  {
    "id": 65,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "पेनिसिलिन जैसे कुछ एंटीबायोटिक किस प्रकार के सूक्ष्मजीव से प्राप्त किए जाते हैं?",
    "options": [
      "कुछ कवक",
      "केवल शैवाल",
      "केवल कीट",
      "केवल प्रोटोजोआ"
    ],
    "correct": 0
  },
  {
    "id": 66,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "सोडियम जैसी अत्यधिक क्रियाशील धातु को मिट्टी के तेल (केरोसिन) में क्यों रखा जाता है?",
    "options": [
      "हवा और नमी के साथ तीव्र अभिक्रिया से बचाने के लिए",
      "उसे ठंडा रखने के लिए",
      "उसकी विद्युत चालकता बढ़ाने के लिए",
      "उसका रंग बदलने के लिए"
    ],
    "correct": 0
  },
  {
    "id": 67,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "तेल की आग पर पानी डालना खतरनाक हो सकता है। ऐसी आग को बुझाने में रेत या उपयुक्त अग्निशामक क्यों अधिक उपयोगी है?",
    "options": [
      "वे तेल को अधिक ज्वलनशील बनाते हैं",
      "वे आग को अधिक ऑक्सीजन देते हैं",
      "वे तेल का तापमान बढ़ाते हैं",
      "वे आग और वायु के संपर्क को कम करते हैं"
    ],
    "correct": 3
  },
  {
    "id": 68,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "लुप्तप्राय और संकटग्रस्त प्रजातियों के बारे में जानकारी दर्ज करने वाली पुस्तक को क्या कहा जाता है?",
    "options": [
      "ब्लू बुक",
      "व्हाइट बुक",
      "रेड डेटा बुक",
      "ग्रीन बुक"
    ],
    "correct": 2
  },
  {
    "id": 69,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "प्लेसेंटा (अपरा) का प्रमुख कार्य क्या है?",
    "options": [
      "केवल रक्त को जमाना",
      "भ्रूण के बालों का रंग बदलना",
      "माँ से भ्रूण तक पोषक तत्व और ऑक्सीजन पहुँचाने तथा अपशिष्ट हटाने में सहायता करना",
      "केवल भ्रूण को गति देना"
    ],
    "correct": 2
  },
  {
    "id": 70,
    "subject": "सामान्य विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "आकाश में बिजली चमकने के कुछ समय बाद गरज सुनाई देती है। इसका मुख्य कारण क्या है?",
    "options": [
      "ध्वनि हवा में नहीं चलती",
      "बिजली केवल रात में बनती है",
      "ध्वनि प्रकाश से तेज चलती है",
      "प्रकाश ध्वनि की तुलना में बहुत तेज चलता है"
    ],
    "correct": 3
  },
  {
    "id": 71,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Why does Riya visit the school library?",
    "options": [
      "To complete a science experiment",
      "To borrow a storybook",
      "To play games",
      "To meet her friends"
    ],
    "correct": 1,
    "passage": "Riya enjoys reading books in her free time. She visits the school library every Friday and usually borrows one storybook. Reading has helped her learn many new words and ideas."
  },
  {
    "id": 72,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "According to the passage, how has reading helped Riya?",
    "options": [
      "It has made her sleep more",
      "It has helped her learn new words and ideas",
      "It has taught her to play football",
      "It has reduced her school time"
    ],
    "correct": 1,
    "passage": "Riya enjoys reading books in her free time. She visits the school library every Friday and usually borrows one storybook. Reading has helped her learn many new words and ideas."
  },
  {
    "id": 73,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "Which statement is true?",
    "options": [
      "Riya usually borrows one storybook",
      "Riya does not like reading",
      "Riya visits the library every Monday",
      "Riya borrows a newspaper every Friday"
    ],
    "correct": 0,
    "passage": "Riya enjoys reading books in her free time. She visits the school library every Friday and usually borrows one storybook. Reading has helped her learn many new words and ideas."
  },
  {
    "id": 74,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "Choose the best meaning of the word “usually”.",
    "options": [
      "Never",
      "Normally",
      "Suddenly",
      "Rarely"
    ],
    "correct": 1,
    "passage": "Riya enjoys reading books in her free time. She visits the school library every Friday and usually borrows one storybook. Reading has helped her learn many new words and ideas."
  },
  {
    "id": 75,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "What is the main idea of the passage?",
    "options": [
      "Riya wants to become a teacher",
      "The school library is closed on Fridays",
      "Riya dislikes books",
      "Reading is a useful habit for Riya"
    ],
    "correct": 3,
    "passage": "Riya enjoys reading books in her free time. She visits the school library every Friday and usually borrows one storybook. Reading has helped her learn many new words and ideas."
  },
  {
    "id": 76,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Choose the correct option: She ___ to school every day.",
    "options": [
      "go",
      "gone",
      "going",
      "goes"
    ],
    "correct": 3
  },
  {
    "id": 77,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "Choose the correct sentence using a degree of comparison.",
    "options": [
      "Of the two brothers, Rohan is more tall.",
      "Of the two brothers, Rohan is taller.",
      "Of the two brothers, Rohan is most tall.",
      "Of the two brothers, Rohan is tallest."
    ],
    "correct": 1
  },
  {
    "id": 78,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Choose the correct preposition: The book is ___ the table.",
    "options": [
      "on",
      "at",
      "by",
      "in"
    ],
    "correct": 0
  },
  {
    "id": 79,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "Choose the correct form: When I reached the station, the train ___.",
    "options": [
      "had left",
      "will leave",
      "has left",
      "leaves"
    ],
    "correct": 0
  },
  {
    "id": 80,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "Choose the correct passive voice of: “The teacher praised the student.”",
    "options": [
      "The student praised by the teacher.",
      "The student was praised by the teacher.",
      "The student is praised by the teacher.",
      "The student has praised the teacher."
    ],
    "correct": 1
  },
  {
    "id": 81,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Choose the synonym of “brave”.",
    "options": [
      "Courageous",
      "Cowardly",
      "Quiet",
      "Clever"
    ],
    "correct": 0
  },
  {
    "id": 82,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Choose the correctly spelt word.",
    "options": [
      "seperete",
      "separate",
      "seperate",
      "seprate"
    ],
    "correct": 1
  },
  {
    "id": 83,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Choose the correct modal auxiliary: You ___ wear a helmet while riding a bicycle.",
    "options": [
      "would",
      "must",
      "could",
      "might"
    ],
    "correct": 1
  },
  {
    "id": 84,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "Choose the correctly arranged sentence.",
    "options": [
      "On school I always time reach.",
      "I reach always on time school.",
      "I always reach school on time.",
      "Always school I on time reach."
    ],
    "correct": 2
  },
  {
    "id": 85,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "Choose the correct indirect speech: He said, “I am tired.”",
    "options": [
      "He said that he has tired.",
      "He said that I am tired.",
      "He said that he was tired.",
      "He said that he is tired."
    ],
    "correct": 2
  },
  {
    "id": 86,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए।\\n\\nपेड़ हमारे जीवन के लिए बहुत महत्वपूर्ण हैं। वे हमें ऑक्सीजन, फल, छाया और लकड़ी देते हैं। पेड़ मिट्टी के कटाव को रोकने में भी सहायता करते हैं। इसलिए हमें अधिक से अधिक पेड़ लगाकर उनकी रक्षा करनी चाहिए।\\n\\nगद्यांश के अनुसार पेड़ हमें क्या देते हैं?",
    "options": [
      "ऑक्सीजन, फल, छाया और लकड़ी",
      "केवल छाया",
      "केवल फल",
      "केवल लकड़ी"
    ],
    "correct": 0
  },
  {
    "id": 87,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "उपरोक्त गद्यांश का मुख्य संदेश क्या है?",
    "options": [
      "केवल फल देने वाले पेड़ लगाने चाहिए",
      "पेड़ काटने चाहिए",
      "पेड़ों की कोई आवश्यकता नहीं है",
      "पेड़ों को लगाना और उनकी रक्षा करना चाहिए"
    ],
    "correct": 3
  },
  {
    "id": 88,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "‘प्रसन्न’ शब्द का विलोम क्या है?",
    "options": [
      "खुश",
      "हर्षित",
      "आनंदित",
      "उदास"
    ],
    "correct": 3
  },
  {
    "id": 89,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "‘सूर्य’ का पर्यायवाची शब्द कौन-सा है?",
    "options": [
      "धरती",
      "पवन",
      "जलद",
      "रवि"
    ],
    "correct": 3
  },
  {
    "id": 90,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "निम्नलिखित में से शुद्ध वर्तनी वाला शब्द कौन-सा है?",
    "options": [
      "आवसयक",
      "अवश्यक",
      "आवशयक",
      "आवश्यक"
    ],
    "correct": 3
  },
  {
    "id": 91,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "‘सुंदर फूल खिला है।’ इस वाक्य में ‘सुंदर’ कौन-सा शब्द-भेद है?",
    "options": [
      "विशेषण",
      "सर्वनाम",
      "संज्ञा",
      "क्रिया"
    ],
    "correct": 0
  },
  {
    "id": 92,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "‘राम ने आम खाया।’ वाक्य में ‘आम’ का पद-परिचय क्या है?",
    "options": [
      "विशेषण, पुल्लिंग, बहुवचन, करणकारक",
      "संज्ञा, पुल्लिंग, एकवचन, कर्मकारक",
      "क्रिया, पुल्लिंग, एकवचन, अधिकरणकारक",
      "सर्वनाम, स्त्रीलिंग, एकवचन, कर्ताकारक"
    ],
    "correct": 1
  },
  {
    "id": 93,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "‘राम ने आम खाया।’ वाक्य में ‘राम’ कौन-सा कारक है?",
    "options": [
      "कर्ता कारक",
      "करण कारक",
      "अधिकरण कारक",
      "कर्म कारक"
    ],
    "correct": 0
  },
  {
    "id": 94,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "निम्नलिखित में से शुद्ध वाक्य कौन-सा है?",
    "options": [
      "मुझे हिंदी पढ़ना अच्छी लगता है।",
      "मुझे हिंदी पढ़ना अच्छे लगता है।",
      "मुझे हिंदी पढ़ना अच्छा लगता है।",
      "मुझे हिंदी पढ़ना अच्छा लगती है।"
    ],
    "correct": 2
  },
  {
    "id": 95,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "‘आँखों का तारा’ मुहावरे का सही अर्थ क्या है?",
    "options": [
      "बहुत कमजोर व्यक्ति",
      "बहुत क्रोधित व्यक्ति",
      "बहुत दूर की वस्तु",
      "बहुत प्रिय व्यक्ति"
    ],
    "correct": 3
  },
  {
    "id": 96,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "‘जो मेहनत करता है, वही सफल होता है।’ यह किस प्रकार का वाक्य है?",
    "options": [
      "सरल वाक्य",
      "मिश्र वाक्य",
      "संयुक्त वाक्य",
      "विस्मयादिबोधक वाक्य"
    ],
    "correct": 1
  },
  {
    "id": 97,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "‘राम आया और बैठ गया।’ इस वाक्य का सरल रूप कौन-सा है?",
    "options": [
      "राम आकर बैठ गया।",
      "राम आया, इसलिए वह बैठ गया।",
      "राम आया क्योंकि वह बैठ गया।",
      "जब राम आया तब वह बैठ गया।"
    ],
    "correct": 0
  },
  {
    "id": 98,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "‘अधजल गगरी छलकत जाए’ लोकोक्ति का सही अर्थ क्या है?",
    "options": [
      "कम ज्ञान वाला व्यक्ति अधिक दिखावा करता है।",
      "जल्दी काम करने से काम बिगड़ जाता है।",
      "खाली बर्तन हमेशा भारी होता है।",
      "बहुत मेहनत करने वाला व्यक्ति सफल होता है।"
    ],
    "correct": 0
  },
  {
    "id": 99,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "‘वह बाजार गया और फल खरीद लाया।’ यह किस प्रकार का वाक्य है?",
    "options": [
      "प्रश्नवाचक वाक्य",
      "संयुक्त वाक्य",
      "मिश्र वाक्य",
      "सरल वाक्य"
    ],
    "correct": 1
  },
  {
    "id": 100,
    "subject": "हिंदी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "‘यदि तुम नियमित अभ्यास करोगे, तो तुम्हारे अंक बेहतर होंगे।’ वाक्य में ‘यदि’ किस प्रकार का अव्यय है?",
    "options": [
      "संबंधबोधक अव्यय",
      "समुच्चयबोधक अव्यय",
      "विस्मयादिबोधक अव्यय",
      "क्रियाविशेषण"
    ],
    "correct": 1
  }
];
