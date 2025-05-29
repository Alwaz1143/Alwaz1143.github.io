const typingText = document.querySelector(".typing-text p");
const input = document.querySelector(".input-field");
const time = document.querySelector(".time span b");
const mistakes = document.querySelector(".mistake span");
const wpm = document.querySelector(".wpm span");
const cpm = document.querySelector(".cpm span");
const btn = document.querySelector(".content button");

// set value
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let mistake = 0;
let isTyping = false;
let charIndex = 0;

function loadParagraph() {
  const paragraph = [
    "The quick brown fox jumps over the lazy dog.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Typing fast is a skill that improves with practice.",
    "JavaScript is a versatile programming language.",
    "Consistency is the key to mastering any skill.",
    "React makes building user interfaces easier.",
    "Practice makes perfect, so keep typing!",
    "Coding challenges help improve problem-solving skills.",
  ];
  const randomIndex = Math.floor(Math.random() * paragraph.length);
  typingText.innerHTML = "";
  for (const char of paragraph[randomIndex]) {
    typingText.innerHTML += `<span>${char}</span>`;
  }
  typingText.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => input.focus());
  typingText.addEventListener("click", input.focus());
}

function initTyping() {
  const char = typingText.querySelectorAll("span");
  const typedChar = input.value.charAt(charIndex);
  // console.log("typedChar:", typedChar, "expected:", char[charIndex].innerText);
  if (charIndex < char.length && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTime, 1000);
      isTyping = true;
    }

    if (char[charIndex].innerText === typedChar) {
      char[charIndex].classList.add("correct");
      // console.log("correct");
    } else {
      mistake++;
      char[charIndex].classList.add("incorrect");
      // console.log("incorrect");
    }
    charIndex++;
    if (charIndex < char.length) {
      char[charIndex].classList.add("active");
    }
    mistakes.innerText = mistake;
    cpm.innerText = charIndex - mistake;
  } else {
    clearInterval(timer);
    console.log("sentence over");
    input.value = "";
    return;
  }
}

function initTime() {
  if (timeLeft > 0) {
    timeLeft--;
    time.innerText = timeLeft;
    let wpmVal = Math.round(
      ((charIndex - mistake) / 5 / (maxTime - timeLeft)) * 60
    );
    wpm.innerText = wpmVal;
  } else {
    clearInterval(timer);
  }
}

function reset() {
  loadParagraph();
  clearInterval(timer);
  timeLeft = maxTime;
  time.innerText = timeLeft;
  input.value = "";
  isTyping = false;
  charIndex = 0;
  mistake = 0;
  wpm.innerText = 0;
  cpm.innerText = 0;
  mistakes.innerText = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  input.addEventListener("input", initTyping);
  loadParagraph();
  btn.addEventListener("click", reset);
});
