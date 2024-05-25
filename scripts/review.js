 // Increment the review counter
 const reviewCounter = localStorage.getItem('reviewCounter') || 0;
 localStorage.setItem('reviewCounter', parseInt(reviewCounter) + 1);

 document.getElementById('reviewCounter').textContent = `You have submitted ${parseInt(reviewCounter) + 1} review(s).`;