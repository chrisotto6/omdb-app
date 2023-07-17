<script lang="ts">
  export let data;
</script>

<h1>{data.movie.Title} ({data.movie.Year})</h1>
<h4>Genre: {data.movie.Genre}</h4>

<img src={data.movie.Poster} alt={data.movie.Title} />
<p>Rating: {data.movie.imdbRating}</p>
<p>{data.movie.Plot}</p>