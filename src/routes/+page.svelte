<script>
	import { onMount } from 'svelte';

	/** @type {HTMLImageElement} */
	let explosionRef;
	let i = 0;

	let /** @type {HTMLAudioElement} */ mooAudio, /** @type {HTMLAudioElement} */ explodeAudio;

	onMount(() => {
		mooAudio = new Audio('/moo.mp3');
		explodeAudio = new Audio('/explode.mp3');
		explodeAudio.addEventListener('ended', () => {
			explosionRef?.remove();
		});
	});

	/**
	 * @param {Event} event
	 */
	const onClickCow = (event) => {
		event.preventDefault();

		console.log('Moo');
		mooAudio.currentTime = 0;
		mooAudio.play();
		i++;
	};

	/**
	 * @param {Event} event
	 */
	const onLoadExplosion = (event) => {
		event.preventDefault();

		console.log('WTF');
		explodeAudio.play();
	};
</script>

<main>
	{#if i < 20}
		<button on:click={onClickCow}>
			<img src="/cow.png" alt="Black and white calf on transparent background" />
		</button>
	{:else}
		<img bind:this={explosionRef} on:load={onLoadExplosion} src="explosion.gif" alt="Explosion" />
	{/if}
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 100dvh;
		width: 100dvw;
	}

	button {
		background: none;
		border: none;

		cursor: pointer;
		height: 80%;
	}

	img {
		height: 100%;
	}
</style>
