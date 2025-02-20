import { redirect, fail } from '@sveltejs/kit';
import clientPromise from '$lib/mongodb';;
export async function load() {
  try {
      const client = await clientPromise;
      const database = client.db('CS3380');
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
        const client = await clientPromise;
        const database = client.db('CS3380');
        const collection = database.collection('reviews');
  
        await collection.insertOne({ name, email, rating, message });
        console.log('Review submitted');
      } catch (error) {
        console.error('Failed to submit rating', error);
        return fail(500, { message: 'Failed to submit rating' });
      } finally {
      }
    }
  };