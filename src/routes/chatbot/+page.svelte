<script>
    import Chatbot from './chatbot.svelte';
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
    <div class="container h-full mx-auto flex justify-center items-center text-center">
        <div class="space-y-5">
            <h1 class="h1">AI Chatbot</h1>
            <Nav activePage="chatbot" />
            <hr class="border-t-4 border-gray-300 mt-2" />
        </div>
    </div>
    <div class="flex-grow container mx-auto flex justify-center items-center text-center">
        <div class="space-y-5">
            <h2 class="text-2xl font-semibold">llama 3.2</h2>
            <p>Please note that this page is built to connect to a llama3.2 chatbot running locally on a user's machine and will not work if there is no instance running on the user's computer.</p>
            <Chatbot />
        </div>
    </div>
</div>
<Footer />