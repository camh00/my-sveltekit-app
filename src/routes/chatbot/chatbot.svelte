<script lang="ts">
  let userInput = '';
  let chatHistory: { type: string, text: string }[] = [];
  let loading = false;

  // Function to send the user's message and get the bot's response
  async function sendMessage() {
      if (!userInput.trim()) return; // Don't send empty messages

      chatHistory.push({ type: 'user', text: userInput });
      const prompt = userInput;
      userInput = '';
      loading = true;

      try {
          const response = await fetch('http://localhost:11434/api/generate', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  model: 'llama3.2',
                  prompt: prompt
              })
          });

          if (!response.ok) {
              throw new Error('Failed to fetch from Llama 3.2 API');
          }

          const rawData = await response.text();

          // Split the raw response data by newlines and parse each JSON object
          const responseLines = rawData.split('\n').filter(line => line.trim() !== '');
          const responses = responseLines.map(line => JSON.parse(line));

          // Concatenate the response fields to form the complete response
          const completeResponse = responses.map(res => res.response).join('');
          console.log('Complete response:', completeResponse);

          if (completeResponse) {
              chatHistory = [...chatHistory, { type: 'bot', text: completeResponse }];
          } else {
              chatHistory = [...chatHistory, { type: 'bot', text: 'Error: No reply from the server.' }];
          }
      } catch (error) {
          console.error('Error:', error);
          chatHistory = [...chatHistory, { type: 'bot', text: 'Error: Unable to reach the server.' }];
      } finally {
          loading = false;
      }
  }
</script>

<div class="flex flex-col h-full p-5 bg-gray-100 rounded-lg shadow-lg">
  <div class="flex flex-col gap-4 flex-grow overflow-y-auto mb-4">
      {#each chatHistory as message}
          <div class="p-3 rounded-lg max-w-4/5 break-words bg-blue-200 text-black {message.type === 'user' ? 'self-end text-right' : 'self-start text-left'}">
              {message.text}
          </div>
      {/each}
  </div>
  <div class="flex gap-4">
      <input type="text" bind:value={userInput} on:keydown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Type a message..." class="flex-grow p-3 border border-gray-300 rounded-lg text-black bg-white" />
      <button on:click={sendMessage} disabled={loading} class="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">Send</button>
  </div>
</div>