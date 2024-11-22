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
        const response = await fetch('http://localhost:11434/api/generate', { // Replace with your backend API URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                model: 'llama3.2', // Replace with the actual model name
                prompt: prompt
            })
        });
        const data = await response.json();
        console.log(data);
        chatHistory.push({ type: 'bot', text: data.reply });
      } catch (error) {
        chatHistory.push({ type: 'bot', text: 'Error: Unable to reach the server.' });
      } finally {
        loading = false;
      }
    }
  </script>
  
  <style>
    .chat-container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    .message {
      margin: 10px 0;
      padding: 10px;
      border-radius: 5px;
      max-width: 80%;
      word-wrap: break-word;
    }
  
    .message.user {
      background-color: #e0f7fa;
      align-self: flex-start;
    }
  
    .message.bot {
      background-color: #f1f8e9;
      align-self: flex-end;
    }
  
    .chat-box {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  
    .input-container {
      display: flex;
      gap: 10px;
      color: #000;
    }
  
    input[type="text"] {
      flex-grow: 1;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  
    button {
      padding: 10px 15px;
      background-color: #00796b;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    button:disabled {
      background-color: #b2dfdb;
      cursor: not-allowed;
    }
  </style>
  
  <div class="chat-container">
    <div class="chat-box">
      {#each chatHistory as message}
        <div class="message {message.type}">
          {message.text}
        </div>
      {/each}
      {#if loading}
        <div class="message bot">Typing...</div>
      {/if}
    </div>
  
    <div class="input-container">
      <input type="text" bind:value={userInput} placeholder="Type a message..." />
      <button on:click={sendMessage} disabled={loading}>Send</button>
    </div>
  </div>
  