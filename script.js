// Select elements using querySelector
const adviceText = document.querySelector('#advice-text');
const randomAdviceBtn = document.querySelector('#random-advice-btn');

// Function to fetch random advice from the API
function fetchRandomAdvice() {
  return new Promise((resolve, reject) => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        resolve(data.slip.advice);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// Function to display advice on the webpage
function displayAdvice(advice) {
  adviceText.textContent = advice;
}

// Fetch and display random advice when the page loads
fetchRandomAdvice()
  .then(advice => {
    displayAdvice(advice);
  })
  .catch(error => {
    console.error('There was a problem fetching advice:', error);
  });

// Add event listener to the button to fetch and display new random advice
randomAdviceBtn.addEventListener('click', () => {
  fetchRandomAdvice()
    .then(advice => {
      displayAdvice(advice);
    })
    .catch(error => {
      console.error('There was a problem fetching advice:', error);
    });
});
