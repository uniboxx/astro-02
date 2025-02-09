import { authClient } from './auth-client';

export async function signout() {
  const { data, error } = await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        location.href = '/signin';
      },
    },
  });
}
