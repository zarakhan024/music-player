// Controls: play, next, prev, heart animation, progress knob drag (demo)
// This is a starter/demo - you can expand it as needed

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const playBtn = document.querySelector(".play-btn");
const heartIcons = document.querySelectorAll('.heart-icon');
const progressBar = document.getElementById('progress-bar');
const progressKnob = document.getElementById('progress-knob');

let playing = false;

// Play/Pause button toggles
playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  playBtn.textContent = isPlaying ? "⏸" : "▶";
});

// Next/Prev button demo
prevBtn.onclick = () => {
  alert('Previous Song!');
};
nextBtn.onclick = () => {
  alert('Next Song!');
};

// Hearts "like" animation
heartIcons.forEach(heart => {
  heart.onclick = () => {
    heart.classList.toggle('liked');
  };
});

// Progress knob drag demo
progressKnob.onmousedown = function(e) {
  document.onmousemove = function(event) {
    let rect = progressBar.getBoundingClientRect();
    let x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width - progressKnob.offsetWidth);
    let percent = (x / rect.width) * 100;
    progressKnob.style.left = `${percent}%`;
  };
  document.onmouseup = function() {
    document.onmousemove = null;
    document.onmouseup = null;
  };
};
