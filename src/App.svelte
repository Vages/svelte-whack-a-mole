<script>
  import { fly } from 'svelte/transition';

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
  .field {
    /*background-color: green;*/
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(4, min-content);
  }

  .hill {
    font-size: 80px;
    width: 80px;
    height: 80px;
  }
  .mole {
    font-size: 50px;
    position: relative;
    top: -120px;
    border: none;
    background: none;
    padding: 0;
    width: 80px;
    height: 80px;
  }
</style>

{score}
<div class="field">
  {#each POSITIONS as position}
    <div class="hill">
      🗻
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
<h1>Hello {name}!</h1>
