<script>
	import { tick } from 'svelte';
	import { base } from '$app/paths';

	import { Confetti } from 'svelte-confetti';
	import '../styles/app.css';

	let active = false;
	async function showConfetti() {
		active = false;
		await tick();
		active = true;
	}
</script>

<section
	class="h-full min-h-screen bg-white flex flex-col justify-center items-end bg-bg-hut bg-no-repeat bg-cover bg-center"
>
	{#if active}
		<div
			style="
 position: fixed;
 top: -50px;
 left: 0;
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 overflow: hidden;
 pointer-events: none;"
		>
			<Confetti
				x={[-5, 5]}
				y={[0, 0.1]}
				delay={[1000, 2000]}
				amount={1000}
				duration={4000}
				size={20}
				infinite
				fallDistance="100vh"
			/>
		</div>
	{/if}

	<div class="relative flex flex-col lg:flex-row justify-between items-center mr-16 gap-x-5">
		<div>
			<img class=" w-full h-72" src="{base}/logot.png" alt="logo" />
		</div>
		<div class=" lg:text-start text-center">
			<h1 class=" text-3xl lg:text-6xl italic font-semibold text-blue-700 leading-relaxed">
				Anniversary
			</h1>
			<h1 class=" text-3xl lg:text-6xl text-red-700 font-semibold">PT TELEXINDO BIZMART</h1>
		</div>
		{#if active}
			<div class="absolute left-20">
				<Confetti infinite y={[1.25, 1.5]} x={[-1, 1]} colorArray={['#c8102e']} />
			</div>
		{/if}
	</div>

	<div class=" fixed left-0 bottom-0">
		<button class="p-6 bg-blue-500 rounded-full text-white" on:click={showConfetti}> </button>
	</div>
</section>
