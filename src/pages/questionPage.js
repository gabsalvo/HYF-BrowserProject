import {
  ANSWERS_LIST_ID,
  HINT_BTN_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initResultPage } from './resultPage.js';
import { createScoreElement } from '../views/scoreView.js';
import { CountdownTimer } from '../views/countDownView.js';

const topScore = quizData.questions.length;
let currentScore = 0
let seconds = 10;
const countdown = new CountdownTimer();

export const initQuestionPage = () => {
  // Check local storage for saved data
  const storedData = JSON.parse(localStorage.getItem('quizData')) || {};
  // Set current question index and score from stored data or use defaults
  quizData.currentQuestionIndex = storedData.currentQuestionIndex || 0;
  currentScore = storedData.currentScore || 0;

  // check if first question reset the score
  //  quizData.currentQuestionIndex == 0 ? currentScore = 0 : currentScore;
   
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);
  questionElement.classList.add('show'); // add 'show' class

  // create score element and add it to question page
  const score = createScoreElement(currentScore,topScore);
  questionElement.appendChild(score);

  // init count-down
  countdown.startCountdown(seconds, () => {
    // This callback is executed when the countdown reaches 0
    countdown.stopCountdown();
    document.querySelectorAll(`.answer-list li`).forEach((item) => {
      showCorrectAnswer(item);
        item.style.pointerEvents = 'none';
    });
  });

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  answersListElement.innerHTML = '';
  const answers = currentQuestion.answers;

  for (const [option, answer] of Object.entries(answers)) {
    const answerElement = createAnswerElement(option, answer);
    answersListElement.appendChild(answerElement);

    answerElement.addEventListener('click', (e) => {
      const selectedOption = e.target.innerText.split('. ')[0];
      // stop the timer on
      countdown.stopCountdown();
      // stop the animation
      stopAnimation();
      selectAnswer(quizData.currentQuestionIndex, selectedOption);
      checkScore(selectedOption);
      // Update local storage after each question is answered
      updateLocalStorage();
    });
  };
  const hintBtn = document.getElementById(HINT_BTN_ID);
  hintBtn.addEventListener('click',hint);

  const quizBtn = document.getElementById(NEXT_QUESTION_BUTTON_ID);
    quizBtn.addEventListener('click', nextQuestion);
    if (quizData.currentQuestionIndex === (quizData.questions.length - 1)) {
    quizBtn.innerHTML = `Show Result`;
    };
};

//USER CAN SELECT ONLY ONE ANSWER PER QUESTION
const selectOnlyOneAnswer = () => {
  // selects all <li> elements within '.answer-list' class. It then iterates over all li's and calls showCorrectAnswer function for each of them
  document.querySelectorAll(`.answer-list li`).forEach((item) => {
    showCorrectAnswer(item);
    item.style.pointerEvents = 'none'; // prevents user to select multiple options - https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/PointerEvent
  });
};
// hint function to illuminate 2 wrong answers
  const hint = () => {
    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
    const selectedAnswer = currentQuestion.selected;
    const answerList = document.querySelector('.answer-list');
    // if the user  has not selected yet and the options are 4 
    if (!selectedAnswer && answerList.querySelectorAll('li').length == 4) {
      const wrongAnswerArray = [];
      // Find wrong answers and add them to the array
      answerList.querySelectorAll('li').forEach((answer) => {
        if (answer.innerText.split('. ')[0] !== currentQuestion.correct) {
          wrongAnswerArray.push(answer);
        }
      });
       // Remove 2 wrong answers from the DOM
      wrongAnswerArray[0].parentNode.removeChild(wrongAnswerArray[0])
      wrongAnswerArray[1].parentNode.removeChild(wrongAnswerArray[1])
    }
  };


// SELECTED ANSWER
const selectAnswer = (questionIndex, selectedOption) => {
  // updates selected answer in quizData. 'questionIndex' identifies the specific question in array
  quizData.questions[questionIndex].selected = selectedOption;
  selectOnlyOneAnswer();
};

// USER CAN SEE CORRECT ANSWER WHEN SELECTING WRONG ANSWER
const showCorrectAnswer = (item) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex]; // retrieves current question by its index
  const correctAnswer = currentQuestion.correct;
  const selectedAnswer = currentQuestion.selected;
  const choice = item.innerText.split('. ')[0]; // takes user's choice from item param & splits text into array of substrings then selects first element at index 0

  if (choice == correctAnswer) {
    item.className = 'correct';
  };

  if (selectedAnswer === choice && selectedAnswer !== correctAnswer) {
    item.className = 'incorrect';
  };

  // If user did not select an answer show correct answer
  if (!selectedAnswer && choice === correctAnswer) {
    item.className = 'correct';
  };
};

// USER CAN LEARN CORRECT ANSWER WHEN CLICKING NEXT QUESTION
const nextQuestion = () => {
  countdown.stopCountdown(); // stops countdown when clicking 'next question'
  selectOnlyOneAnswer();

  const questionElement = document.querySelector('.question-container');
  questionElement.classList.remove('show'); // Remove 'show' class

  // If it's last question, initialize result page
  if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
    quizData.currentQuestionIndex = 0;
    updateLocalStorage();
    countdown.resetCountdown();
    initResultPage(currentScore, topScore);

  } else { // move to next question after brief delay
    setTimeout(() => {
      quizData.currentQuestionIndex++;
      updateLocalStorage();
      countdown.resetCountdown();
      initQuestionPage();
    }, 800);
  };
};

const checkScore = (selectedOption) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  // check if selected = correct and change the score
  if (selectedOption == currentQuestion.correct) {
    currentScore += 1;
    const scoreElement = document.querySelector('.score'); 
    if (scoreElement) {
      scoreElement.innerHTML = `Score: ${currentScore}/${topScore}`;
    }
  };
};

const stopAnimation = ()=>{
  const counter = document.getElementById('count-down');
  counter.classList.toggle('pause');
};
const updateLocalStorage = () => {
  // Save current question index and score to local storage
  const dataToStore = {
    currentQuestionIndex: quizData.currentQuestionIndex,
    currentScore: currentScore,
  };
  localStorage.setItem('quizData', JSON.stringify(dataToStore));
};