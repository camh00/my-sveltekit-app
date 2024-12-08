# my-sveltekit-app

### Website Hosted at:
[`https://my-sveltekit-app-git-main-camh00s-projects.vercel.app/`](https://my-sveltekit-app-git-main-camh00s-projects.vercel.app/)

## Overview

`my-sveltekit-app` is a web project developed to practice and expand knowledge in JavaScript, with a particular focus on the SvelteKit framework. This app serves as a playground for exploring modern web development techniques, UI components, and the SvelteKit ecosystem.

The website makes use of the [Skeleton UI Toolkit](https://skeleton.dev), a minimalistic and easy-to-use CSS framework designed for fast, lightweight web design. By integrating Skeleton, the app aims to provide a clean and responsive design with minimal effort.

## Installation

To run this app locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/camh00/my-sveltekit-app.git
    ```
2. Navigate into the project directory:
    ```bash
    cd my-sveltekit-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:5173` to view the app.

## Final Project Links and descriptions

1. Properly organize your code using at least 3 custom components and 5 functional SvelteKit routes.
   The three examples of customs components used in this site is the navigation and footer on each page as well as the chatbot section on the chatbot page.

   Heres an example of the navigation components used:
   ```bash
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
    ```

   Also as you can see in this nav component there are 6 functional sveltekit routes.

2. Demonstrate multiple examples of captured user events (click, mouse over, etc.) that cause some action to occur.
   As you can see in the pokemon [pokemon](https://my-sveltekit-app-git-main-camh00s-projects.vercel.app/pokemon) there are multiple capture events such as:
       * Hovering over a pokemon card causes it to grow.
       * Hovering over a button causes the button to highlight.
       * Clicking on a button opens a modal with more information on a pokemone.
     
3. Provide at least 5 examples of data bound to UI elements.
    * In the [chatbot](https://my-sveltekit-app-git-main-camh00s-projects.vercel.app/chatbot) page data is taken from the user in the form of a message and displayed.
      ```bash
      bind:value={userInput}
      ```
      
    * In the [form](https://my-sveltekit-app-git-main-camh00s-projects.vercel.app/form) page the average rating for the site is retieved from a mongodb and displayed.
       ```bash
       <h3 class="h3">Current Average Rating: {data.averageRating}/5</h3>
       ```
       
    * In the [API Routes](https://my-sveltekit-app-git-main-camh00s-projects.vercel.app/apis) page a fun fact is retrieved from an api call and displayed.
       ```bash
       <p>{factData.text}</p>
       ```
       
    * Also in the [API Routes](https://my-sveltekit-app-git-main-camh00s-projects.vercel.app/apis) page a weather forcast is retrieved from an api call and displayed.
       ```bash
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
       ```

       * in the [pokemon](https://my-sveltekit-app-git-main-camh00s-projects.vercel.app/pokemon) page when a user click on "view details" on a pokemon they are given more information about that pokemon.
          ```bash
              const openModal = (poke: Pokemon) => {
                selectedPokemon = poke;
                const modal: ModalSettings = {
                    type: 'alert',
                    title: `<div style="display: flex; justify-content: space-between;"> <p><strong>${poke.name}<strong></p> <p><strong>ID: </strong>${poke.id}</p> </div>`,
                    image: poke.sprite,
                    body: `
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
          ```

4. Provide at least 2 examples of utilizing functions that structure and reshape JSON data retrieved for external sources.
    * As seen in in the coding segment above when user click on "view details" on a pokemon a modal pops up with more information about that pokemon that was retrieved from a json file.
    * Also as seen above in the [API Routes](https://my-sveltekit-app-git-main-camh00s-projects.vercel.app/apis) page, weather information is retrieved from an api call, formatted and displayed to the viewer.
    
5. Connect to at least 1 outside API using a mix of SvelteKit loading functions and display retrieved data in your UI.
   
   There are a few API calls used in this website, these include:
   * A call to a mongodb to retrieve website ratings
   * A call to https://uselessfacts.jsph.pl/api/v2/facts/random?language=en to retreive a useless fact
   * A call to https://api.weather.gov/gridpoints/OKX/33,37/forecast to retreive a weather forcast
