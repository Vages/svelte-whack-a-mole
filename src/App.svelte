<script>
  import { fly } from 'svelte/transition';
  import GithubCorner from './GithubCorner.svelte';

  let name = 'world';

  let score = 0;

  function incrementScore() {
    score += 1;
  }

  const NUMBER_OF_MOLES = 16;
  const POSITIONS = [...Array(NUMBER_OF_MOLES).keys()];
  const MAX_RETRACT_TIME = 5000;

  let moles = new Set([]);
  // let moles = new Set([...Array(NUMBER_OF_MOLES).keys()]);

  const whackMole = moleNumber => () => {
    moles.delete(moleNumber);
    score += 1;
    moles = moles;
  };

  const addMole = () => {
    const newMole = Math.floor(Math.random() * NUMBER_OF_MOLES);
    moles.add(newMole);
    const timeBeforeItRectracts = Math.floor(Math.random() * MAX_RETRACT_TIME);
    setTimeout(moleRectracts(newMole), timeBeforeItRectracts);
    moles = moles;
  };

  const moleRectracts = moleNumber => () => {
    moles.delete(moleNumber);
    moles = moles;
  };

  setInterval(addMole, 1000);
</script>

<style>
  .container {
    perspective: 22cm;
  }

  .cheese {
    transform-style: preserve-3d;
    margin: 30px auto;
    padding: 20px;
    background-color: #f9e267;
    width: min-content;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(4, min-content);
    transform: rotateX(45deg);
  }

  .hole {
    transform-style: preserve-3d;
    border-radius: 50%;
    background-color: #cfb023;
    font-size: 80px;
    width: 80px;
    height: 20px;
    margin: 30px 0;
  }
  .mole {
    transform: rotateX(-45deg) translateY(-20px) translateZ(20px);
    font-size: 50px;
    position: relative;
    top: -80px;
    border: none;
    background: none;
    padding: 0;
    width: 80px;
    height: 80px;
  }
  .score {
    font-weight: bold;
    text-align: center;
    font-size: 4rem;
  }
</style>

<strong>Mos en mus</strong>
<div class="container">
  <div class="cheese">
    {#each POSITIONS as position}
      <div class="hole">
        <!--      🗻-->
        {#if moles.has(position)}
          <button
            class="mole"
            transition:fly={{ y: 80 }}
            on:click={whackMole(position)}>
            🐭
          </button>
        {/if}
      </div>
    {/each}
  </div>
</div>
<GithubCorner />
<div class="score">Score: {score}</div>
