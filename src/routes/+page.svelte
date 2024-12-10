<script>
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>
<div class="flex flex-col min-h-screen">
    <div class="container h-full mx-auto flex justify-center items-center text-center">
        <div class="space-y-5">
            <h1 class="h1">Welcome</h1>
            <Nav activePage="home" />
            <hr class="!border-t-4" />

            <p class="text-lg">My name is Cameron Hancock and this is my SvelteKit app for CS3380: JavaScript Software Development.</p>
            <p class="text-lg">This website is a project developed to practice and expand my knowledge of JavaScript with a particular focus on the Skeleton SvelteKit framework.</p>
            <p class="text-lg">Here are some of the features and functionalities included in this website:</p>
            <ul class="list-disc list-inside text-left mx-auto max-w-md">
                <li>Interactive examples of JavaScript code</li>
				<li>Detailed information about various Pokémon, including their moves and stats</li>
                <li>A form to submit reviews, with data stored in a MongoDB database</li>
                <li>Weather forecast information retrieved from an external API</li>
				<li>A chatbot interface that connects to a local Llama 3.2 instance</li>
            </ul>
        </div>
    </div>
</div>
<Footer />