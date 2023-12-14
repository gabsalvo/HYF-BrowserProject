import { RESTART_BTN_ID } from '../constants.js';

/**
 * Create the result screen
 * @returns {Element}
 */
export const createResultPage = () => {
  const element = document.createElement('div');
  element.classList.add('result-container');
  element.innerHTML = String.raw`
    <h1>You Have Scored:</h1>
    <button class="btn btn-primary" id="${RESTART_BTN_ID}">Try Again</button>
  `;
  return element;
};