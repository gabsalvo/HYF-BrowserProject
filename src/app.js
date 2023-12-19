const loadApp = () => {
  console.log("Loading app...");
  const storedData = JSON.parse(localStorage.getItem('quizData'));
  console.log("Stored data:", storedData);

  if (storedData) {
    quizData.currentQuestionIndex = storedData.currentQuestionIndex;

    if (storedData.isQuizCompleted) {
      // User had finished the quiz
      initResultPage();
    } else if (storedData.currentQuestionIndex < quizData.questions.length) {
      // User was in the middle of the quiz
      initQuestionPage();
    }
  } else {
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);
