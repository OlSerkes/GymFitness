const ratings = document.querySelectorAll(".rating");
if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive, ratingValue;
  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    initRating(rating);
  }

  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector(".rating__active");
    ratingValue = rating.querySelector(".rating__value");
  }

  function setRatingActiveWidth(i = ratingValue.innerHTML) {
    const ratingActiveWidth = i / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
}
