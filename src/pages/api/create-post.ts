export const prerender = false;
import type { APIRoute } from 'astro';
import { turso } from '../../turso';

export const POST: APIRoute = async function ({ request, redirect }) {
  try {
    const data = Object.fromEntries(await request.formData());
    const { author, body } = data;
    await turso.execute({
      sql: 'INSERT INTO posts (author, body) VALUES(?,?)',
      args: [author.toString(), body.toString()],
    });
    return redirect('/');
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
};
