<script>
    export let activePage = '';
</script>

<nav class="nav btn-group">
    <ul class="flex space-x-4">
        <li>
            <a href="/" class="bg-primary-500 text-white px-4 py-2 rounded {activePage === 'home' ? 'bg-blue-700' : ''}">
                <span>🏠</span>
                <span class="ml-2">Home</span>
            </a>
            <a href="/examples" class="bg-primary-500 text-white px-4 py-2 rounded {activePage === 'examples' ? 'bg-blue-700' : ''}">
                <span>🖥️</span>
                <span class="ml-2">Examples</span>
            </a>
            <a href="/pokemon" class="bg-primary-500 text-white px-4 py-2 rounded {activePage === 'pokemon' ? 'bg-blue-700' : ''}">
                <span>🎮</span>
                <span class="ml-2">Pokemon</span>
            </a>
            <a href="/form" class="bg-primary-500 text-white px-4 py-2 rounded {activePage === 'form' ? 'bg-blue-700' : ''}">
                <span>📋</span>
                <span class="ml-2">Form</span>
            </a>
            <a href="/apis" class="bg-primary-500 text-white px-4 py-2 rounded {activePage === 'apis' ? 'bg-blue-700' : ''}">
                <span>☁️                </span>
                <span class="ml-2">API Routes</span>
            </a>
            <a href="/chatbot" class="bg-primary-500 text-white px-4 py-2 rounded {activePage === 'chatbot' ? 'bg-blue-700' : ''}">
                <span>🤖</span>
                <span class="ml-2">Chatbot</span>
            </a>
        </li>
    </ul>
</nav>