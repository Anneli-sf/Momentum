import { playList } from "./playList";

const BTN_PLAY = document.querySelector(".play");
const BTN_NEXT = document.querySelector(".play-next");
const BTN_PREV = document.querySelector(".play-prev");
const PLAY_LIST = document.querySelector(".play-list");

const AUDIO = new Audio();
let isPlay = false;
let trackNum = 0;

function startAudio() {
  AUDIO.currentTime = 0;
  AUDIO.play();
  isPlay = true;
}

function playAudio() {
  AUDIO.src = playList[trackNum].src;
  const trackName = document.querySelectorAll(".play-item");

  if (!isPlay) {
    startAudio();
    BTN_PLAY.classList.toggle("pause");
    trackName[trackNum].classList.add("active");
  } else {
    AUDIO.pause();
    isPlay = false;
    BTN_PLAY.classList.toggle("pause");
    trackName[trackNum].classList.remove("active");
  }
}

function playNext() {
  const trackName = document.querySelectorAll(".play-item");
  trackName.forEach((el) => el.classList.remove("active"));

  if (trackNum == playList.length - 1) trackNum = 0;
  else trackNum = trackNum + 1;

  AUDIO.src = playList[trackNum].src;
  trackName[trackNum].classList.add("active");
  startAudio();

  if (BTN_PLAY.classList.contains("play")) {
    BTN_PLAY.classList.add("pause");
  }
}

function playPrev() {
  const trackName = document.querySelectorAll(".play-item");
  trackName.forEach((el) => el.classList.remove("active"));

  if (trackNum == 0) trackNum = playList.length - 1;
  else trackNum = trackNum - 1;

  AUDIO.src = playList[trackNum].src;
  trackName[trackNum].classList.add("active");
  startAudio();

  if (BTN_PLAY.classList.contains("play")) {
    BTN_PLAY.classList.add("pause");
  }
}

playList.forEach((track, index) => {
  track = document.createElement("li");
  track.classList.add("play-item");
  track.textContent = `${playList[index].title}`;

  PLAY_LIST.appendChild(track);
});

export { BTN_PLAY, BTN_NEXT, BTN_PREV, AUDIO, playAudio, playNext, playPrev };
