import { json } from '@sveltejs/kit';

// FILE: /c:/Users/Cameron Hancock/Documents/School/JavaScript/my-sveltkit-app/src/routes/llama/+page.server.js


export async function POST({ request }) {
    const { message } = await request.json();

    try {
        const response = await fetch('http://localhost:11434/api/generate', { // Replace with the actual Llama 3.2 API URL
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
        return json({ reply: data.reply });
    } catch (error) {
        return json({ reply: 'Error: Unable to reach the Llama 3.2 server.' }, { status: 500 });
    }
}