export const createScoreElement = (currentScore,topScore)=>{
    const element = document.createElement('div');
    element.classList.add('score');
    element.innerHTML = `${currentScore}/${topScore}`;
    return element
  };