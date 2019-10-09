<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const pressStart = () => {
    dispatch('start');
  };
</script>

<button on:click={pressStart} >Start</button>
