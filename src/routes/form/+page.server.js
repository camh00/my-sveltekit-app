import { redirect, fail } from '@sveltejs/kit';
console.log(import.meta.env.VITE_URL);
import { MongoClient } from 'mongodb';

const uri = import.meta.env.VITE_MONGODB_URI;
const client = new MongoClient(uri);

export async function load() {
    try {
      await client.connect();
      const database = client.db('CS3380'); // Updated database name
      const collection = database.collection('reviews');
  
      const ratings = await collection.find({}, { projection: { rating: 1, _id: 0 } }).toArray();
      const averageRating = ratings.reduce((acc, review) => acc + review.rating, 0) / ratings.length;
      console.log('Average Rating: ' + averageRating);
      return {
        averageRating
      };
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      return fail(500, { message: 'Failed to load ratings' });
    } finally {
      await client.close();
    }
  }
  
  /**
 * @param {import('@sveltejs/kit').RequestEvent} event
 */
  export const actions = {
    async default({ request }) {
      const formData = await request.formData();
      const name = formData.get('name')?.toString() ?? '';
      const email = formData.get('email')?.toString() ?? '';
      const rating = parseInt(formData.get('rating')?.toString() ?? '0', 10);
      const message = formData.get('message')?.toString() ?? '';
  
      if (!name || !email || isNaN(rating) || rating < 1 || rating > 5 || !message) {
        return fail(400, { message: 'Invalid form submission' });
      }
  
      try {
        await client.connect();
        const database = client.db('CS3380'); // Updated database name
        const collection = database.collection('reviews');
  
        await collection.insertOne({ name, email, rating, message });
        console.log('Review submitted');
      } catch (error) {
        console.error('Failed to submit rating', error);
        return fail(500, { message: 'Failed to submit rating' });
      } finally {
        await client.close();
      }
    }
  };