document.addEventListener("DOMContentLoaded", function () {

  // Fade-in animation
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Floating hearts
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }

  setInterval(createHeart, 600);

  // Typewriter
  const button = document.getElementById("openBtn");
  const letter = document.getElementById("loveLetter");

  button.addEventListener("click", function () {

    button.style.display = "none";
    letter.classList.remove("hidden");

    const text = letter.textContent.trim();
    letter.textContent = "";

    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        letter.innerHTML += text.charAt(index) === "\n"
          ? "<br>"
          : text.charAt(index);
        index++;
        setTimeout(typeWriter, 18);
      }
    }

    typeWriter();
  });

  // Music toggle
  const music = document.getElementById("bgMusic");
  const toggle = document.getElementById("musicToggle");

  toggle.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      toggle.innerText = "🔊";
    } else {
      music.pause();
      toggle.innerText = "🎵";
    }
  });

});