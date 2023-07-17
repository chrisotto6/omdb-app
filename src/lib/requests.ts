export async function fetchMovies(query: string, movies: any[] = [], page: number = 1) {
  const response = await fetch(`http://www.omdbapi.com/?apikey=87ee28c1&s=${query}&page=${page}`);
  const data = await response.json();
  movies = [...movies, ...data.Search];

  if (movies.length < data.totalResults) {
    return fetchMovies(query, movies, page + 1);
  } else {
    return movies;
  }
}