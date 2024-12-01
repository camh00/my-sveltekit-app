<script lang="ts">
    import { onMount } from 'svelte';

    let factData: any = null;
    let weatherData: any = null;
    let todaysForecast: any = null;

    onMount(async () => {
        try {
            // Fetch random fact data from Useless Facts API
            const factResponse = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
            // Fetch weather data from Weather.gov API
            const weatherResponse = await fetch('https://api.weather.gov/gridpoints/OKX/33,37/forecast');
            
            if (factResponse.ok) {
                factData = await factResponse.json();
            } else {
                console.error('Failed to fetch fact data:', factResponse.statusText);
            }

            if (weatherResponse.ok) {
                weatherData = await weatherResponse.json();
                // Get the current forecast seperately so it stays aligned and at the top
                todaysForecast = weatherData.properties.periods[0];
            } else {
                console.error('Failed to fetch weather data:', weatherResponse.statusText);
            }
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
</script>
<div class="container h-full mx-auto flex justify-center items-center text-center">
	<div class="space-y-5">
		<h1 class="h1" >api  routes</h1>
		
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

        <!-- Display random fact if api responds propperly -->
        {#if factData}
            <div class="p-4 border border-gray-300 rounded-lg bg-blue-500">
                <h2 class="text-2xl font-semibold mb-2">Random Fact</h2>
                <p>{factData.text}</p>
                <p>Source: <a href={factData.source_url} target="_blank" class="text-blue-800 underline">{factData.source}</a></p>
            </div>
        {/if}

        <!-- Display weather forecast if api responds propperly -->
        {#if weatherData}
            <div>
                <h2 class="text-2xl font-semibold mb-4">Weather Forecast</h2>
                <!-- Display todays forcast -->
                {#if todaysForecast}
                    <div class="p-4 border border-gray-300 rounded-lg bg-blue-500 mb-4">
                        <h3 class="text-xl font-semibold">{todaysForecast.name}</h3>
                        <img src={todaysForecast.icon} alt={todaysForecast.shortForecast} class="w-12 h-12 mx-auto my-2" />
                        <p>{todaysForecast.detailedForecast}</p>
                        <p>Temperature: {todaysForecast.temperature} {todaysForecast.temperatureUnit}</p>
                        <p>Wind: {todaysForecast.windSpeed} {todaysForecast.windDirection}</p>
                    </div>
                {/if}
                <!-- Display the next weeks forecast -->
                <div class="grid grid-cols-1 gap-4">
                    {#each weatherData.properties.periods as period, index}
                        {#if period.isDaytime}
                            <div class="grid grid-cols-2 gap-4">
                                <div class="p-4 border border-gray-300 rounded-lg bg-blue-400">
                                    <h3 class="text-xl font-semibold">{period.name}</h3>
                                    <img src={period.icon} alt={period.shortForecast} class="w-12 h-12 mx-auto my-2" />
                                    <p>{period.detailedForecast}</p>
                                    <p>Temperature: {period.temperature} {period.temperatureUnit}</p>
                                    <p>Wind: {period.windSpeed} {period.windDirection}</p>
                                </div>
                                {#if weatherData.properties.periods[index + 1] && !weatherData.properties.periods[index + 1].isDaytime}
                                    <div class="p-4 border border-gray-300 rounded-lg bg-blue-800">
                                        <h3 class="text-xl font-semibold">{weatherData.properties.periods[index + 1].name}</h3>
                                        <img src={weatherData.properties.periods[index + 1].icon} alt={weatherData.properties.periods[index + 1].shortForecast} class="w-12 h-12 mx-auto my-2" />
                                        <p>{weatherData.properties.periods[index + 1].detailedForecast}</p>
                                        <p>Temperature: {weatherData.properties.periods[index + 1].temperature} {weatherData.properties.periods[index + 1].temperatureUnit}</p>
                                        <p>Wind: {weatherData.properties.periods[index + 1].windSpeed} {weatherData.properties.periods[index + 1].windDirection}</p>
                                    </div>
                                {/if}
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</div>