<script>

  let searchword;

  const getRandomGif = async () => {
    const apiKey = "FRCLcXg3l577oGSYGTHQ3YlwFKrZLRrX";
    const limit = 1;
    const url = "https://api.giphy.com/v1/gifs/search";
    const peticion = `${url}?api_key=${apiKey}&q=${searchword}&limit=${limit}`;

    const res = await fetch(peticion);

    const result = await res.json();

    if (res.ok) {
      //esto dice si la peticion se ha ejecutado correctamente
      return result;
    } else {
      throw new Error(result);
    }
  };

  const buscar = () => {
    promise = getRandomGif();
  };

  let promise = getRandomGif();
</script>

<main>
  <div class="search-bar">
    <input type="text" bind:value={searchword} />
    <button on:click={buscar}>Buscar</button>
  </div>
  {#if promise !== undefined}
    {#await promise}
      <h1>Cargando...</h1>
    {:then json}
      {#if json.data.length === 0}
        <h1>no se ha encontrado ningun gif</h1>
      {:else}
        <img src={json.data[0].images.original.url} alt={json.data[0].title} />
      {/if}
    {:catch error}
        <h1>{error}</h1>
    {/await}
  {/if}
  
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .search-bar {
    display: flex;
    align-items: center;
  }
</style>
