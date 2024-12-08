<script>
    import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>
<div class="flex flex-col min-h-screen">
	<div class="container h-full mx-auto flex justify-center items-center text-center">
		<div class="space-y-5">
			<h1 class="h1" >Welcome</h1>
			<Nav activePage="home" />
			<hr class="!border-t-4" />

			<p>My name is Cameron Hancock and this is my Sveltekit app for CS3380: JavaScript Software Development.</p>
		</div>
		
	</div>
</div>
<Footer />
