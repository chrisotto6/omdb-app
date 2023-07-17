async function fetchMovie(movieId) {
  const response = await fetch(`http://www.omdbapi.com/?apikey=87ee28c1&i=${movieId}`);
  const data = await response.json();
  return data;
}

export async function load({ params }) {
  return {
    movie: await fetchMovie(params.movieId)
  }
}