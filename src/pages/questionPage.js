import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  answersListElement.innerHTML = '';
  const answers = currentQuestion.answers;

  for (const [option, answer] of Object.entries(answers)) {
    const answerElement = createAnswerElement(option, answer);
    answersListElement.appendChild(answerElement);
    answerElement.addEventListener('click', (e) => {
      const selectedOption = e.target.innerText.split('. ')[0];
      selectAnswer(quizData.currentQuestionIndex, selectedOption);
    });
  };

  const quizBtn = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  quizBtn.addEventListener('click', nextQuestion);
};

// USER CAN SELECT ONE ANSWER PER QUESTION
const selectAnswer = (questionIndex, selectedOption) => {
  // updates selected answer in quizData. 'questionIndex' identifies the specific question in array
  quizData.questions[questionIndex].selected = selectedOption;

  // selects all <li> elements within '.answer-list' class. It then iterates over all li's and calls showCorrectAnswer function for each of them
  document.querySelectorAll(`.answer-list li`).forEach((item) => {
    showCorrectAnswer(item);
    item.style.pointerEvents = 'none'; // prevents user to multiple options - https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/PointerEvent
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
  }
  
  if (selectedAnswer === choice && selectedAnswer !== correctAnswer) {
    item.className = 'incorrect';
  };
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
