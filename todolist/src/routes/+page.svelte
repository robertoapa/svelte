<script>
  import Item from "../lib/item.svelte";
  import {Task} from "../js/task.js"


  let tareas = [];
  let textoTarea = "";
  let check="";

  const addTask = () => {
    tareas.push(new Task(textoTarea,check))
    tareas = tareas;   //al hacer un push no se actualiza la interfaz 
    check=false
    textoTarea=""
  };

  const removeTask = (n) =>{
    tareas.splice(n,1);
    tareas = tareas;
  }


</script>

  <main>
    <div class="add">
      <input type="text" bind:value={textoTarea}>
      <button on:click={addTask}>Añadir tarea</button>
      <p>importante</p>
      <input type="checkbox" bind:checked={check}>
    </div>
    {#if tareas.length==0}
      <h1>No tienes ninguna tarea pendiente :(</h1>
    {/if}
    {#each tareas as tarea,i}
        <Item nombre={tarea.nombre} fnremove={() => removeTask(i)} importante={tarea.importante} ></Item> 
        <!-- hay que llamar a la función desde una funcion anonima para que no se ejecute directamente -->
    {/each}
  </main>


  <style>
    .add{
      display: flex;
      height: 1rem;
      align-items: center;
      width: 30%;

    }

    .add>p{
      margin-left: 1rem;
    }



  </style>


<!-- line-thrown -->
