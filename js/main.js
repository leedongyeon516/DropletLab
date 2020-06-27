const player = document.querySelector(".custom_player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".custom_progress");
const progressBar = player.querySelector(".custom_progress__filled");

const togglePlay = video => e => (video.paused ? video.play() : video.pause());

const updateProgress = (progressNode, videoNode) => e => {
  const percent = (video.currentTime / video.duration) * 100;

  progressNode.style.flexBasis = `${percent}%`;

  return progressNode;
};

const slideDuration = (slideNode, videoNode) => ({ offsetX }) =>
  (video.currentTime = (offsetX / slideNode.offsetWidth) * video.duration);

video.addEventListener("click", togglePlay(video));
video.addEventListener("timeupdate", updateProgress(progressBar, video));

let mousedown = false;

progress.addEventListener(
  "mousemove",
  e => mousedown && slideDuration(progress, video)(e)
);
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
progress.addEventListener("click", slideDuration(progress, video));

const player1 = document.querySelector(".custom_player-1");
const video1 = player1.querySelector(".viewer-1");
const progress1 = player1.querySelector(".custom_progress-1");
const progressBar1 = player1.querySelector(".custom_progress__filled-1");

const togglePlay1 = video1 => e =>
  video1.paused ? video1.play() : video1.pause();

const updateProgress1 = (progressNode, videoNode) => e => {
  const percent = (video1.currentTime / video1.duration) * 100;

  progressNode.style.flexBasis = `${percent}%`;

  return progressNode;
};

const slideDuration1 = (slideNode, videoNode) => ({ offsetX }) =>
  (video1.currentTime = (offsetX / slideNode.offsetWidth) * video1.duration);

video1.addEventListener("click", togglePlay1(video1));
video1.addEventListener("timeupdate", updateProgress1(progressBar1, video1));

let mousedown1 = false;

progress1.addEventListener(
  "mousemove",
  e => mousedown1 && slideDuration1(progress1, video1)(e)
);
progress1.addEventListener("mousedown", () => (mousedown1 = true));
progress1.addEventListener("mouseup", () => (mousedown1 = false));
progress1.addEventListener("click", slideDuration1(progress1, video1));

const player2 = document.querySelector(".custom_player-2");
const video2 = player2.querySelector(".viewer-2");
const progress2 = player2.querySelector(".custom_progress-2");
const progressBar2 = player2.querySelector(".custom_progress__filled-2");

const togglePlay2 = video2 => e =>
  video2.paused ? video2.play() : video2.pause();

const updateProgress2 = (progressNode, videoNode) => e => {
  const percent = (video2.currentTime / video2.duration) * 100;

  progressNode.style.flexBasis = `${percent}%`;

  return progressNode;
};

const slideDuration2 = (slideNode, videoNode) => ({ offsetX }) =>
  (video2.currentTime = (offsetX / slideNode.offsetWidth) * video2.duration);

video2.addEventListener("click", togglePlay2(video2));
video2.addEventListener("timeupdate", updateProgress2(progressBar2, video2));

let mousedown2 = false;

progress2.addEventListener(
  "mousemove",
  e => mousedown2 && slideDuration2(progress2, video2)(e)
);
progress2.addEventListener("mousedown", () => (mousedown2 = true));
progress2.addEventListener("mouseup", () => (mousedown2 = false));
progress2.addEventListener("click", slideDuration1(progress2, video2));

const player3 = document.querySelector(".custom_player-3");
const video3 = player3.querySelector(".viewer-3");
const progress3 = player3.querySelector(".custom_progress-3");
const progressBar3 = player3.querySelector(".custom_progress__filled-3");

const togglePlay3 = video3 => e =>
  video3.paused ? video3.play() : video3.pause();

const updateProgress3 = (progressNode, videoNode) => e => {
  const percent = (video3.currentTime / video3.duration) * 100;

  progressNode.style.flexBasis = `${percent}%`;

  return progressNode;
};

const slideDuration3 = (slideNode, videoNode) => ({ offsetX }) =>
  (video3.currentTime = (offsetX / slideNode.offsetWidth) * video3.duration);

video3.addEventListener("click", togglePlay3(video3));
video3.addEventListener("timeupdate", updateProgress3(progressBar3, video3));

let mousedown3 = false;

progress3.addEventListener(
  "mousemove",
  e => mousedown3 && slideDuration3(progress3, video3)(e)
);
progress3.addEventListener("mousedown", () => (mousedown3 = true));
progress3.addEventListener("mouseup", () => (mousedown3 = false));
progress3.addEventListener("click", slideDuration3(progress3, video3));

const player4 = document.querySelector(".custom_player-4");
const video4 = player4.querySelector(".viewer-4");
const progress4 = player4.querySelector(".custom_progress-4");
const progressBar4 = player4.querySelector(".custom_progress__filled-4");

const togglePlay4 = video4 => e =>
  video4.paused ? video4.play() : video4.pause();

const updateProgress4 = (progressNode, videoNode) => e => {
  const percent = (video4.currentTime / video4.duration) * 100;

  progressNode.style.flexBasis = `${percent}%`;

  return progressNode;
};

const slideDuration4 = (slideNode, videoNode) => ({ offsetX }) =>
  (video4.currentTime = (offsetX / slideNode.offsetWidth) * video4.duration);

video4.addEventListener("click", togglePlay4(video4));
video4.addEventListener("timeupdate", updateProgress4(progressBar4, video4));

let mousedown4 = false;

progress4.addEventListener(
  "mousemove",
  e => mousedown4 && slideDuration4(progress4, video4)(e)
);
progress4.addEventListener("mousedown", () => (mousedown4 = true));
progress4.addEventListener("mouseup", () => (mousedown4 = false));
progress4.addEventListener("click", slideDuration4(progress4, video4));

const player5 = document.querySelector(".custom_player-5");
const video5 = player5.querySelector(".viewer-5");
const progress5 = player5.querySelector(".custom_progress-5");
const progressBar5 = player5.querySelector(".custom_progress__filled-5");

const togglePlay5 = video5 => e =>
  video5.paused ? video5.play() : video5.pause();

const updateProgress5 = (progressNode, videoNode) => e => {
  const percent = (video5.currentTime / video5.duration) * 100;

  progressNode.style.flexBasis = `${percent}%`;

  return progressNode;
};

const slideDuration5 = (slideNode, videoNode) => ({ offsetX }) =>
  (video5.currentTime = (offsetX / slideNode.offsetWidth) * video5.duration);

video5.addEventListener("click", togglePlay5(video5));
video5.addEventListener("timeupdate", updateProgress5(progressBar5, video5));

let mousedown5 = false;

progress5.addEventListener(
  "mousemove",
  e => mousedown5 && slideDuration5(progress5, video5)(e)
);
progress5.addEventListener("mousedown", () => (mousedown5 = true));
progress5.addEventListener("mouseup", () => (mousedown5 = false));
progress5.addEventListener("click", slideDuration5(progress5, video5));
