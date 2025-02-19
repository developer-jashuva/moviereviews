const API_KEY = 'e7c3a62b7317ee9eaa41d0a23888b84b'; // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const moviesContainer = document.getElementById('movies-container');

// Fetch latest movies
async function fetchMovies() {
  try {
    const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    const data = await response.json();
    displayMovies(data.results);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

// Display movies
function displayMovies(movies) {
  moviesContainer.innerHTML = ''; // Clear previous content
  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    movieCard.innerHTML = `
      <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.overview.slice(0, 100)}...</p>
      <p><strong>Rating:</strong> ${movie.vote_average}</p>
    `;
    moviesContainer.appendChild(movieCard);
  });
}

// Handle review submission
// const reviewForm = document.getElementById('review-form');
// reviewForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const movieTitle = document.getElementById('movie-title').value;
//   const userReview = document.getElementById('user-review').value;

//   alert(`Thank you for your review of "${movieTitle}"!\n\nYour Review: ${userReview}`);
//   reviewForm.reset(); // Clear the form
// });

// Fetch movies when the page loads
fetchMovies();