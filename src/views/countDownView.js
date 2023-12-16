
export class CountdownTimer {
    constructor() {
      this.intervalId = null;
    }
    startCountdown(seconds, onTimeoutCallback) {
      this.updateCountdown(seconds);
  
      this.intervalId = setInterval(() => {
        seconds--;
  
        this.updateCountdown(seconds);
  
        if (seconds === 0) {
          this.stopCountdown();
          if (onTimeoutCallback) {
            onTimeoutCallback();
          }
          // Perform the action when the timer reaches zero
        }
      }, 1000);
    }
  
    stopCountdown() {
      clearInterval(this.intervalId);
    }
  
    resetCountdown() {
      this.stopCountdown();
      this.updateCountdown(0);
    }
  
    updateCountdown(seconds) {
      const countdownElement = document.getElementById('count-down');
  
      if (countdownElement) {
        countdownElement.innerHTML = seconds;
      }
    }
  
  }