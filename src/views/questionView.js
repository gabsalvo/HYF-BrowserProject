import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID, HINT_BTN_ID} from '../constants.js';
import { quizData } from '../data.js';
/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  element.classList.add('question-container');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <div id='count-down'>10</div>

  <h1 class = 'question-count'>Question ${quizData.currentQuestionIndex + 1} out of ${quizData.questions.length}</h1>

  <h1>${question}</h1>

    <ul class="answer-list" id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    <button id="${HINT_BTN_ID}">
      Hint
    </button>

  `;
  return element;
};
