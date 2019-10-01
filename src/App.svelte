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
    --base-size: 12vmin;
  }

  .container {
    perspective: 22cm;
  }

  h1 {
    text-align: center;
  }

  .cheese {
    margin: 0 auto;
    background-color: #f9e267;
    width: min-content;
    display: grid;
    grid-gap: calc(var(--base-size) / 5);
    padding: calc(var(--base-size) / 5);
    grid-template-columns: repeat(4, var(--base-size));
    grid-auto-rows: calc(4 * var(--base-size) / 5);

    transform: rotateX(45deg);
    transform-style: preserve-3d;
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

<!--<style>-->
<!--  .container {-->
<!--    /*perspective: 22cm;*/-->
<!--  }-->

<!--  .cheese {-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--    transform-style: preserve-3d;-->
<!--    margin: 30px auto;-->
<!--    padding: 20px;-->
<!--    background-color: #f9e267;-->
<!--    width: min-content;-->
<!--    display: grid;-->
<!--    grid-gap: 5px;-->
<!--    grid-template-columns: repeat(4, 1fr);-->
<!--    grid-template-rows: repeat(4, 1fr);-->
<!--    /*transform: rotateX(45deg);*/-->
<!--  }-->

<!--  .cell {-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--    /*transform-style: preserve-3d;*/-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--  }-->

<!--  .hole {-->
<!--    content: 'a';-->
<!--    flex-shrink: 1;-->
<!--    flex-grow:1;-->
<!--    border-radius: 50%;-->
<!--    background-color: #cfb023;-->
<!--    width: 100%;-->
<!--    height: 50%;-->
<!--  }-->

<!--  .mouse {-->
<!--    /*transform: rotateX(-45deg) translateY(2px) translateZ(20px);*/-->
<!--    width: 100%;-->
<!--    margin-left: -100%;-->
<!--    font-size: 50px;-->
<!--    position: relative;-->
<!--    border: none;-->
<!--    background: none;-->
<!--    padding: 0;-->
<!--    width: 80px;-->
<!--    height: 80px;-->
<!--  }-->
<!--  .score {-->
<!--    font-weight: bold;-->
<!--    text-align: center;-->
<!--    font-size: 4rem;-->
<!--  }-->
<!--</style>-->
<h1>Mos en mus</h1>
<div class="container">
  <div class="cheese">
    {#each POSITIONS as position}
      <div class="cell">
        <div class="hole" />
        {#if mice.has(position)}
          <button
            class="mouse"
            transition:fly={{ y: 100, opacity: 100 }}
            on:click={whackMouse(position)}>
            <img src="/mouse-face.png" />
          </button>
        {/if}
      </div>
    {/each}
  </div>
</div>
<GithubCorner />
<div class="score">Score: {score}</div>
