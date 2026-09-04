const imageCards = document.querySelectorAll(".image-card");

imageCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isActive = card.classList.contains("is-active");

    imageCards.forEach((item) => {
      item.classList.remove("is-active");
    });

    if (!isActive) {
      card.classList.add("is-active");
    }
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".image-card")) {
    imageCards.forEach((item) => {
      item.classList.remove("is-active");
    });
  }
});
document.querySelectorAll(".video-player").forEach((player) => {
  const video = player.querySelector("video");
  const playBtn = player.querySelector(".video-mini-play");
  const soundBtn = player.querySelector(".video-mini-sound");

  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = "❚❚";
    } else {
      video.pause();
      playBtn.textContent = "▶";
    }
  });

  soundBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    soundBtn.textContent = video.muted ? "🔇" : "🔊";
  });

  video.addEventListener("ended", () => {
    playBtn.textContent = "▶";
  });
});