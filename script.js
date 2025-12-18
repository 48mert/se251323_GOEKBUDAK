function setInfo(text) {
  const p = document.getElementById("infoText");
  if (p) p.innerText = text;
}

function showIst() {
  setInfo("IST-Probleme: Übergaben laufen uneinheitlich über Ticket, E-Mail oder Meeting. Das erzeugt Rückfragen und Verzögerungen, besonders bei Schnittstellen- und Security-Themen.");
}

function showQuestions() {
  setInfo("Fragestellungen: Wer übergibt welche Informationspakete (Ports, Schnittstellen, Rollenrechte) wann und an wen? Wie transparent ist der Ablauf und wo gehen Informationen verloren?");
}

function showValue() {
  setInfo("Mehrwert: Eine klare IST-Visualisierung reduziert Missverständnisse, verbessert Abstimmung zwischen Rollen und unterstützt Onboarding durch nachvollziehbare Zuständigkeiten.");
}

function showFocus() {
  const sel = document.getElementById("analysisSelect");
  if (!sel) return;

  const v = sel.value;
  if (v === "schnittstellen") {
    setInfo("Zusatzfokus Schnittstellen: HL7/DICOM, Ports und Firewall-Freigaben müssen vollständig und frühzeitig übergeben werden, sonst steigen Laufzeit und Nachfragen.");
  } else if (v === "rollen") {
    setInfo("Zusatzfokus Rollen: Unklare Zuständigkeiten führen zu Informationsverlust. Swimlanes helfen, Übergaben und Verantwortungen sichtbar zu machen.");
  } else if (v === "onboarding") {
    setInfo("Zusatzfokus Onboarding: Neue Mitarbeitende brauchen klare Ansprechpartner und dokumentierte Übergaben, damit Wissen nicht nur in Köpfen einzelner steckt.");
  } else {
    setInfo("Wähle einen Abschnitt, um Inhalte und Visualisierung passend anzuzeigen.");
  }
}

function toggleProcessImage() {
  const fig = document.getElementById("processFigure");
  const btn = document.getElementById("toggleProcess");
  if (!fig || !btn) return;

  const showText = btn.getAttribute("data-show") || "Grafik anzeigen";
  const hideText = btn.getAttribute("data-hide") || "Grafik ausblenden";

  const collapsed = fig.classList.contains("process-collapsed");

  if (collapsed) {
    fig.classList.remove("process-collapsed");
    fig.classList.add("process-expanded");
    btn.innerText = hideText;
    setInfo("Grafik ausgeklappt");
  } else {
    fig.classList.remove("process-expanded");
    fig.classList.add("process-collapsed");   
    btn.innerText = showText;
    setInfo("Grafik eingeklappt");
  }
}

function showVerlustInfo() {
  const text = document.getElementById("verlustHoverText");
  if (text) {
    text.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btnIst = document.getElementById("btnIst");
  const btnQ = document.getElementById("btnQuestions");
  const btnV = document.getElementById("btnValue");
  const sel = document.getElementById("analysisSelect");
  const toggleBtn = document.getElementById("toggleProcess");
  const img = document.getElementById("verlustImg");

  if (btnIst) btnIst.addEventListener("click", showIst);
  if (btnQ) btnQ.addEventListener("click", showQuestions);
  if (btnV) btnV.addEventListener("click", showValue);

  if (sel) sel.addEventListener("change", showFocus);
  if (toggleBtn) toggleBtn.addEventListener("click", toggleProcessImage);

  if (img) img.addEventListener("mouseover", showVerlustInfo);
});
