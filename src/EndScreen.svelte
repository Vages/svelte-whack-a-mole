<script>
  export let score;

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const pressRestart = () => {
    dispatch('restart');
  };
</script>

<style>
  h1 {
    text-transform: uppercase;
    font-size: 2.5rem;
    letter-spacing: 0.1em;
  }

  .score {
    font-size: 2rem;
    font-weight: 600;
  }

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
    text-align: center;
    display: flex;
    height: 100%;
    flex-direction: column;
      font-size: 1.3rem;
    margin: 0 auto;
    max-width: 28rem;
    justify-content: space-around;
  }

  img {
    transform: rotate(15deg);
    position: relative;
    float: right;
    width: 90px;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
</style>

<div class="container">
  <div>
    <h1>Gratulerer!</h1>
    <div class="score">Du klarte å mose {score} mus!</div>
  </div>
  <div>
    Lyst på sommerjobb eller fast jobb i Knowit?
    <br />
    Send en enkel e-post til
    <a href="mailto:hei@knowit.no">hei@knowit.no</a>
  </div>
  <button class="main-button" on:click={pressRestart}>Spill igjen</button>
</div>
