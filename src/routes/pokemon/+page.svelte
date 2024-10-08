<script>
	import { onMount } from 'svelte';

	/** @type {Array<{ id: string, name: string, image: string }>} */
	let pokemon = [];

	onMount(async () => {
		const res = await fetch('/path/to/your/pokemon.json');
		pokemon = await res.json();
	});
</script>

<style>
	/* Add your styles here */
	.card {
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 16px;
		margin: 8px;
		text-align: center;
	}
</style>

<div class="container h-full mx-auto flex justify-center items-center text-center">
	<div class="space-y-5">
		<h1 class="h1">Pokemon</h1>
		
		<nav class="nav btn-group">
			<!-- (optionally you can provide a label here) -->
			<ul>
				<li>
					<a href="/" class="bg-primary-500">
						<span>🏠</span>
						<span class="flex-auto">Home</span>
					</a>
					<a href="/examples" class="bg-primary-500">
						<span>🖥️</span>
						<span class="flex-auto">Examples</span>
					</a>
					<a href="/pokemon" class="bg-primary-500">
						<span>🎮</span>
						<span class="flex-auto">Pokemon</span>
					</a>
				</li>
			</ul>
		</nav>
		<hr class="!border-t-4" />
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each pokemon as poke}
				<div class="card">
					<h2>{poke.name}</h2>
					<img src={poke.image} alt={poke.name} />
				</div>
			{/each}
		</div>
	</div>
</div>