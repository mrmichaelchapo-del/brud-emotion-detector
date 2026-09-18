// 💖 Brud's possible emotions
const EMOTIONS = [
  {
    name: "Happy",
    icon: "😄",
    color: "#4ade80",
    message: "Brud is feeling joyful and playful right now."
  },
  {
    name: "Calm",
    icon: "😌",
    color: "#38bdf8",
    message: "Brud is relaxed and vibing peacefully."
  },
  {
    name: "Confused",
    icon: "😵‍💫",
    color: "#f97316",
    message: "Brud doesn’t understand what’s happening, but is trying."
  },
  {
    name: "Angry",
    icon: "😡",
    color: "#f87171",
    message: "Brud is very, VERY MAD!!"
  },
  {
    name: "Sleepy",
    icon: "😴",
    color: "#a855f7",
    message: "Brud needs a nap and less chaos."
  }
];

// 🔧 Get the emotions container
const emotionsDiv = document.querySelector(".emotions");

if (emotionsDiv) {
  // Replace "Loading..." with the card UI
  emotionsDiv.innerHTML = `
    <div class="emotion-card">
      <div class="emotion-header">
        <span class="emotion-label">Current Emotion</span>
        <button class="emotion-refresh">Refresh 🔄</button>
      </div>
      <div class="emotion-main">
        <div class="emotion-icon">⚛️</div>
        <div class="emotion-name">Detecting...</div>
      </div>
      <p class="emotion-message">Brud's emotional state is being analyzed...</p>
      <div class="emotion-meta">
        <span class="emotion-time">Last update: never</span>
      </div>
    </div>
  `;

  const iconEl = emotionsDiv.querySelector(".emotion-icon");
  const nameEl = emotionsDiv.querySelector(".emotion-name");
  const msgEl  = emotionsDiv.querySelector(".emotion-message");
  const timeEl = emotionsDiv.querySelector(".emotion-time");
  const refreshBtn = emotionsDiv.querySelector(".emotion-refresh");
  const cardEl = emotionsDiv.querySelector(".emotion-card");

  // 🎯 Function to set a random emotion
  function setRandomEmotion() {
    const emotion = EMOTIONS[Math.floor(Math.random() * EMOTIONS.length)];

    iconEl.textContent = emotion.icon;
    nameEl.textContent = emotion.name;
    msgEl.textContent = emotion.message;
    cardEl.style.borderLeft = `6px solid ${emotion.color}`;

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    timeEl.textContent = `Last update: ${timeString}`;
  }

  // First load
  setRandomEmotion();

  // Refresh button
  refreshBtn.addEventListener("click", () => {
    setRandomEmotion();
  });
}