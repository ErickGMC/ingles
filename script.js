// script.js
let words = [
  { word: "House", options: ["Casa", "Árbol", "Perro", "Libro"], answer: "Casa" },
  { word: "Dog", options: ["Gato", "Perro", "Pájaro", "Ratón"], answer: "Perro" },
  { word: "Tree", options: ["Cielo", "Árbol", "Río", "Montaña"], answer: "Árbol" },
  { word: "Book", options: ["Mesa", "Libro", "Silla", "Pared"], answer: "Libro" }
];

let currentIndex = 0;

function loadWord() {
  let currentWord = words[currentIndex];
  document.getElementById("word").textContent = currentWord.word;
  
  let optionButtons = document.getElementsByClassName("option-btn");
  currentWord.options.forEach((option, index) => {
    optionButtons[index].textContent = option;
    optionButtons[index].classList.remove("correct", "incorrect");
  });
  document.getElementById("feedback").textContent = "";
}

function checkAnswer(button) {
  let selectedAnswer = button.textContent;
  let correctAnswer = words[currentIndex].answer;

  if (selectedAnswer === correctAnswer) {
    button.classList.add("correct");
    document.getElementById("feedback").textContent = "Correct!";
  } else {
    button.classList.add("incorrect");
    document.getElementById("feedback").textContent = "Try again!";
  }
}

function nextQuestion() {
  currentIndex = (currentIndex + 1) % words.length;
  loadWord();
}

document.addEventListener("DOMContentLoaded", loadWord);
