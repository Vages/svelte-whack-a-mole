<script>
  import { onDestroy } from 'svelte';
  import { fly } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  import score from './score.js';

  const dispatch = createEventDispatcher();

  const GAME_TIME = 30;
  let remainingTime = GAME_TIME;

  const NUMBER_OF_MICE = 16;
  const POSITIONS = [...Array(NUMBER_OF_MICE).keys()];
  const MAX_RETRACT_TIME = 5000;

  let mice = new Set([]);

  const whackMouse = mouseNumber => () => {
    mice.delete(mouseNumber);
    $score += 1;
    mice = mice;
  };

  const addMouse = () => {
    const newMouse = Math.floor(Math.random() * NUMBER_OF_MICE);
    mice.add(newMouse);
    const timeBeforeItRectracts = Math.floor(Math.random() * MAX_RETRACT_TIME);
    setTimeout(mouseRetracts(newMouse), timeBeforeItRectracts);
    mice = mice;
  };

  const mouseRetracts = mouseNumber => () => {
    mice.delete(mouseNumber);
    mice = mice;
  };

  const decrementTime = () => {
    remainingTime -= 1;
  };

  const miceInterval = setInterval(addMouse, 1000);
  const countDown = setInterval(decrementTime, 1000);

  $: if (remainingTime <= 0) {
    clearInterval(miceInterval);
    clearInterval(countDown);
    dispatch('game-end');
  }
</script>

<style>
  :root {
    --base-size: 13vmin;
    --top-rotation: 30deg;
  }

  .the-perspective {
    perspective: 1000px;
  }

  .cheese {
    transform: rotateX(var(--top-rotation))
      translateY(calc(-1 * var(--base-size)));
    margin-left: auto;
    margin-right: auto;
    width: min-content;
    transform-style: preserve-3d;
  }

  h1 {
    font-size: 3rem;
    letter-spacing: 0.6rem;
    text-transform: uppercase;
    font-weight: 800;
    text-align: center;
  }

  .top,
  top:before {
    border-radius: calc(var(--base-size) / 4) calc(var(--base-size) / 4) 0 0;
  }

  .top {
    user-select: none;
    background: #fae358;
    display: grid;
    grid-gap: calc(var(--base-size) / 2) calc(var(--base-size) / 2);
    padding: calc(var(--base-size) / 3);
    grid-template-columns: repeat(4, var(--base-size));
    grid-auto-rows: calc(4 * var(--base-size) / 5);
    -moz-transform-style: preserve-3d; /* Added to preserve Firefox compatibility while ignoring other browsers */
  }

  .front {
    border-radius: 0 0 calc(var(--base-size) / 4) calc(var(--base-size) / 4);
    color: #793f14;
    background-color: #f8d649;
    margin: 0 auto;
    padding: calc(var(--base-size) / 3) calc(var(--base-size) / 2);
    /*padding: 2rem;*/
    /*height: var(--base-size);*/
    transform-origin: top;
    transform: rotateX(calc(-1 * var(--top-rotation)));
    font-size: 2rem;
  }

  .cell {
    width: 100%;
    display: flex;
    align-items: center;
    -moz-transform-style: preserve-3d; /* Added to preserve Firefox compatibility while ignoring other browsers */
  }

  .hole {
    width: var(--base-size);
    height: calc(var(--base-size) / 3);
    flex-shrink: 0;
    border-radius: 50%;
    background-color: #b07127;
  }

  .mouse {
    transform: rotateX(calc(-1 * var(--top-rotation))) translateY(-50%);
    margin: -100%;
    padding: 0;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
  }

  .mouse img {
    max-width: 80%;
    max-height: 80%;
  }

  @keyframes shrink {
    from {
      width: 100%;
    }

    to {
      width: 0;
    }
  }

  .timer-bar {
    width: 100%;
    /*height: 1rem;*/
    background-color: #e49202;
  }

  .timer-bar:after {
    width: 100%;
    display: block;
    content: '| ';
    animation: shrink;
    animation-duration: 30s;
    animation-timing-function: linear;
    background-color: #680000;
    color: #680000;
  }

  .game-data {
    margin-top: calc(var(--base-size) / 8);
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }
</style>

<h1>Mos ei mus!</h1>
<div class="the-perspective">
  <div class="cheese">
    <div class="top">
      {#each POSITIONS as position}
        <div class="cell">
          <div class="hole" />
          {#if mice.has(position)}
            <button
              class="mouse"
              transition:fly|local={{ y: 80, opacity: 100 }}
              on:click={whackMouse(position)}>
              <img alt="Mus" src="mouse-face.png" />
            </button>
          {/if}
        </div>
      {/each}
    </div>
    <div class="front">
      <div class="timer-bar" />
      <div class="game-data">
        <div>Tid: {remainingTime}</div>
        <div class="score">Score: {$score}</div>
      </div>
    </div>
  </div>
</div>
