export const prerender = false;
import type { APIRoute } from 'astro';
import { turso } from '../../turso';
import xss from 'xss';

export const POST: APIRoute = async function ({ request, redirect }) {
  try {
    const data = Object.fromEntries(await request.formData());
    let { author, body } = data;
    if (String(author) === '' || String(body) === '') {
      return redirect('/');
    }
    author = xss(author.toString());
    body = xss(body.toString());

    await turso.execute({
      sql: 'INSERT INTO posts (author, body) VALUES(?,?)',
      args: [author, body],
    });
    return redirect('/');
    // return new Response('ciao');
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
};
