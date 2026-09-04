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

  playBtn.addEventListener("click", async () => {
    if (video.paused) {
      try {
        await video.play();
        playBtn.innerHTML = "&#10074;&#10074;";
      } catch (error) {
        console.error("Video play failed:", error);
      }
    } else {
      video.pause();
      playBtn.innerHTML = "&#9654;";
    }
  });

  soundBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    soundBtn.innerHTML = video.muted
      ? "&#128263;"
      : "&#128266;";
  });

  video.addEventListener("ended", () => {
    playBtn.innerHTML = "&#9654;";
  });
});