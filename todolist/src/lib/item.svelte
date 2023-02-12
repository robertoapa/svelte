<script>
    export let nombre = ""
    export let delFn;
    export let fnremove
    export let importante;
    let completado;
</script>


<main>
    <div class="tarea">
        <input type="checkbox" name="check" id="check" bind:checked={completado}> 
        <h1 class="{completado?'tachado':'normal'}">{nombre}</h1>
        {#if importante}
            <h1 class="importante">!</h1>
        {/if}
        <button on:click={fnremove}>X</button>
    </div>
</main>


<style>
    main{
        display: flex;
      
    }
    .tachado{
        text-decoration: line-through;
        color: red;
        background-color: blue;
    }
    .normal{
        color: blue;
       
    }
    
    .importante{
        color: rgb(255, 42, 0);
        font-size:4rem;
    }

    .tarea{
        display: flex;
        height: 5rem;
        align-items: center;

    }

    button{
        height: 50%;
        margin-left: 1rem;
    }

</style>