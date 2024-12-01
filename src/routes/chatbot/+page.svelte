<script>
    import Chatbot from './chatbot.svelte';
</script>
<div class="container h-full mx-auto flex justify-center items-center text-center">
	<div class="space-y-5">
		<h1 class="h1" >AI Chatbot</h1>
		
		<nav class="nav btn-group">
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
					<a href="/form" class="bg-primary-500">
						<span>📋</span>
						<span class="flex-auto">Form</span>
					</a>
					<a href="/apis" class="bg-primary-500">
						<span>📋</span>
						<span class="flex-auto">API Routes</span>
					</a>
					<a href="/chatbot" class="bg-primary-500">
						<span>📋</span>
						<span class="flex-auto">chatbot</span>
					</a>
				</li>
			</ul>
		</nav>
		<hr class="!border-t-4" />

        <h2 class="h2">llama 3.2</h2>
		<p>Please note that this page is built to connect to a llama3.2 chatbot running locally on a users machine and will not work if there is no instance running on the users computer.</p>
        <Chatbot />
	</div>
</div>
