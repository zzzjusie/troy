// عناصر الصفحة

const enterBtn = document.getElementById("enterBtn");

const home = document.getElementById("home");

const universe = document.getElementById("universe");

const modal = document.getElementById("messageModal");

const modalTitle = document.getElementById("modalTitle");

const modalMessage = document.getElementById("modalMessage");

const closeModal = document.getElementById("closeModal");


// الدخول إلى العالم

enterBtn.addEventListener("click", () => {

    home.classList.add("hidden");

    universe.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// فتح الرسائل

document.querySelectorAll(".memory-btn").forEach((button) => {

    button.addEventListener("click", () => {

        modalTitle.textContent = button.dataset.title;

        modalMessage.textContent = button.dataset.message;

        modal.classList.remove("hidden");

    });

});


// إغلاق الرسالة

function hideModal() {

    modal.classList.add("hidden");

}

closeModal.addEventListener("click", hideModal);


// الإغلاق عند الضغط خارج الرسالة

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        hideModal();

    }

});


// الإغلاق بزر Escape

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        hideModal();

    }

});


// إنشاء نجوم إضافية

const stars = document.getElementById("stars");

for (let i = 0; i < 90; i++) {

    const star = document.createElement("span");

    const size = Math.random() * 2 + 1;

    star.style.position = "absolute";

    star.style.width = size + "px";

    star.style.height = size + "px";

    star.style.borderRadius = "50%";

    star.style.background = "#ffffff";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.opacity = Math.random() * 0.7 + 0.2;

    star.style.animation =
        "twinkle " + (2 + Math.random() * 4) + "s infinite ease-in-out";

    stars.appendChild(star);

}

console.log("تم فتح عالم تروي");


/* ظهور شهاب من وقت للتاني */

function createShootingStar() {
  const star = document.createElement("div");

  star.className = "shooting-star";

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1600);
}

setInterval(() => {
  createShootingStar();
}, 9000);
const troyAudio = document.getElementById("troy-audio");
const musicPlay = document.getElementById("music-play");
const musicTitle = document.getElementById("music-title");
const musicSubtitle = document.getElementById("music-subtitle");
const songButtons = document.querySelectorAll(".music-list button");

musicPlay.addEventListener("click", () => {
  if (troyAudio.paused) {
    troyAudio.play();
  } else {
    troyAudio.pause();
  }
});

troyAudio.addEventListener("play", () => {
  musicPlay.textContent = "Ⅱ";
});

troyAudio.addEventListener("pause", () => {
  musicPlay.textContent = "▶";
});

songButtons.forEach(button => {
  button.addEventListener("click", () => {
    troyAudio.src = button.dataset.song;
    musicTitle.textContent = button.dataset.title;
    musicSubtitle.textContent = button.dataset.subtitle;

    songButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    troyAudio.play().catch(() => {
      musicPlay.textContent = "▶";
    });
  });
});

// محاولة تشغيل أول أغنية عند فتح الموقع.
// لو المتصفح منع التشغيل التلقائي، اضغطي زر التشغيل.
troyAudio.play().catch(() => {
  musicPlay.textContent = "▶";
});