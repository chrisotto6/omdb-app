<script lang="ts">
  import { fetchMovies } from "$lib/requests";

  let movies: any[] = [];

  async function searchMovies(event: SubmitEvent) {
    let form = event?.target as HTMLFormElement;
    let search = form?.search?.value;
    movies = await fetchMovies(search);
  }
</script>

<h1>Svelte Intro App</h1>
<form on:submit|preventDefault={searchMovies}>
  <input type="text" name="search" />
  <button type="submit">Search</button>
</form>

{#if movies.length > 0}
  <ul>
    {#each movies as movie}
      <li><a href={`/movie/${movie.imdbID}`}>{movie.Title}</a></li>
    {/each}
  </ul>
{/if}

<style>
  h1 {
    color: grey;
  }
  input {
    margin-top: 10px;
    width: 25%;
    padding: 10px;
    border-radius: 10px;
  }
  button {
    padding: 10px;
    display: block;
    margin-top: 10px;
    border-radius: 10px;
    width: 15%;
  }
</style>
