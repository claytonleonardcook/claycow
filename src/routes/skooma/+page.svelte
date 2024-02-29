<script>
	// import { onMount } from 'svelte';

	// /** @type {HTMLImageElement} */
	// let explosionRef;
	// let i = 0;

	// let /** @type {HTMLAudioElement} */ mooAudio, /** @type {HTMLAudioElement} */ explodeAudio;

	// onMount(() => {
	// 	mooAudio = new Audio('/moo.mp3');
	// 	explodeAudio = new Audio('/explode.mp3');
	// 	explodeAudio.addEventListener('ended', () => {
	// 		explosionRef?.remove();
	// 	});
	// });

	// /**
	//  * @param {Event} event
	//  */
	// const onClickCow = (event) => {
	// 	event.preventDefault();

	// 	console.log('Moo');
	// 	mooAudio.currentTime = 0;
	// 	mooAudio.play();
	// 	i++;
	// };

	// /**
	//  * @param {Event} event
	//  */
	// const onLoadExplosion = (event) => {
	// 	event.preventDefault();

	// 	console.log('WTF');
	// 	explodeAudio.play();
	// };
</script>

<main>
	<div class="tiltGrid">
		<div class="topLeft"></div>
		<div class="topRight"></div>
		<div class="bottomLeft"></div>
		<div class="bottomRight"></div>
		<video src="/skooma.mov" autoplay muted loop />
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		height: 100dvh;
		width: 100dvw;
	}

	video {
		position: absolute;
		height: 100%;
		aspect-ratio: 1 / 1;
		transition: 1s transform;
		box-shadow: 0px 0px 64px gray;
	}

	.tiltGrid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		position: absolute;

		height: min(50dvh, 50dvw);
		width: min(50dvh, 50dvw);
	}

	.tiltGrid div {
		height: 100%;
		width: 100%;
		z-index: 2;
	}

	.topLeft:hover ~ video {
		transform: perspective(1000px) rotateY(-30deg) rotateX(30deg);
	}

	.topRight:hover ~ video {
		transform: perspective(1000px) rotateY(30deg) rotateX(30deg);
	}

	.bottomLeft:hover ~ video {
		transform: perspective(1000px) rotateY(-30deg) rotateX(-30deg);
	}

	.bottomRight:hover ~ video {
		transform: perspective(1000px) rotateY(30deg) rotateX(-30deg);
	}
</style>
