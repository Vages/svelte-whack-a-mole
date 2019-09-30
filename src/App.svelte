<script>
	import { fly } from 'svelte/transition';
	
	let name = 'world';
	
	let score = 0;
	
	function incrementScore() {
		score+=1;
	}
	
	const positions = [...Array(16).keys()];
	
	const moles = new Set([...Array(16).keys()])
	
	const killMole = (moleNumber) => () => {
		moles.delete(moleNumber)
		score += 1;
		moles = moles;
	}
</script>

<style>
	.field {
		display: grid;
		grid-gap: 5px;
		grid-template-columns: repeat(4, min-content);
	}
	
	.hill {
		background-color: red;
		width: 80px;
		height: 80px;
	}
	.mole {
		
	}
</style>

{score}

<div class='field'>
	{#each positions as position}
	<div class='hill'>
		{#if moles.has(position)}
			<button transition:fly={{y: 80, opacity: 100}} on:click={killMole(position)} class='mole'>
				mole
			</button>
		{/if}
	</div>
	{/each}
</div>
<h1>Hello {name}!</h1>