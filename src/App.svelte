<script>
  import { fly } from 'svelte/transition';
  import GithubCorner from './GithubCorner.svelte';

  let score = 0;

  function incrementScore() {
    score += 1;
  }

  const NUMBER_OF_MICE = 16;
  const POSITIONS = [...Array(NUMBER_OF_MICE).keys()];
  const MAX_RETRACT_TIME = 5000;

  let mice = new Set([]);
  // let mice = new Set([...Array(NUMBER_OF_MICE - 4).keys()]);

  const whackMouse = mouseNumber => () => {
    mice.delete(mouseNumber);
    score += 1;
    mice = mice;
  };

  const addMouse = () => {
    const newMouse = Math.floor(Math.random() * NUMBER_OF_MICE);
    mice.add(newMouse);
    const timeBeforeItRectracts = Math.floor(Math.random() * MAX_RETRACT_TIME);
    setTimeout(mouseRectracts(newMouse), timeBeforeItRectracts);
    mice = mice;
  };

  const mouseRectracts = mouseNumber => () => {
    mice.delete(mouseNumber);
    mice = mice;
  };

  setInterval(addMouse, 1000);
</script>

<style>
  :root {
    --base-size: 15vmin;
  }

  .the-perspective {
    perspective: 1000px;
  }

  .cheese {
    margin: 0 auto;
    width: min-content;
    transform: rotateX(45deg);
    transform-style: preserve-3d;
  }

  h1 {
    text-align: center;
  }

  .top {
    background-color: #f9e267;
    display: grid;
    grid-gap: calc(var(--base-size) / 5);
    padding: calc(var(--base-size) / 5);
    grid-template-columns: repeat(4, var(--base-size));
    grid-auto-rows: calc(4 * var(--base-size) / 5);

    transform-style: preserve-3d;
  }

  .front {
    margin: 0 auto;
    /*width: calc(var(--base-size) * 4);*/
    padding: 1rem;
    height: var(--base-size);
    background-color: black;
    transform-style: preserve-3d;
    transform-origin: top;
    transform: rotateX(-60deg); /*translateX(-calc(var(--base-size) / 2)); /*rotateX(-60deg);*/
  }

  .cell {
    width: 100%;
    display: flex;
    align-items: center;

    transform-style: preserve-3d;
  }

  .hole {
    width: var(--base-size);
    height: calc(var(--base-size) / 3);
    flex-shrink: 0;
    border-radius: 50%;
    background-color: #cfb023;
  }

  .mouse {
    transform: rotateX(-45deg) translateY(-50%);
    margin: -100%;
    padding: 0;
    width: 100%;
    background: none;
    border: none;
  }

  img {
    max-width: 80%;
    max-height: 80%;
  }
</style>

<h1>Mos en mus</h1>
<div class="the-perspective">
  <div class="cheese">
    <div class="top">
      {#each POSITIONS as position}
        <div class="cell">
          <div class="hole" />
          {#if mice.has(position)}
            <button
              class="mouse"
              transition:fly={{ y: 80, opacity: 100 }}
              on:click={whackMouse(position)}>
              <img src="/mouse-face.png" />
            </button>
          {/if}
        </div>
      {/each}
    </div>
    <div class="front">
      <div class="score">Score: {score}</div>
    </div>
  </div>
</div>
<GithubCorner />
