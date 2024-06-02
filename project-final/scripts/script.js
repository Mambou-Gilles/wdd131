// API configuration
const API_KEY = 'cb296bef52a19b8556a17d4bf1abeeae';
const API_URL = `https://api.themoviedb.org/3`;

// Elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const top10Button = document.getElementById('top10-button');
const genresDropdown = document.getElementById('genres-dropdown');
const homeButton = document.getElementById('home-button');
const movieDisplay = document.getElementById('movie-display');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const menuToggle = document.getElementById('menu-toggle');
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const menu = document.getElementById('menu');

// Movie data
let movies = [];
let currentPage = 1;

// Event listeners
searchButton.addEventListener('click', searchMovies);
top10Button.addEventListener('click', displayTop10Movies);
genresDropdown.addEventListener('change', selectGenre);
homeButton.addEventListener('click', goHome);
prevButton.addEventListener('click', showPreviousPage);
nextButton.addEventListener('click', showNextPage);
movieDisplay.addEventListener('click', openMovieDetails);

// Toggle menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const h1Element = document.querySelector('h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    h1Element.classList.toggle('hide');
    
});

// Search movies by name
function searchMovies() {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage}`;
    fetchMovies(url);
  }
}

// Fetch movies from the API
function fetchMovies(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      movies = data.results;
      renderMovies();
    })
    .catch(error => console.error('Error:', error));
}

// Render movies on the page
function renderMovies() {
  movieDisplay.innerHTML = '';

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieCard = createMovieCard(movie);
    movieDisplay.appendChild(movieCard);
  }

  updatePaginationButtons();
}

// Create a movie card element
function createMovieCard(movie) {
  const movieCard = document.createElement('div');
  movieCard.className = 'movie-card';

  const movieImage = document.createElement('img');
  movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  movieImage.alt = movie.title;
  movieImage.loading = 'lazy';
  movieCard.appendChild(movieImage);

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  movieCard.appendChild(overlay);

  const overlayContent = document.createElement('div');
  overlayContent.className = 'overlay-content';
  overlayContent.innerHTML = `<h3>${movie.title}</h3><p>${movie.overview}</p><p>Rating: ${movie.vote_average}</p>`;
  overlay.appendChild(overlayContent);

  return movieCard;
}

// Show previous page of movies
function showPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    updateMovies();
  }
}

// Show next page of movies
function showNextPage() {
  currentPage++;
  updateMovies();
}

// Update pagination buttons
function updatePaginationButtons() {
  prevButton.disabled = currentPage === 1;
}

// Open movie details in a new window
function openMovieDetails(event) {
  if (event.target.tagName === 'IMG') {
    const movieCard = event.target.parentNode;
    const index = Array.from(movieCard.parentNode.children).indexOf(movieCard);
    const movie = movies[index];
    const url = `${API_URL}/movie/${movie.id}/videos?api_key=${API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const trailers = data.results.filter(result => result.type === 'Trailer');
        if (trailers.length > 0) {
          const trailerKey = trailers[0].key;
          const movieWindow = window.open('', '_blank');
          movieWindow.document.write(`
            <html>
            <head>
              <title>${movie.title}</title>
              <link rel="stylesheet" type="text/css" href="styles.css">
            </head>
            <body>
              <h2>${movie.title}</h2>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/${trailerKey}" frameborder="0" allowfullscreen></iframe>
              <p>${movie.overview}</p>
            </body>
            </html>
          `);
          movieWindow.document.close();
        } else {
          alert('No trailers available for this movie.');
        }
      })
      .catch(error => console.error('Error:', error));
  }
}

// Display top 10 movies
function displayTop10Movies() {
  const url = `${API_URL}/movie/top_rated?api_key=${API_KEY}&page=${currentPage}`;
  fetchMovies(url);
}

// Select genre
function selectGenre() {
  const genreId = genresDropdown.value;
  if (genreId) {
    const url = `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${currentPage}`;
    fetchMovies(url);
    
  }
}


// Go to home page
function goHome() {
  searchInput.value = '';
  currentPage = 1;
  initialize();
}

// Update movies when changing pages
function updateMovies() {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    searchMovies();
  } else {
    const url = `${API_URL}/movie/now_playing?api_key=${API_KEY}&page=${currentPage}`;
    fetchMovies(url);
  }
}

// Initialize the page
function initialize() {
  const url = `${API_URL}/movie/now_playing?api_key=${API_KEY}&page=${currentPage}`;
  fetchMovies(url);
}

// Initialize the page on load
initialize();
