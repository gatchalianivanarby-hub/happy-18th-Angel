/* =====================================================
   BIRTHDAY WEBSITE — SNOOPY BLUE V4
   Interactive scrapbook experience
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const intro = document.getElementById("intro");
const enterButton = document.getElementById("enter");

const giftButton = document.getElementById("gift");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("close");

const modalNumber = document.getElementById("modalNo");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const soundButton = document.getElementById("sound");
// Pinalitan ang audio references ng video element para sa TikTok video
const tiktokVideo = document.getElementById("tiktokVideo");

const candle = document.getElementById("candle");
const blowButton = document.getElementById("blow");
const wishMessage = document.getElementById("wishMessage");

const envelope = document.getElementById("envelope");
const letterPaper = document.getElementById("letterPaper");

const againButton = document.getElementById("again");


/* =====================================================
   ENTER WEBSITE
===================================================== */

enterButton.addEventListener("click", () => {

  intro.classList.add("hide");

  document.body.style.overflow = "auto";

  setTimeout(() => {

    document.getElementById("top").scrollIntoView({
      behavior: "smooth"
    });

  }, 500);

});


/* =====================================================
   INITIAL STATE
===================================================== */

document.body.style.overflow = "hidden";


/* =====================================================
   GIFT BUTTON
===================================================== */

giftButton.addEventListener("click", () => {

  document
    .getElementById("scrapbook")
    .scrollIntoView({
      behavior: "smooth"
    });

});


/* =====================================================
   SCRAPBOOK MODAL DATA (INCLUDING SNOOPY SCRAPBOOK)
===================================================== */

const cardData = {

  wishes: {

    number: "01",

    title: "18 little wishes ♡",

    text:
      "I hope this year gives you more reasons to smile, more moments that feel peaceful, and more memories that you'll want to keep forever."

  },


  memories: {

    number: "02",

    title: "Moments worth keeping",

    text:
      "Some moments don't have to be extraordinary to become special. Sometimes it's just a conversation, a laugh, or a tiny moment that stays with you."

  },


  snoopyScrapbook: {

    number: "03",

    title: "Snoopy's blue corner 🐾",

    text:
      "A dedicated space for your favorite pup! Scroll down to the special Snoopy gallery chapter to explore pure blue snoopy aesthetic vibes made just for you."

  },


  song: {

    number: "04",

    title: "A little song for you",

    text:
      "A TikTok video is right here waiting for you. One that reminds me of your smile, your energy, and this special chapter of your life."

  },


  cake: {

    number: "05",

    title: "You're finally 18!",

    text:
      "A whole new chapter. I hope you take it slowly, enjoy the little things, and never feel like you need to have everything figured out."

  }

};


/* =====================================================
   SCRAPBOOK CARDS CLICK HANDLER
===================================================== */

const cards = document.querySelectorAll(".paper-card");

cards.forEach(card => {

  card.addEventListener("click", () => {

    const type = card.dataset.open;

    // If it's the snoopy scrapbook card, scroll directly to its section!
    if (type === "snoopyScrapbook") {
      document.getElementById("snoopyScrapbookSection").scrollIntoView({
        behavior: "smooth"
      });
      return;
    }

    const data = cardData[type];

    if (!data) return;

    modalNumber.textContent = data.number;

    modalTitle.textContent = data.title;

    modalText.textContent = data.text;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

  });

});


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeTheModal() {

  modal.classList.remove("show");

  document.body.style.overflow = "auto";

}

closeModal.addEventListener("click", closeTheModal);

modal.addEventListener("click", (event) => {

  if (event.target === modal) {

    closeTheModal();

  }

});

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closeTheModal();

  }

});


/* =====================================================
   18 WISHES
===================================================== */

const wishes = [

  "I wish you a year full of genuine happiness.",

  "I wish you more peaceful mornings.",

  "I wish you people who make you feel safe.",

  "I wish you countless reasons to laugh.",

  "I wish you courage for the things you're afraid of.",

  "I wish you beautiful surprises.",

  "I wish you memories you'll tell stories about.",

  "I wish you success in everything you care about.",

  "I wish you enough rest when life gets tiring.",

  "I wish you never forget how special you are.",

  "I wish you kindness, especially toward yourself.",

  "I wish you dreams that slowly become real.",

  "I wish you adventures you never expected.",

  "I wish you people who stay.",

  "I wish you healing for things you don't talk about.",

  "I wish you more moments that make your heart full.",

  "I wish you a year you'll look back on and smile.",

  "And most of all, I wish 18 is kind to you. 🐾"

];


const wishGrid = document.getElementById("wishGrid");


wishes.forEach((wish, index) => {

  const card = document.createElement("article");

  card.className = "wish";

  card.innerHTML = `

    <span class="wish-no">
      ${String(index + 1).padStart(2, "0")}
    </span>

    <span class="wish-icon">
      ${index % 3 === 0 ? "🐾" : index % 3 === 1 ? "💙" : "⭐"}
    </span>

    <h3>
      ${wish}
    </h3>

    <small>
      for your 18th
    </small>

  `;

  wishGrid.appendChild(card);

});


/* =====================================================
   BACK BUTTONS
===================================================== */

const backButtons = document.querySelectorAll(".back");

backButtons.forEach(button => {

  button.addEventListener("click", () => {

    document
      .getElementById("scrapbook")
      .scrollIntoView({
        behavior: "smooth"
      });

  });

});


/* =====================================================
   MUSIC / SOUND TOGGLE (NAV BAR)
===================================================== */

let musicPlaying = false;

soundButton.addEventListener("click", async () => {

  try {

    if (musicPlaying) {

      tiktokVideo.pause();

      musicPlaying = false;

      soundButton.textContent = "♫";

    } else {

      await tiktokVideo.play();

      musicPlaying = true;

      soundButton.textContent = "❚❚";

    }

  } catch (error) {

    console.log(
      "Video could not be played:",
      error
    );

    alert(
      "Add your TikTok video as 'song.mp4' in the same folder as this website first. ♡"
    );

  }

});

// Synchronization kapag nag-play/pause manually sa video element
if (tiktokVideo) {
  tiktokVideo.addEventListener("pause", () => {
    musicPlaying = false;
    soundButton.textContent = "♫";
  });

  tiktokVideo.addEventListener("play", () => {
    musicPlaying = true;
    soundButton.textContent = "❚❚";
  });
}


/* =====================================================
   BIRTHDAY CANDLE
===================================================== */

let candleBlown = false;

blowButton.addEventListener("click", () => {

  if (candleBlown) {

    candle.classList.remove("off");

    candleBlown = false;

    blowButton.textContent =
      "tap the candle 🐾";

    wishMessage.textContent =
      "close your eyes. make a wish.";

    return;

  }

  candle.classList.add("off");

  candleBlown = true;

  blowButton.textContent =
    "make another wish ↻";

  wishMessage.textContent =
    "wish made. I hope it comes true. 🐾💙";

  createSparkles();

});


/* =====================================================
   CANDLE SPARKLES
===================================================== */

function createSparkles() {

  const stage =
    document.querySelector(".cake-stage");

  const symbols = [
    "🐾",
    "💙",
    "⭐",
    "·",
    "✦",
    "🐶"
  ];

  for (let i = 0; i < 18; i++) {

    const sparkle =
      document.createElement("span");

    sparkle.textContent =
      symbols[
        Math.floor(
          Math.random() * symbols.length
        )
      ];

    sparkle.style.position = "absolute";

    sparkle.style.left =
      `${35 + Math.random() * 30}%`;

    sparkle.style.top =
      `${25 + Math.random() * 40}%`;

    sparkle.style.fontSize =
      `${12 + Math.random() * 18}px`;

    sparkle.style.color =
      i % 2 === 0
        ? "#7cb2ed"
        : "#1c529e";

    sparkle.style.pointerEvents =
      "none";

    sparkle.style.animation =
      `sparkleFloat ${1 + Math.random()}s ease-out forwards`;

    stage.appendChild(sparkle);

    setTimeout(() => {

      sparkle.remove();

    }, 2200);

  }

}


/* =====================================================
   LETTER / ENVELOPE
===================================================== */

envelope.addEventListener("click", () => {

  letterPaper.classList.toggle("open");

  if (letterPaper.classList.contains("open")) {

    envelope.querySelector("b").textContent =
      "opened with care 🐾";

    envelope.querySelector("span").textContent =
      "take your time reading this";

    setTimeout(() => {

      letterPaper.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }, 200);

  } else {

    envelope.querySelector("b").textContent =
      "for you";

    envelope.querySelector("span").textContent =
      "no pressure · no rush";

  }

});


/* =====================================================
   AGAIN BUTTON
===================================================== */

againButton.addEventListener("click", () => {

  candle.classList.remove("off");

  candleBlown = false;

  blowButton.textContent =
    "tap the candle 🐾";

  wishMessage.textContent =
    "close your eyes. make a wish.";

  letterPaper.classList.remove("open");

  envelope.querySelector("b").textContent =
    "for you";

  envelope.querySelector("span").textContent =
    "no pressure · no rush";

  if (tiktokVideo) {
    tiktokVideo.pause();
    tiktokVideo.currentTime = 0;
  }

  musicPlaying = false;

  soundButton.textContent = "♫";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  setTimeout(() => {

    intro.classList.remove("hide");

    document.body.style.overflow = "hidden";

  }, 700);

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
  ".paper-card, .wish, .polaroid, #tiktokVideo, .envelope"
);

const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            entry.target.dataset.originalTransform ||
            "translateY(0)";

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );

revealElements.forEach((element, index) => {

  element.dataset.originalTransform =
    element.style.transform ||
    "translateY(0)";

  element.style.opacity = "0";

  element.style.transform =
    "translateY(25px)";

  element.style.transition =
    `opacity .7s ease ${index * .04}s,
     transform .7s ease ${index * .04}s`;

  revealObserver.observe(element);

});


/* =====================================================
   PARALLAX DOODLES
===================================================== */

const doodles =
  document.querySelectorAll(".doodle");

window.addEventListener(
  "scroll",
  () => {

    const scroll =
      window.scrollY;

    doodles.forEach((doodle, index) => {

      const amount =
        scroll *
        (0.03 + index * 0.015);

      doodle.style.transform =
        `translateY(${amount}px)`;

    });

  },
  {
    passive: true
  }
);


/* =====================================================
   SPARKLE CSS
===================================================== */

const sparkleStyle =
  document.createElement("style");

sparkleStyle.textContent = `

@keyframes sparkleFloat {

  0% {

    opacity: 0;

    transform:
      translateY(20px)
      scale(.5);

  }

  20% {

    opacity: 1;

  }

  100% {

    opacity: 0;

    transform:
      translate(
        ${Math.random() > .5 ? "" : "-"}30px,
        -80px
      )
      scale(1.4);

  }

}

`;

document.head.appendChild(
  sparkleStyle
);


/* =====================================================
   HOVER TILT — DESKTOP ONLY
===================================================== */

const canHover =
  window.matchMedia(
    "(hover: hover)"
  ).matches;

if (canHover) {

  const tiltCards =
    document.querySelectorAll(
      ".paper-card, .polaroid"
    );

  tiltCards.forEach(card => {

    card.addEventListener(
      "mousemove",
      event => {

        const rect =
          card.getBoundingClientRect();

        const x =
          event.clientX -
          rect.left;

        const y =
          event.clientY -
          rect.top;

        const centerX =
          rect.width / 2;

        const centerY =
          rect.height / 2;

        const rotateX =
          ((y - centerY) /
            centerY) *
          -2;

        const rotateY =
          ((x - centerX) /
            centerX) *
          2;

        card.style.transform =
          `perspective(700px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateY(-5px)`;

      }
    );

    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform = "";

      }
    );

  });

}


/* =====================================================
   PAGE LOADED
===================================================== */

window.addEventListener(
  "load",
  () => {

    window.scrollTo(0, 0);

    console.log(
      "Snoopy Birthday website loaded ♡"
    );

  }
);
