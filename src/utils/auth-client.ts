import { createAuthClient } from 'better-auth/svelte';

export const authClient = createAuthClient({
  baseURL: import.meta.env.DEV
    ? import.meta.env.BETTER_AUTH_LOCAL_URL
    : import.meta.env.BETTER_AUTH_URL,
});

export const { signIn, signOut } = authClient;

export async function signinWithGithub() {
  return await authClient.signIn.social({
    provider: 'github',
  });
}
export async function signinWithGoogle() {
  return await authClient.signIn.social({
    provider: 'google',
  });
}
