<script>
  export let score;

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const pressRestart = () => {
    dispatch('restart');
  };
</script>

Du fikk {score}
<button on:click={pressRestart}>Spill igjen</button>
