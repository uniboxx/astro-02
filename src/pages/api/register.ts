export const prerender = false;
import type { APIRoute } from 'astro';
import { turso } from 'turso';
// import bcrypt from 'bcrypt';

const saltRounds = 10;

export const POST: APIRoute = async function ({ request, redirect }) {
  const data = Object.fromEntries(await request.formData());
  const { username, email, password } = data;
  // bcrypt.hash(password.toString(), saltRounds, async function (err, hash) {
  //   if (err) {
  //     throw new Error('Something went wrong hashing password');
  //   }
  //   try {
  //     await turso.execute({
  //       sql: 'INSERT INTO users (username,email,password) VALUES (?, ?, ?)',
  //       args: [username.toString(), email.toString(), hash.toString()],
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
  return redirect('/');
};
