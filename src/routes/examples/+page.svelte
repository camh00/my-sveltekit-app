<script>
	import { CodeBlock } from "@skeletonlabs/skeleton";
	import Nav from '$lib/components/Nav.svelte';
	import Footer from "$lib/components/Footer.svelte";
</script>
<div class="container h-full mx-auto flex justify-center items-center text-center">
	<div class="space-y-5">
		<h1 class="h1" >Coding Examples</h1>
		
		<Nav activePage="examples" />
        <hr class="!border-t-4" />
		

        <h3 class="h3 ">Here are some great examples of JavaScript That I have been learning!</h3>
        <CodeBlock language="js" class="text-left" code={'console.log(\'This is great!\');'}></CodeBlock>
		<div class="border-solid border-2 rounded-3xl p-4">
			<h3 class="h3 ">Objects</h3>
			<p>Objects are a great way to organize and store date and javascripts simple approach makes building object simple.</p>
			<CodeBlock language="js" class="text-left" lineNumbers code={'const car = {\n	type:"Fiat",\n	model:"500",\n	color:"white"\n};'}></CodeBlock>
			<p>You can then change or add propperties of an object using dot notation</p>
			<CodeBlock language="js" class="text-left" lineNumbers code={'car.color = "red";\ncar.owner = "John Doe";'}></CodeBlock>
		</div>
		<hr class="!border-t-4" />

		<div class="border-solid border-2 rounded-3xl p-4">
			<h3 class="h3">Array Manipulation</h3>
			<p>There are some great functions made to manipulate data in arrays.</p>
			<p>For example, splice() is a great method to remove and add data into an array.</p>
			<CodeBlock language="js" class="text-left" lineNumbers code={'\/\/ Create an Array\nconst dogNames = ["Spot", "Fred", "Rover", "Lassy"];\n\n\/\/ At position 2, remove 1 item, add "Rusty" and "Marshal"\ndogNames.splice(2, 1, "Rusty", "Marshal");'}></CodeBlock>
			<p>Another great tool is the slice() method. While you can use slice to select sections of a string, you can also select a section of an array without changing the array</p>
			<CodeBlock language="js" class="text-left" lineNumbers code={'\/\/ Create an Array\nconst dogNames = ["Spot", "Fred", "Rover", "Lassy"];\n\n\/\/ Print out the 2nd and 3rd names\nconsole.log(dogNames.slice(1,3));'}></CodeBlock>
		</div>
	</div>
</div>
<Footer />