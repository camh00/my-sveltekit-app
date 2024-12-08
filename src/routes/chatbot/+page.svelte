<script>
    import Chatbot from './chatbot.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>
<div class="min-h-screen container h-full mx-auto flex justify-center items-center text-center">
	<div class="space-y-5">
		<h1 class="h1" >AI Chatbot</h1>
		
		<Nav activePage="chatbot" />
		<hr class="!border-t-4" />

        <h2 class="h2">llama 3.2</h2>
		<p>Please note that this page is built to connect to a llama3.2 chatbot running locally on a users machine and will not work if there is no instance running on the users computer.</p>
        <Chatbot />
	</div>
</div>
<Footer />
