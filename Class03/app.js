const API_URL = 'http://localhost:3000';

const getReviewsBtn = document.querySelector("#get-reviews");
const postReviewsBtn = document.querySelector("#post-review");

const titleInput = document.querySelector("#film-title");
const scoreInput = document.querySelector("#film-score");
const textInput = document.querySelector("#film-text");

const reviewsListSection = document.querySelector("#posts-list");

getReviewsBtn.addEventListener('click', () => {
    getReviews();
});

postReviewsBtn.addEventListener('click', () => {
    const title = titleInput.value;
    const score = scoreInput.value;
    const text = textInput.value;

    const newReview = {
        title,
        score,
        text
    };

    onAddNewReview(newReview);
})

const onAddNewReview = (newReview) => {
    fetch(`${API_URL}/reviews`, {
        method: 'POST',
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(newReview)
    })
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })  
}

const getReviews = () => {
    fetch(`${API_URL}/reviews`)
        .then((response) => response.json())
        .then((result) => {
            // Since the db, holds an object that has a reviews property
            renderReviews(result.reviews);
    })
}

const renderReviews = (reviews) => {
    let inner = '';
    console.log(reviews);
    reviews.forEach((review) => {
        inner += 
        `
        <div class="film-card">
          <div class="film-card__header">
            <span class="film-card__header-title">
              ${review.title}
            </span>
            <span class="film-card__header-score"> ${review.score} </span>
            <button class="btn-delete" id="${review.id}">Delete</button>
          </div>
          <div class="film-card__content">
            ${review.text}
          </div>
        </div>
        `
    })
    reviewsListSection.innerHTML = inner;
}