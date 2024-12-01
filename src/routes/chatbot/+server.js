import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const { message } = await request.json();

    try {
        const response = await fetch('http://localhost:11434/api/chat', { // Replace with the actual Llama 3.2 API URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch from Llama 3.2 API');
        }

        const data = await response.json();
        console.log('API Response:', data); // Log the response
        return json({ reply: data.reply });
    } catch (error) {
        console.error('Error:', error);
        return json({ reply: 'Error: Unable to reach the Llama 3.2 server.' }, { status: 500 });
    }
}