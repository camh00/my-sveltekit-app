<script>
	import { CodeBlock } from "@skeletonlabs/skeleton";

</script>
<div class="container h-full mx-auto flex justify-center items-center text-center">
	<div class="space-y-5">
		<h1 class="h1" >Coding Examples</h1>
		
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
				</li>
			</ul>
		</nav>
        <hr class="!border-t-4" />
		<aside class="absolute w-half h-full bg-surface-50-900-token border-r-2 shadow-lg">
			<nav class="p-12 text-xl">
				<a class="block" href="#about">About</a>
				<a class="block" href="#contact">Contact</a>
			</nav>
		</aside>

        <h3 class="h3 ">Here are some great examples of JavaScript That I have been learning!</h3>
        <CodeBlock language="js" class="text-left" code={'console.log(\'This is great!\');'}></CodeBlock>
		<h3 class="h3 ">Objects</h3>
		<p>Objects are a great way to organize and store date and javascripts simple approach makes building object simple.</p>
		<CodeBlock language="js" class="text-left" lineNumbers code={'const car = {\n	type:"Fiat",\n	model:"500",\n	color:"white"\n};'}></CodeBlock>
	</div>
</div>
