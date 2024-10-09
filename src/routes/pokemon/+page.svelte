<Modal />
<script lang="ts">
	import { onMount } from 'svelte';
	import { Modal } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
		const modalStore = getModalStore();
						

	// Define the Pokemon type
    // type Pokemon = {
    //     id: string;
    //     name: string;
    //     sprite: string;
    // };

	let pokemon: any[] = [];
	let moves = [];
	let selectedPokemon: any | null = null;

	onMount(async () => {	
		const res = await fetch('src/routes/pokemon/pokemon.json');
		const data = await res.json();
		pokemon = data.pokemon;
		// moves = data.moves;
		console.log(data);
	});
	const openModal = (poke: any) => {
        const modal: ModalSettings = {
			type: 'alert',
			// Data
			title: poke.name,
			body: 'This is an example modal.',
			image: poke.sprite,
		};
		modalStore.trigger(modal);
    };

    // const closeModal = () => {
    //     showModal = false;
    //     selectedPokemon = null;
    // };
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
		
		<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
			{#each pokemon as poke}
				<div class="card card-hover" on:click={() => openModal(poke)}>
					<h2>{poke.name}</h2>
					<img src={poke.sprite} alt={poke.name} />
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- {#if showModal && selectedPokemon}
    <Modal on:close={closeModal}>
        <div class="header">
            <h2>{selectedPokemon.name}</h2>
        </div>
        <div class="body">
            <img src={selectedPokemon.sprite} alt={selectedPokemon.name} /> -->
            <!-- Add more Pokémon details here -->
        <!-- </div>
        <div class="footer">
            <button on:click={closeModal}>Close</button>
        </div>
    </Modal>
{/if} -->