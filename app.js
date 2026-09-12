// Google Apps Script Web App endpoint.
// Deploy the supplied google-apps-script.gs as a Web App and paste its /exec URL here.
const EMAIL_ENDPOINT = "https://script.google.com/macros/s/AKfycbx341brEbkoRCD-vzkrDtUIGH81NvY7xMoHngv82D0pOJv_ozE5iZlgtuwrzbfdUxAQ/exec";
let emailSubmissionStatus = "pending";

// यह कोड QUESTIONS एरे के लोड होने के बाद काम करेगा
const userProfile = { name: "", parent: "", location: "", roll: "", mobile: "" };
let currentIndex = 0;
let studentResponses = [];

// Initialize responses once QUESTIONS array is available from questions.js
window.onload = () => {
  studentResponses = QUESTIONS.map(q => ({ id: q.id, selectedOption: null, writtenInCopy: false, status: 'not-visited' }));
};

// परीक्षा अवधि: 3 घंटे = 180 मिनट
let totalSeconds = 3 * 60 * 60;
let timerInterval = null;
let timeElapsedSeconds = 0;
let selectedSubjectFilter = "All";

const subjectsList = ["All", "गणित", "विज्ञान", "सामाजिक विज्ञान", "हिन्दी", "संस्कृत", "English", "तार्किक क्षमता"];

function goToScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function handleRegistration(e) {
  e.preventDefault();
  userProfile.name = document.getElementById('candidateName').value;
  userProfile.parent = document.getElementById('parentName').value;
  userProfile.location = document.getElementById('liveLocation').value;
  userProfile.roll = document.getElementById('rollNo').value;
  userProfile.mobile = document.getElementById('mobileNo').value;
  
  document.getElementById('examHeaderName').innerText = userProfile.name;
  goToScreen('screen-instructions');
}

function startTest() {
  goToScreen('screen-exam');
  buildSubjectPills();
  buildPaletteGrid();
  loadQuestion(0);
  startTimer();
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (totalSeconds <= 0) { clearInterval(timerInterval); finalizeSubmission(); return; }
    totalSeconds--; timeElapsedSeconds++;
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    document.getElementById('timerDisplay').innerText = `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
  }, 1000);
}

function buildSubjectPills() {
  const container = document.getElementById('sectionPillsContainer');
  container.innerHTML = "";
  subjectsList.forEach(sub => {
    const btn = document.createElement('button');
    btn.className = `pill-btn ${sub === selectedSubjectFilter ? 'active' : ''}`;
    btn.innerText = sub === "All" ? "सभी विषय" : sub;
    btn.onclick = () => {
      selectedSubjectFilter = sub;
      buildSubjectPills(); buildPaletteGrid();
      if(sub !== "All") loadQuestion(QUESTIONS.findIndex(q => q.subject === sub));
    };
    container.appendChild(btn);
  });
}

function buildPaletteGrid() {
  const grid = document.getElementById('paletteGrid');
  grid.innerHTML = "";
  QUESTIONS.forEach((q, idx) => {
    if (selectedSubjectFilter !== "All" && q.subject !== selectedSubjectFilter) return;
    const btn = document.createElement('button');
    btn.className = `palette-btn status-${studentResponses[idx].status} ${idx === currentIndex ? 'active-q' : ''}`;
    btn.innerText = q.id;
    btn.onclick = () => loadQuestion(idx);
    grid.appendChild(btn);
  });
}

function loadQuestion(index) {
  if (studentResponses[currentIndex].status === 'not-visited') studentResponses[currentIndex].status = 'unanswered';
  currentIndex = index;
  const q = QUESTIONS[currentIndex];
  const resp = studentResponses[currentIndex];
  if (resp.status === 'not-visited') resp.status = 'unanswered';

  document.getElementById('questionTitle').innerText = `प्रश्न ${q.id} [${q.subject}]`;
  document.getElementById('questionMarksTag').innerText = `${q.marks} अंक`;

  const questionText = document.getElementById('questionText');
  questionText.innerHTML = "";
  if (q.passage) {
    const passageBox = document.createElement('div');
    passageBox.className = 'passage-box';

    const passageLabel = document.createElement('div');
    passageLabel.className = 'passage-label';
    passageLabel.innerText = q.subject === 'हिन्दी' ? 'अपठित गद्यांश' : 'READING PASSAGE';

    const passageText = document.createElement('div');
    passageText.className = 'passage-text';
    passageText.innerText = q.passage;

    passageBox.appendChild(passageLabel);
    passageBox.appendChild(passageText);
    questionText.appendChild(passageBox);

    const prompt = document.createElement('div');
    prompt.className = 'question-prompt';
    prompt.innerText = q.question;
    questionText.appendChild(prompt);
  } else {
    questionText.innerText = q.question;
  }

  const area = document.getElementById('answerInteractionArea');
  area.innerHTML = "";

  if (q.type === 'mcq') {
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options-container';
    q.options.forEach((opt, optIdx) => {
      const optItem = document.createElement('div');
      const isSelected = resp.selectedOption === optIdx;
      optItem.className = `option-item ${isSelected ? 'selected' : ''}`;
      optItem.innerHTML = `<input type="radio" name="mcq" id="o_${optIdx}" ${isSelected ? 'checked' : ''}><label for="o_${optIdx}">(${String.fromCharCode(97 + optIdx)}) ${opt}</label>`;
      optItem.onclick = () => selectOption(optIdx);
      optionsDiv.appendChild(optItem);
    });
    area.appendChild(optionsDiv);
  } else {
    area.innerHTML = `
      <div class="subjective-instruction-box">
        <h4>✍️ सब्जेक्टिव प्रश्न</h4>
        <p>इस प्रश्न का उत्तर अपनी कॉपी में विस्तार से लिखें।</p>
        <label class="written-checkbox-label">
          <input type="checkbox" ${resp.writtenInCopy ? 'checked' : ''} onchange="toggleWrittenInCopy(this.checked)"> मैंने कॉपी में उत्तर लिख लिया है
        </label>
      </div>`;
  }
  document.getElementById('prevBtn').disabled = (currentIndex === 0);
  buildPaletteGrid();
}

function selectOption(optIdx) {
  studentResponses[currentIndex].selectedOption = optIdx;
  studentResponses[currentIndex].status = 'answered';
  loadQuestion(currentIndex);
}

function toggleWrittenInCopy(isChecked) {
  studentResponses[currentIndex].writtenInCopy = isChecked;
  studentResponses[currentIndex].status = isChecked ? 'answered' : 'unanswered';
  buildPaletteGrid();
}

function saveAndNext() {
  if (currentIndex < QUESTIONS.length - 1) loadQuestion(currentIndex + 1);
}

function navigateQuestion(delta) {
  if (currentIndex + delta >= 0 && currentIndex + delta < QUESTIONS.length) loadQuestion(currentIndex + delta);
}

function markForReview() {
  studentResponses[currentIndex].status = 'review';
  if (currentIndex < QUESTIONS.length - 1) loadQuestion(currentIndex + 1);
  else buildPaletteGrid();
}

function clearCurrentResponse() {
  studentResponses[currentIndex].status = 'unanswered';
  studentResponses[currentIndex].selectedOption = null;
  studentResponses[currentIndex].writtenInCopy = false;
  loadQuestion(currentIndex);
}

function confirmSubmitTest() {
  if (confirm("क्या आप वाकई परीक्षा सबमिट करना चाहते हैं?")) finalizeSubmission();
}

function buildSubmissionPayload() {
  const objectiveQuestions = QUESTIONS.filter(q => q.type === "mcq");
  const answers = objectiveQuestions.map(q => {
    const idx = QUESTIONS.findIndex(item => item.id === q.id);
    const selected = studentResponses[idx]?.selectedOption;
    return {
      id: q.id,
      subject: q.subject,
      section: q.section || "",
      passage: q.passage || "",
      question: q.question,
      selectedIndex: selected,
      selectedText: selected !== null && selected !== undefined ? q.options[selected] : "",
      correctIndex: q.correct,
      isCorrect: selected === q.correct,
      marks: q.marks
    };
  });

  const score = answers.reduce((sum, a) => sum + (a.isCorrect ? a.marks : 0), 0);

  return {
    testName: "कक्षा 9 BSEB Foundation + Challenge Test 2026",
    submittedAt: new Date().toISOString(),
    candidate: {
      name: userProfile.name,
      parent: userProfile.parent,
      location: userProfile.location,
      roll: userProfile.roll,
      mobile: userProfile.mobile
    },
    timeSpentSeconds: timeElapsedSeconds,
    objective: {
      score,
      totalMarks: objectiveQuestions.reduce((sum, q) => sum + q.marks, 0),
      answers
    }
  };
}

async function submitObjectiveAnswersAutomatically() {
  const payload = buildSubmissionPayload();

  // If the endpoint is not configured yet, do not pretend that an email was sent.
  if (!EMAIL_ENDPOINT) {
    emailSubmissionStatus = "not-configured";
    return;
  }

  try {
    await fetch(EMAIL_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    });
    emailSubmissionStatus = "sent";
  } catch (error) {
    console.error("Automatic email submission failed:", error);
    emailSubmissionStatus = "failed";
  }
}

function finalizeSubmission() {
  clearInterval(timerInterval);

  const objectiveQuestions = QUESTIONS.filter(q => q.type === "mcq");
  let mcqScore = 0;
  QUESTIONS.forEach((q, i) => {
    if (q.type === "mcq" && studentResponses[i].selectedOption === q.correct) {
      mcqScore += q.marks;
    }
  });

  goToScreen('screen-summary');

  const totalMcqMarks = objectiveQuestions.reduce((sum, q) => sum + q.marks, 0);
  document.getElementById('statMcqScore').innerText = `${mcqScore} / ${totalMcqMarks}`;

  const m = Math.floor(timeElapsedSeconds / 60);
  const s = timeElapsedSeconds % 60;
  document.getElementById('statTimeSpent').innerText = `${m} मिनट ${s} सेकंड`;

  const statusEl = document.getElementById('emailStatus');
  if (statusEl) {
    statusEl.innerText = "आपके ऑब्जेक्टिव उत्तर सुरक्षित रूप से दर्ज किए जा रहे हैं…";
  }

  // Email submission happens automatically; there is no student-facing email button.
  submitObjectiveAnswersAutomatically().then(() => {
    if (!statusEl) return;

    if (emailSubmissionStatus === "sent") {
      statusEl.innerText = "✓ आपके सभी ऑब्जेक्टिव उत्तर शिक्षक के ईमेल पर भेज दिए गए हैं।";
      statusEl.className = "email-status success";
    } else if (emailSubmissionStatus === "not-configured") {
      statusEl.innerText = "⚠️ ईमेल डिलीवरी अभी कॉन्फ़िगर नहीं है। प्रश्नों का परिणाम स्क्रीन पर सुरक्षित है।";
      statusEl.className = "email-status warning";
    } else {
      statusEl.innerText = "⚠️ ईमेल भेजने में समस्या हुई। कृपया शिक्षक से संपर्क करें।";
      statusEl.className = "email-status error";
    }
  });
}
