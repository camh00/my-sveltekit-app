<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { initializeStores, Modal } from '@skeletonlabs/skeleton';
	import data from '$lib/pokemon.json';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	initializeStores();
	const modalStore = getModalStore();

	// Define the Move type
	type Move = {
		name: string;
		id: number;
		accuracy: number | null;
		pp: number;
		power: number | null;
		type: string;
	};

	// Define the Pokemon type
    type Pokemon = {
        id: number;
        name: string;
        sprite: string;
		base_experience: number;
		height: number;
		weight: number;
		types: string[];
		moves: string[];
    };

	let pokemon: Pokemon[] = data.pokemon;
	let moves: Move[] = data.moves;
	let selectedPokemon: Pokemon | null = null;

	const openModal = (poke: Pokemon) => {
        const modal: ModalSettings = {
			type: 'alert',
			title: `<divstyle="display: flex; justify-content: space-between;"> <p><strong>${poke.name}<strong></p> <p><strong>ID: </strong>${poke.id}</p> </div>`,
			image: poke.sprite,
			body: 
				`
				<div style="max-width: 800px; margin: 0 auto;">
                    <div style="display: flex; justify-content: space-between;">
                        <p><strong>Base Experience:</strong> ${poke.base_experience}</p>
                        <p><strong>Height:</strong> ${poke.height}</p>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
					    <p><strong>Types:</strong> ${poke.types.join(', ')}</p>
                        <p><strong>Weight:</strong> ${poke.weight}</p>
                    </div>
                </div>
            `,
		};
		modalStore.trigger(modal);
    };

	const openMovesModal = (poke: Pokemon) => {
		const pokeMoves = poke.moves
        .map(moveName => moves.find(move => move.name === moveName))
        .filter((move): move is Move => move !== undefined);
		const modal: ModalSettings = {
			type: 'alert',
			title: `<divstyle="display: flex; justify-content: space-between;"> <p><strong>${poke.name}<strong></p></div>`,
			body: 
				`
				<div style="max-width: 800px; margin: 0 auto; max-height: 400px; overflow-y: auto;">
					<div class="mb-8">
						${pokeMoves.map(move => `
							<div class="text-right" style="display: flex; justify-content: space-between;">
								<p><strong>${move.name}</strong></p>
								<p><strong>Type:</strong> ${move.type}</p>
								<p><strong>Power:</strong> ${move.power}</p>
								<p><strong>Accuracy:</strong> ${move.accuracy}</p>
								<p><strong>PP:</strong> ${move.pp}</p>
							</div>
						`).join('')}
					</div>
            	</div>
			`,
		};
		modalStore.trigger(modal);
	};
</script>

<style>
	.card {
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 16px;
		margin: 8px;
		text-align: center;
	}
</style>
<Modal />
<div class="container h-full mx-auto flex justify-center items-center text-center">
	<div class="space-y-5">
		<h1 class="h1">Pokemon</h1>
		
		<Nav activePage="pokemon" />
		<hr class="!border-t-4" />
		
		<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
			{#each pokemon as poke}
				<div class="card card-hover" >
					<h2>{poke.name}</h2>
					<img class="block mx-auto" src={poke.sprite} alt={poke.name} />
					<button class="btn btn-primary py-2 px-3 w-full bg-slate-700 mb-2" on:click={() => openModal(poke)}>View Details</button>
					<button class="btn btn-primary py-2 px-3 w-full bg-slate-700" on:click={() => openMovesModal(poke)}>View Moves</button>
				</div>
			{/each}
		</div>
	</div>
</div>
<Footer />