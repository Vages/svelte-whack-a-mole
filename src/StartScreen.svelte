<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const pressStart = () => {
    dispatch('start');
  };
</script>

<style>
  .presenting {
    font-size: 1.8rem;
    font-weight: 400;
  }

  .game-name {
    text-transform: uppercase;
    font-size: 5rem;
    letter-spacing: 0.15em;
  }

  .container {
    display: flex;
    height: 100%;
    flex-direction: column;
    margin: 0 auto;
      padding: 0.5rem;
    max-width: 22rem;
    justify-content: space-around;
  }

  img {
    transform: rotate(15deg);
    position: relative;
    float: right;
    width: 90px;
  }
</style>

<div class="container">
  <div>
    <div class="presenting">Knowit presenterer</div>
    <h1 class="game-name">
      <img alt="Mus" src="mouse-face.png" />
      Mos ei mus
    </h1>
  </div>
  <button class="main-button" on:click={pressStart}>Start spill</button>
</div>
