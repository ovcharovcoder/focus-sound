const audio = document.getElementById('audio');
const trackSelect = document.getElementById('track');
const volume = document.getElementById('volume');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');

audio.volume = volume.value;

function loadTrack(name) {
  audio.src = `sounds/${name}`;
}

loadTrack(trackSelect.value);

playBtn.onclick = () => {
  audio.play();
};

pauseBtn.onclick = () => {
  audio.pause();
};

trackSelect.onchange = () => {
  loadTrack(trackSelect.value);
  audio.play();
};

volume.oninput = () => {
  audio.volume = volume.value;
};
