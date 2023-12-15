import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

// Defines a function to handle the selection of an answer
const selectAnswer = (answerElement, key) => () => {
  // Find the previously selected answer element, if any
  const prevSelected = document.querySelector('.selected');
  // If a previous selection exists, remove the 'selected' class
  if (prevSelected) prevSelected.classList.remove('selected');
  // Applies the "selected" class to the newly selected answer
  answerElement.classList.add('selected');
};

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

    // Adds a click event listener to each answer element, calling the selectAnswer function
    answerElement.addEventListener('click', selectAnswer(answerElement, key));
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
