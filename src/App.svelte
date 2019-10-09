<script>
  import Cheese from './Cheese.svelte';
  import StartScreen from './StartScreen.svelte';
  import EndScreen from './EndScreen.svelte';
  import score from './score.js';

  const STATES = Object.freeze({
    start: 'start',
    game: 'game',
    end: 'end',
  });

  let state = STATES.start;

  const restartGame = () => {
    state = STATES.start;
    $score = 0;
  };

  const startGame = () => {
    state = STATES.game;
  };

  const endGame = () => {
    state = STATES.end;
  };
</script>

{#if state === STATES.start}
  <StartScreen on:start={startGame} />
{:else if state === STATES.game}
  <Cheese on:game-end={endGame} />
{:else}
  <EndScreen score={$score} on:restart={restartGame} />
{/if}
