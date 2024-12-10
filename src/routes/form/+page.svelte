<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let name = '';
  let email = '';
  let rating = '';
  let message = '';

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('rating', rating);
    formData.append('message', message);


    const response = await fetch('/form', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
	  alert('Form submitted successfully!');
      location.reload();
    } else {
      // Handle error
      console.error('Failed to submit form');
    }
  }
  export let data: { averageRating: number };
</script>
<div class="flex flex-col min-h-screen">
  <div class="container h-full mx-auto flex justify-center items-center text-center">
    <div class="space-y-5">
      <h1 class="h1" >Coding Examples</h1>
      
      <Nav activePage="form" />
          <hr class="!border-t-4" />
      <h3 class="h3">Current Average Rating: {data.averageRating}/5</h3>
      <hr class="!border-t-4" />
      <form class="border rounded-xl p-4" on:submit={handleSubmit} method="POST">
        <h2 class="h2 mb-4">Please Submit a Review!</h2>
        <label for="name">Name:</label>
        <input class="text-black mb-3" type="text" id="name" name="name" bind:value={name} required>
        <label for="email">Email:</label>
        <input class="text-black mb-3" type="email" id="email" name="email" bind:value={email} required>
        <label for="rating">Rating:</label>
        <select class="text-black mb-3" id="rating" name="rating" bind:value={rating} required>
          <option value="" disabled selected>Please select a rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>
        <label for="message">Message:</label>
        <textarea class="text-black" id="message" name="message" bind:value={message} required></textarea>
        <br>
        <button class="btn variant-filled mt-4" type="submit">Submit</button>
        </form>
    </div>
  </div>
</div>
<Footer />

