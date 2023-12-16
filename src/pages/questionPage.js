import {
  ANSWERS_LIST_ID,
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

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);
  
    // create a score element and add it to the question page
  const score = createScoreElement(currentScore,topScore);
  questionElement.appendChild(score);

    // init the count-down
    countdown.startCountdown(seconds, () => {
      // This callback is executed when the countdown reaches 0
      countdown.stopCountdown();
      showCorrectAnswerIfNoSelection();
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
      checkScore(selectedOption)
    }); 
  };

  const quizBtn = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  quizBtn.addEventListener('click', nextQuestion);
  if(quizData.currentQuestionIndex === (quizData.questions.length - 1)){
  quizBtn.innerHTML = `Show Result`;
  };
};

// USER CAN SELECT ONE ANSWER PER QUESTION
const selectAnswer = (questionIndex, selectedOption) => {
  // updates selected answer in quizData. 'questionIndex' identifies the specific question in array
  quizData.questions[questionIndex].selected = selectedOption;
  // selects all <li> elements within '.answer-list' class. It then iterates over all li's and calls showCorrectAnswer function for each of them
  document.querySelectorAll(`.answer-list li`).forEach((item) => {
    showCorrectAnswer(item);
    item.style.pointerEvents = 'none'; // prevents user to select multiple options - https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/PointerEvent
  });
};

// USER CAN SEE CORRECT ANSWER WHEN SELECTING WRONG ANSWER
const showCorrectAnswer = (item) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex]; // retrieves current question by its index
  const correctAnswer = currentQuestion.correct;
  const selectedAnswer = currentQuestion.selected;
  const choice = item.innerText.split('. ')[0]; // takes user's choice from item param & splits text into array of substrings then selects first element at index 0

  if (selectedAnswer != null && selectedAnswer.length > 0 && choice == correctAnswer) {
    item.className = 'correct'; 
  };
  
  if (selectedAnswer === choice && selectedAnswer !== correctAnswer) {
    item.className = 'incorrect';
  };
};

const nextQuestion = () => {
  // if the last question => init the result page 
  if(quizData.currentQuestionIndex === (quizData.questions.length - 1)){
    quizData.currentQuestionIndex = 0
    countdown.resetCountdown();
     initResultPage(currentScore,topScore);
  } else {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  
    // when moving to the next question reset the timer 
    countdown.resetCountdown();
    initQuestionPage();
  };
};

const checkScore = (selectedOption) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  
  // check if selected = correct and change the score
  if (selectedOption == currentQuestion.correct) {
    currentScore += 1;
    const scoreElement = document.querySelector('.score'); // Use querySelector instead of getElementsByClassName
    if (scoreElement) {
      scoreElement.innerHTML = `${currentScore}/${topScore}`;
    }
  }
};

const stopAnimation = ()=>{
  const counter = document.getElementById('count-down');
  counter.classList.toggle('pause');
};

const showCorrectAnswerIfNoSelection = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const selectedAnswer = currentQuestion.selected;
 
  if (!selectedAnswer) {
    // If the user did not select an answer, automatically show the correct answer
    currentQuestion.selected = currentQuestion.correct
    document.querySelectorAll(`.answer-list li`).forEach((item) => {
      showCorrectAnswer(item);
    });
  };
};